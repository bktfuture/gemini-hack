
import ChatBot from "../../components/ChatBot/ChatBotArea/ChatBotArea";
import BigBanner from '@/components/BigBanner/BigBanner';
import './Dashboard.css';
import Link from 'next/link';
import Applications from '@/components/Applications/Applications';
import Calendar from 'react-calendar';

const Dashboard = () => {
	return (
		<div className="main">
			<div className="row">
				<BigBanner></BigBanner>
				<Calendar></Calendar>
			</div>

			<Applications></Applications>
			 <ChatBot />
		</div>
	);

};
export default Dashboard;
