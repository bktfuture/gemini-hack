import "./ChatBot.css";
import Image from "next/image";
import React, { useState } from "react";
import Message from "./Message";
import InnerChatBotSVG from "../../../public/icons/InnerChatBotIcon.svg";
import ExpandChatSVG from "../../../public/icons/ExpandChat.svg";
import CloseChatSVG from "../../../public/icons/CloseChat.svg";
import UploadIconSVG from "../../../public/icons/UploadIcon.svg";
import { useGlobalContext } from "../../../context/globalContext";

interface MessageProps {
  profileImage: string;
  uploadedImage: File | undefined;
  username: string;
  question: string;
}

function ChatBot() {
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const { userInfo } = useGlobalContext();
  const [imageUploadState, setImageUploadState] = useState(""); //Can be empty string, loading, or uploaded.
  const [imageToUpload, setImageToUpload] = useState<File>();

  const handleSendMessage = (message: string) => {
    /*
    Make API calls here, and change the second object below 
    to the response because that's the Gemini AI prompt.
    */

    if (message && imageToUpload) {
      /* 
      Send message and file.
      */
    } else if (message && !imageToUpload) {
      /*
      Send only message.
      */
    } else if (imageToUpload && !message) {
      /*
      Send only file.
      */
    } else {
      //They probably did something they weren't supposed to...
      return;
    }

    //I think I can copy this code into the conditional statements above if needed.
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        profileImage: InnerChatBotSVG,
        uploadedImage: imageToUpload,
        username: userInfo.firstName,
        question: message,
      },
      //Fill in Gemini Info here.
      {
        profileImage: InnerChatBotSVG,
        uploadedImage: undefined,
        username: "Gemini AI",
        question: "Sample Gemini response",
      },
    ]);
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
        <div className="input-or-upload-section">
          <div className="show-image-or-loading">
            {imageUploadState === "loading" && <p>Loading...</p>}
            {imageUploadState === "uploaded" && imageToUpload && (
              <Image
                className="image-in-chat"
                src={URL.createObjectURL(imageToUpload)}
                /*src={imageToUpload}*/
                alt="Uploaded Image"
                width={300} // Replace with desired width
                height={200} // Optional: Add height if needed
              />
            )}
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
          </div>
          <label htmlFor="fileInput">
            {" "}
            <Image src={UploadIconSVG} alt="Upload icon" />
          </label>
          <input
            type="file"
            id="fileInput"
            name="file"
            onChange={(e) => handleUploadImage(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
