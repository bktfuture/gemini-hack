//import ArrowIcon from "../Icons/ArrowIcon.svg";
import "./Applications.css";
import CollegeApplicationSVG from "../../public/icons/CollegeApplication.svg";
import FafsaSVG from "../../public/icons/FAFSA.svg";
import VisaSVG from "../../public/icons/Visa.svg";
import ApplicationCard from "./ApplicationCard";

function Applications() {
  return (
    <div className="container">
      <h2 className="applications-header">Applications</h2>
      <div className="applications-flexbox">
        <ApplicationCard
          image={CollegeApplicationSVG}
          biggerText="College Applications"
          smallerText="Let's get your College Applications started."
        />
        <ApplicationCard
          image={FafsaSVG}
          biggerText="FAFSA"
          smallerText="Let's get your FAFSA application started."
        />
        <ApplicationCard
          image={VisaSVG}
          biggerText="Visa"
          smallerText="Let's get your Visa application started"
        />
      </div>
    </div>
  );
}

export default Applications;
