import Image from "next/image";
import Link from "next/link";
import ChatBotArea from "../components/ChatBot/ChatBotArea/ChatBotArea";

export default function Home() {
  return (
    <div>
      <p>Hello, world, geminidocs here</p>
      <h2>
        <Link href="/dashboard">DASHBOARD</Link>
        <Link href="/signin">Sign In</Link>
      </h2>
      <ChatBotArea />
    </div>
  );
}
