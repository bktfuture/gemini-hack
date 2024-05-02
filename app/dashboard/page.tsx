// MC: to debug with useEffect, can remove later
"use client";
import BigBanner from '@/components/BigBanner/BigBanner';
import './Dashboard.css';
import Link from 'next/link';
import Applications from '@/components/Applications/Applications';
import Calendar from 'react-calendar';
import Tasks from '@/components/TasksSection/TasksSection';
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";

const Dashboard = () => {
  const {userInfo, setUserInfo} = useGlobalContext();

  useEffect(() => {
		// Once logged in /registed account we will see the userInfo
    console.log(userInfo)
  }, [])
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
