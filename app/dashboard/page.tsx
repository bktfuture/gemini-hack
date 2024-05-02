// MC: to debug with useEffect, can remove later
"use client";
import BigBanner from "@/components/BigBanner/BigBanner";
import "./Dashboard.css";
import Link from "next/link";
import Applications from "@/components/Applications/Applications";
import Calendar from "react-calendar";
import Tasks from "@/components/TasksSection/TasksSection";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { userInfo, setUserInfo } = useGlobalContext();
  return (
    <div className="main">
      <div className="col">
        <BigBanner></BigBanner>
        <Applications></Applications>
      </div>
    </div>
  );
};
export default Dashboard;
