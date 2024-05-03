import Image from 'next/image';
import Link from 'next/link';
import ChatBotArea from '../components/ChatBot/ChatBotArea/ChatBotArea';
import styles from './indexpage.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import college from '../public/collegeApp.svg';

export default function Home() {
	return (
		<div className={styles.main}>
			<Navbar></Navbar>
			<div className={styles.hero}>
				<h1>A step-by-step guide to studying in the US</h1>
				<p>An application guide for First Gen Students</p>
				<button>
					<Link className={styles.li} href="/fafsa">
						Get started
					</Link>
				</button>
			</div>
			<h2 className={styles.h2}>Services</h2>
			<div className={styles.box}>
				<div className={styles.imgbox}>
					<Image src={college} width={500}></Image>
				</div>
				<div className={styles.col}>
					<h1>College Applications</h1>
					<h2 className={styles.hBig}>Secure acceptance from your dream isntitution</h2>
					<p>
						Gemini Docs simplifies your journey to studying in the US by ensuring you meet admission requirements and guiding you through the
						specific Visa application required for your chosen institution.
					</p>
					<button className={styles.getStarted}>Get started</button>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
