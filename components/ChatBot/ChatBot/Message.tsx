import Image from "next/image";

interface MessageProps {
  profileImage: string;
  uploadedImage: File | undefined;
  username: string;
  question: string;
  pdfIcon: string | undefined;
}

function Message({
  profileImage,
  uploadedImage,
  username,
  question,
  pdfIcon,
}: MessageProps) {
  return (
    <div className="message">
      <div className="name-header">
        <Image
          style={{ height: "21px", width: "21px" }}
          src={profileImage}
          alt="message icon"
        />
        <p className="name">{username}</p>
      </div>
      <div className="individual-message-content">
        <p className="question">{question}</p>
        {/*
        {uploadedImage && pdfIcon ? (
          <Image
            className="uploaded-image-in-chat"
            src={pdfIcon}
            alt="Uploaded image in chat"
            width={50} // Replace with desired width
            height={50} // Optional: Add height if needed
          />
        ) : null}
      */}
      </div>
    </div>
  );
}

export default Message;
