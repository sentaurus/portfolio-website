'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id='about'>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				I am a versatile <span className='font-medium'>full-stack developer</span>, with expertise in various programming languages <span className='font-medium'>Dart, JavaScript, Python, Java, Kotlin, TypeScript</span> and{' '}
				<span className='font-medium'>PHP</span>. <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. I am well-versed in a variety of databases, such as{' '}
				<span className='font-medium'>MongoDB, MySQL, PostgreSQL, SQLite</span> and <span className='font-medium'> Firebase Firestore</span>. Additionally, I have hands-on experience with several frameworks, including{' '}
				<span className='font-medium'>React, Vue, Laravel, Express, Flutter, React Native, JavaFX, Next.js</span> and <span className='font-medium'>Nuxt.js</span>. My core stack is <span className='font-medium'>React, Next.js, Node.js, and MongoDB</span>. I am
				also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a <span className='font-medium'>full-time position</span> as a software developer.
			</p>

			<p>
				<span className='italic'>When I'm not coding</span>, I enjoy reading comic like <span className=' font-medium'>Manga</span> or <span className=' font-medium'>Manhwa</span>, watching <span className=' font-medium'>Anime</span> or{' '}
				<span className=' font-medium'>Movies</span>, and playing <span className=' font-medium'>Video Games</span>. I also enjoy <span className='font-medium'>learning new things</span>. I am currently learning about{' '}
				<span className='font-medium'>leadership</span> and <span className='font-medium'>mindset</span>. I'm also learning how to be a good leader.
			</p>
		</motion.section>
	);
}
