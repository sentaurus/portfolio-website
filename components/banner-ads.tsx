import { useEffect } from 'react';

declare global {
	interface Window {
		adsbygoogle: unknown[];
	}
}

export default function BannerAd() {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {
			console.error('Adsense error:', e);
		}
	}, []);

	return (
		<ins
			className='adsbygoogle'
			style={{ display: 'block', textAlign: 'center' }}
			data-ad-client='ca-pub-5295382362712798'
			data-ad-slot='1234567890' // Ganti sesuai slot iklan kamu
			data-ad-format='auto'
			data-full-width-responsive='true'
		/>
	);
}
