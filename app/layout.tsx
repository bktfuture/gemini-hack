'use client';
import ChatBot from '@/components/ChatBot/ChatBot/ChatBot';
import { useRouter } from 'next/navigation';
import LeftMenu from '@/components/LeftMenu';
import { usePathname } from 'next/navigation';
import Calendar from 'react-calendar';
import './Calendar.css';
import styles from './globals.module.css';
import NavbarDs from '@/components/NavbarDs';
import ifMenuNeeded from '../scripts/ifMenuNeeded';
import { GlobalContextProvider } from '../context/globalContext';
import ChatBotArea from '@/components/ChatBot/ChatBotArea/ChatBotArea';
import Tasks from '@/components/TasksSection/TasksSection';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<head>
				<title>GeminiDocs</title>
				<meta name="description" content="Your documentation assistant!" />
				<link rel="icon" href="/geminiDocsLogo.png"></link>
			</head>
			<body className={styles.body}>
				<GlobalContextProvider>
					{ifMenuNeeded(pathname) && <LeftMenu />}
					<div className={styles.dashboardCol}>
						{ifMenuNeeded(pathname) && <NavbarDs></NavbarDs>}
						<div className={styles.calendRow}>
							{children}
							<div className={styles.calendCol}>
								{ifMenuNeeded(pathname) && <Calendar></Calendar>}
								{ifMenuNeeded(pathname) && (
									<Tasks
										text1="This will be your to-do helper!"
										text2="Each page has its own set"
										text3="Check them out!"
										text4="Good luck!"
									></Tasks>
								)}

								<div className={styles.chatbot}>{ifMenuNeeded(pathname) && <ChatBotArea />}</div>
							</div>
						</div>
					</div>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
