import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<head>
				<title>GeminiDocs</title>
				<meta name="description" content="Your documentation assistant!" />
				<link rel="icon" href="/geminiDocsLogo.png"></link>
			</head>
			<p>Hello, world, geminidocs here</p>
			<h2>
				<Link href="/dashboard">DASHBOARD</Link>
			</h2>
		</div>
	);
}
