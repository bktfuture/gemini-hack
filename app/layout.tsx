'use client';
import { useRouter } from 'next/navigation';
import LeftMenu from '@/components/LeftMenu';
import { usePathname } from 'next/navigation';
import styles from './globals.module.css';
import NavbarDs from '@/components/NavbarDs';

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
				{pathname != '/' && pathname != '/signin' && <LeftMenu />}
				{pathname != '/' && pathname != '/signin' && <NavbarDs></NavbarDs>}

				{children}
			</body>
		</html>
	);
}
