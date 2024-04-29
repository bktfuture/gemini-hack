import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<h1>Hello, world, geminidocs here</h1>
			<h2>
				<Link href="/dashboard">DASHBOARD</Link>
			</h2>
		</main>
	);
}
