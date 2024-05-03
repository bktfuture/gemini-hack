import "./ChatBot.css";
import Image from "next/image";
import React, { useState, useRef } from "react";
import pdfIcon from "../../../public/icons/pdfIcon.svg";
import profileIcon from "../../../public/icons/profileIcon.svg";
import Message from "./Message";
import ChatBotSendMessage from "../../../public/icons/ChatBotSendMessage.svg";
import InnerChatBotSVG from "../../../public/icons/InnerChatBotIcon.svg";
import ExpandChatSVG from "../../../public/icons/ExpandChat.svg";
import CloseChatSVG from "../../../public/icons/CloseChat.svg";
import UploadIconSVG from "../../../public/icons/UploadIcon.svg";
import { useGlobalContext } from "../../../context/globalContext";
import axios from "axios";

interface MessageProps {
  profileImage: string;
  uploadedImage: File | undefined;
  username: string;
  question: string;
  pdfIcon: string | undefined;
}

function ChatBot() {
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const [currMessage, setCurrMessage] = useState("");
  const form = useRef(null);
  const { userInfo } = useGlobalContext();
  const [imageUploadState, setImageUploadState] = useState(""); //Can be empty string, loading, or uploaded.
  const [imageToUpload, setImageToUpload] = useState<File>();

  const submit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", currMessage);
    if (imageToUpload) {
      formData.append("file", imageToUpload);
    }
    console.log(formData.get("message"));

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/gemini/message/${userInfo.user_id}`,
        //`http://localhost:8000/api/v1/gemini/message/6633ce2431d7cd5011af3ed0`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //console.log("Response:", response.data);
      console.log(response);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          profileImage: profileIcon,
          uploadedImage: imageToUpload,
          username: userInfo.firstName,
          question: currMessage,
          pdfIcon: pdfIcon,
        },
        //Fill in Gemini Info here.
        {
          profileImage: InnerChatBotSVG,
          uploadedImage: pdfIcon,
          username: "Gemini AI",
          question: response.data.response,
          pdfIcon: pdfIcon,
        },
      ]);

      setCurrMessage(""); // Clear message after successful send
      setImageToUpload(undefined); // Clear file selection after successful send
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle errors appropriately, e.g., display error messages to user
    }

    if (form.current) {
      const data = new FormData(form.current);

      console.log(data);
      //console.log("CURR MESSAGE: ", currMessage);
      data.append("file", currMessage);
      console.log(data);
      console.log(data.get("currMessage"));

      /*
       */
    }
  };

  const handleUploadImage = (e: any) => {
    setImageUploadState("loading"); // Start loading animation immediately
    setImageToUpload(e.target.files?.[0]);
    setImageUploadState("uploaded");
  };

  return (
    <div className="chat-container">
      <div className="top-of-chat">
        <Image src={ExpandChatSVG} alt="Expand icon" />
        <Image src={CloseChatSVG} alt="Close chat icon" />
      </div>
      <hr className="separator" />
      <div className="below-top">
        <div className="message-box">
          <div className="message">
            <div className="name-header">
              <Image src={InnerChatBotSVG} alt="Inner chatbot icon" />
              <p className="name">Gemini AI</p>
            </div>
            <div className="individual-message-content">
              <p className="multicolored-hello-message">
                Hello, {userInfo.firstName}
              </p>
              <p className="question">
                What documents can I help you with today?
              </p>
            </div>
          </div>
          {messages.map((message) => (
            <Message key={message.question} {...message} />
          ))}
        </div>

        <div className="input-msg-box">
          <form ref={form} onSubmit={submit}>
            <div className="show-image-or-loading">
              {/*
              {imageUploadState === "loading" && <p>Loading...</p>}
              {imageUploadState === "uploaded" && imageToUpload && (
                <Image
                  className="image-in-chat"
                  src={pdfIcon}
                  alt="Uploaded Image"
                  width={100} // Replace with desired width
                  height={100} // Optional: Add height if needed
                />
              )}
            */}
              <div className="input-or-upload-section">
                <input
                  className="prompt-gemini-box"
                  placeholder="Enter your message here..."
                  /*
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    const message = (event.target as HTMLInputElement).value;
                    handleSendMessage(message);
                    (event.target as HTMLInputElement).value = ""; // Clear input after sending
                  }
                }}
                */
                  value={currMessage}
                  onChange={(e) => setCurrMessage(e.target.value)}
                />
                <label htmlFor="fileInput">
                  {" "}
                  <Image src={UploadIconSVG} alt="Upload icon" />
                </label>
              </div>
              <button className="remove-button-styling" type="submit">
                <Image src={ChatBotSendMessage} alt="send button" />
              </button>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              id="fileInput"
              name="file"
              onChange={(e) => handleUploadImage(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
