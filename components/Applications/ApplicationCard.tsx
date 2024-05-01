import Image from "next/image";

interface ApplicationCardProps {
  image: string;
  biggerText: string;
  smallerText: string;
}

function ApplicationCard({
  image,
  biggerText,
  smallerText,
}: ApplicationCardProps) {
  return (
    <div className="applications-card">
      <Image className="image" src={image} alt="not sure" />
      <p className="card-bigger-text">{biggerText}</p>
      <p className="card-smaller-text">{smallerText}</p>
      <button className="start-button">
        <div className="inner-button">
          <p>Start</p>
          <svg
            width="21"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="start-button-arrow"
          >
            <path
              d="M8.5 15L13.5001 10L8.5 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default ApplicationCard;
