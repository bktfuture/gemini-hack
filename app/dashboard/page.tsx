import BigBanner from "@/components/BigBanner/BigBanner";
import ChatBot from "../../components/ChatBot/ChatBotArea/ChatBotArea";
import styles from "./dashboard.module.css";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <ChatBot />
    </div>
  );
};
export default Dashboard;
