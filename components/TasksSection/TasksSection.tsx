"use client";
import "./TasksSection.css";
import Image from "next/image";
import IndividualTask from "./IndividualTask";
import CheckBoxSVG from "../../public/icons/check_box.svg";
import DotDotDotButtonSVG from "../../public/icons/DotDotDotButton.svg";

function Tasks(props: any) {
  return (
    <div className="container-task">
      <div className="header">
        <div className="left-header">
          <Image
            className="circle-for-checkbox"
            src={CheckBoxSVG}
            alt="checkbox"
          ></Image>
          <p className="header-text">Tasks</p>
        </div>
        <Image src={DotDotDotButtonSVG} alt="dot dot dot button" />
      </div>
      <div className="tasks">
        {Object.keys(props).map((key) => (
          <IndividualTask text={props[key]} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
