import Image from 'next/image';
import Link from 'next/link';
import ChatBotArea from '../components/ChatBot/ChatBotArea/ChatBotArea';
import styles from './indexpage.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import college from '../public/collegeApp.svg';
import fasfa from '../public/fasfa.png';
import visa from '../public/visa.png';

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
					<h1>COLLEGE APPLICATIONS</h1>
					<h2 className={styles.hBig}>Secure acceptance from your dream institution</h2>
					<p>
						Gemini Docs simplifies your journey to studying in the US by ensuring you meet admission requirements and guiding you through the
						specific Visa application required for your chosen institution.
					</p>
					<button className={styles.getStarted}>Get started</button>
				</div>
			</div>
			<br />
			<div className={styles.box}>
				<div className={styles.col1}>
					<h1>FASFA</h1>
					<h2 className={styles.hBig}>Get the financial aid you deserve</h2>
					<p>
						Struggling to fill out the FAFSA application? You're not alone. But don't let financial aid paperwork hold you back from your college
						dreams! Our app makes completing the FAFSA easier than ever. Get step-by-step instructions and make work simple.
					</p>
					<button className={styles.getStarted2}>Get started</button>
				</div>
				<div className={styles.imgbox}>
					<Image src={fasfa} width={500}></Image>
				</div>
			</div>

			<div className={styles.box3}>
				<div className={styles.imgbox}>
					<Image src={visa} width={500}></Image>
				</div>
				<div className={styles.col3}>
					<h1>VISA</h1>
					<h2 className={styles.hBig}>Enchance your chances of obtaining Visa</h2>
					<p>
						The Visa process involves securing acceptance from your desired educational institution, completing necessary financial aid
						applications, and attending a Visa interview. Gemini Docs helps you fill out documentation & realize your dreams of studying in the US.
					</p>
					<button className={styles.getStarted3}>Get started</button>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
