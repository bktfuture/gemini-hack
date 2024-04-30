import Image from "next/image";
import Link from "next/link";
import ChatBot from "../components/ChatBot/ChatBotArea/ChatBotArea";

export default function Home() {
  return (
    <div>
      <p>Hello, world, geminidocs here</p>
      <h2>
        <Link href="/dashboard">DASHBOARD</Link>
      </h2>
    </div>
  );
}
