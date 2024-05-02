import tempfile
from typing import List

from langchain_core.documents import Document
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.vectorstores import VST
from langchain_text_splitters import RecursiveCharacterTextSplitter

from api.database import fs
from api.config import GEMINI_API_KEY, QDRANT_API_KEY, QDRANT_URI, QDRANT_COLLECTION_NAME
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Qdrant
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI


async def load_pdf_from_gridfs(file_id):
    pdf_file = await fs.open_download_stream(file_id)
    pdf_bytes = await pdf_file.read()
    pdf_metadata = pdf_file.metadata

    # Save downloaded bytes to file to open with PyPDFLoader
    with tempfile.NamedTemporaryFile() as tf:
        tf.write(pdf_bytes)
        temp_file_path = tf.name

        loader = PyPDFLoader(temp_file_path)
        data = loader.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=50)
    docs = text_splitter.split_documents(data)

    for doc in docs:
        doc.metadata.update(pdf_metadata)

    return docs


def embed_document(docs: List[Document]):
    qdrant = Qdrant.from_documents(
        docs,
        GoogleGenerativeAIEmbeddings(model="models/text-embedding-004", google_api_key=GEMINI_API_KEY),
        url=QDRANT_URI,
        prefer_grpc=True,
        api_key=QDRANT_API_KEY,
        collection_name=QDRANT_COLLECTION_NAME,
    )

    return qdrant


def create_filtered_retriever(qdrant: VST, user_id: str):
    retriever = qdrant.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs={'score_threshold': 0.8, 'filter': {'userId': user_id}}
    )
    return retriever


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


def run_rag_chain(question: str, qdrant: VST, user_id: str):
    prompt_template = """
    You are an assistant for question-answering tasks related to visas, FAFSA (Federal student aid) college applications
    for first generation students who likely don't know a lot about the topics. Try to answer questions in a clear
    and simple manner.
    
    Use the following context to supplement your own knowledge base information of the above topics when answering the given question.
    If there is no context or the context isn't relevant to the actual question (which can happen),
    then think rationally from your own knowledge base to answer the given question.
    
    Context: {context}
    
    Question: {question} 
    """

    prompt = ChatPromptTemplate.from_template(prompt_template)
    llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=GEMINI_API_KEY)
    retriever = create_filtered_retriever(qdrant, user_id)
    # retriever = qdrant.as_retriever()

    print("Relevant docs from retriever: ", retriever.invoke(question))

    demo_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
    )

    print(demo_chain.invoke(question))

    rag_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    return rag_chain.invoke(question)
