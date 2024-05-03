'use client';
import Link from 'next/link';
import styles from './leftmenu.module.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';
import { PiGraduationCap } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { FiHeadphones } from 'react-icons/fi';
import { IoLogOut } from 'react-icons/io5';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const LeftMenu = () => {
	const pathname = usePathname();
	// const [isActive, setActive] = useState(true);

	// const toggleClass = () => {
	// 	setActive(!isActive);
	// };

	return (
		<div className={styles.container}>
			<div className={styles.boxRow}>
				<img src="/geminiDocsLogo.png" alt="Logo GeminiDocs" width="38" height="50"></img>
				<h1 className={styles.logoText}>Gemini Docs</h1>
			</div>
			<div className={styles.boxCol}>
				<div className={styles.ul}>
					<div className={pathname == '/dashboard' ? styles.liBoxActive : styles.liBox}>
						<MdSpaceDashboard fontSize="1.2rem" />
						{/* <RxDashboard fontSize="1.2rem" /> */}
						<Link className={pathname == '/dashboard' ? styles.liActive : styles.li} href="/dashboard">
							Dashboard
						</Link>
					</div>
					<div className={pathname == '/fafsa' ? styles.liBoxActive : styles.liBox}>
						<BiDollar fontSize="1.2rem" />
						<Link className={pathname == '/fafsa' ? styles.liActive : styles.li} href="/fafsa">
							FAFSA
						</Link>
					</div>
					<div className={pathname == '/visa' ? styles.liBoxActive : styles.liBox}>
						<IoDocumentTextOutline fontSize="1.2rem" />

						<Link className={pathname == '/visa' ? styles.liActive : styles.li} href="/visa">
							VISA
						</Link>
					</div>
					<div className={styles.liBox}>
						<PiGraduationCap fontSize="1.2rem" />
						<Link className={styles.li} href="/universityapplications">
							College Applications
						</Link>
					</div>
					<div className={styles.liBox}>
						<IoSettingsOutline fontSize="1.2rem" />
						<Link className={styles.li} href="">
							Settings
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.btnBox}>
				<button className={styles.btnContactSupport}>
					<FiHeadphones fontSize="1.2rem" />
					<p>Contact Support</p>
				</button>
				<button className={styles.btnLogOut}>
					<IoLogOut fontSize="1.2rem" />
					<p>Logout</p>
				</button>
			</div>
		</div>
	);
};

export default LeftMenu;
