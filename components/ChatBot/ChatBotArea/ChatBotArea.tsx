"use client";
import Image from "next/image";
import ChatBotSVG from "../../../public/icons/Chatbot.svg";
import ChatBot from "../ChatBot/ChatBot";
import { useState } from "react";
import "./ChatBoxArea.css";

function ChatBotArea() {
  const [chatBotVisible, setChatBotVisible] = useState(false);

  function toggleChatBot() {
    setChatBotVisible(!chatBotVisible);
  }

  return (
    <div className="chatbot-area-container">
      {chatBotVisible && <ChatBot />}
      <Image
        className="chatbot-button"
        src={ChatBotSVG}
        onClick={toggleChatBot}
        alt="chatbot button icon"
      />
    </div>
  );
}

export default ChatBotArea;
