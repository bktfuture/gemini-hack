import "./ChatBot.css";
import Image from "next/image";
import React from "react";
import Message from "./Message";
import InnerChatBotSVG from "../../../public/icons/InnerChatBotIcon.svg";
import ExpandChatSVG from "../../../public/icons/ExpandChat.svg";
import CloseChatSVG from "../../../public/icons/CloseChat.svg";
import UploadIconSVG from "../../../public/icons/UploadIcon.svg";
import { useGlobalContext } from "../../../context/globalContext";

interface MessageProps {
  image: string;
  username: string;
  question: string;
}

function ChatBot() {
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const { username } = useGlobalContext();

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { image: InnerChatBotSVG, username: username, question: message },
    ]);
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
              <p className="multicolored-hello-message">Hello, {username}</p>
              <p className="question">
                What documents can I help you with today?
              </p>
            </div>
          </div>
          {messages.map((message) => (
            <Message key={message.question} {...message} />
          ))}
        </div>
        <div className="input-or-upload-section">
          <input
            className="prompt-gemini-box"
            placeholder="Enter your message here..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                const message = (event.target as HTMLInputElement).value;
                handleSendMessage(message);
                (event.target as HTMLInputElement).value = ""; // Clear input after sending
              }
            }}
          />
          <Image src={UploadIconSVG} alt="Upload icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
