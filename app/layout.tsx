'use client';
import { useRouter } from 'next/navigation';
import LeftMenu from '@/components/LeftMenu';
import { usePathname } from 'next/navigation';

// import localFont from 'next/font/local';
// export const metadata = {
// 	title: 'GeminiDocs',
// 	description: '',
// };
// const sfPro = localFont({
// 	src: [
// 		{
// 			style: 'regular',
// 			weight: '400',
// 			path: '/fonts/Sf-Regular.OTF',
// 		},
// 		{
// 			style: 'bold',
// 			weight: '700',
// 			path: '/fonts/Sf-Bold.OTF',
// 		},
// 		{
// 			style: 'medium',
// 			weight: '500',
// 			path: '/fonts/Sf-Medium.OTF',
// 		},
// 		{
// 			style: 'semibold',
// 			weight: '600',
// 			path: '/fonts/Sf-Semibold.OTF',
// 		},
// 	],
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body>
				{pathname != '/' && <LeftMenu />}
				{children}
			</body>
		</html>
	);
}
