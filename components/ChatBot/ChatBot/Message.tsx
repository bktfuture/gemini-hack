import Image from "next/image";

interface MessageProps {
  image: string;
  username: string;
  question: string;
}

function Message({ image, username, question }: MessageProps) {
  return (
    <div className="message">
      <div className="name-header">
        <Image src={image} alt="message icon" />
        <p className="name">{username}</p>
      </div>
      <div className="individual-message-content">
        <p className="question">{question}</p>
      </div>
    </div>
  );
}

export default Message;
