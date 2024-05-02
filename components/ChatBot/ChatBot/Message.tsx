import Image from "next/image";

interface MessageProps {
  profileImage: string;
  uploadedImage: File | undefined;
  username: string;
  question: string;
}

function Message({
  profileImage,
  uploadedImage,
  username,
  question,
}: MessageProps) {
  return (
    <div className="message">
      <div className="name-header">
        <Image src={profileImage} alt="message icon" />
        <p className="name">{username}</p>
      </div>
      <div className="individual-message-content">
        <p className="question">{question}</p>
        {uploadedImage ? (
          <Image
            className="uploaded-image-in-chat"
            src={URL.createObjectURL(uploadedImage)}
            alt="Uploaded image in chat"
            width={50} // Replace with desired width
            height={50} // Optional: Add height if needed
          />
        ) : null}
      </div>
    </div>
  );
}

export default Message;
