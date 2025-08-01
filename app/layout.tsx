import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<head>
				<title>Dika | Personal Portfolio</title>
				<meta name='description' content='Dika is a Fullstack developer with 3 years of experience.' />
				<meta name='google-adsense-account' content='ca-pub-5295382362712798' />
				<Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5295382362712798' crossOrigin='anonymous' />
			</head>
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
				<div className='bg-[#0091ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0091ff]'></div>
				<div className='bg-[#ff0005] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ff0005]'></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />

						<Toaster position='top-right' />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
