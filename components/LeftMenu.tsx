import Link from 'next/link';
import styles from './leftmenu.module.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';
import { IoDocumentText } from 'react-icons/io5';
import { PiGraduationCap } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { FiHeadphones } from 'react-icons/fi';
import { IoLogOut } from 'react-icons/io5';

const LeftMenu = () => {
	return (
		<div className={styles.container}>
			<div className={styles.boxRow}>
				<img src="/geminiDocsLogo.png" alt="Logo GeminiDocs" width="38" height="50"></img>
				<h1 className={styles.logoText}>Gemini Docs</h1>
			</div>
			<div className={styles.boxCol}>
				<ul className={styles.ul}>
					<li className={styles.liBox}>
						<RxDashboard />
						<Link className={styles.li} href="">
							Dashboard
						</Link>
					</li>
					<li className={styles.liBox}>
						<IoDocumentText />
						<Link className={styles.li} href="">
							VISA
						</Link>
					</li>
					<li className={styles.liBox}>
						<BiDollar />
						<Link className={styles.li} href="">
							FASFA
						</Link>
					</li>
					<li className={styles.liBox}>
						<PiGraduationCap />
						<Link className={styles.li} href="">
							College Applications
						</Link>
					</li>
					<li className={styles.liBox}>
						<IoSettingsOutline />
						<Link className={styles.li} href="">
							Settings
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.activeBtn}>
				<FiHeadphones />
				<p>Contact Support</p>
			</div>
			<div className={styles.btn}>
				<IoLogOut />
				<p>Logout</p>
			</div>
		</div>
	);
};

export default LeftMenu;
