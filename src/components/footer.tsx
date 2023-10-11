'use client';

import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

import { motion } from 'framer-motion'

import { transition1 } from '../transitions/transition1'
import { upward } from '../variants/upward' 

export default function Footer() {
	return (
		<footer className='m-[4rem]'>
			<motion.div variants={upward} whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='container mx-auto flex flex-col w-full max-w-[75rem]  gap-x-20'>
				<div className='flex flex-row justify-between'>
					{/* icon & text  */}
					<div>
						<img src="/logo.png" className='w-full max-w-[64px] h-full max-h-[64px] mb-3' alt="" />
						<p className={`${archivo.className} p mb-10`}>A Graunke Media está por toda parte, inclusive nas redes socias.</p>
					</div>
					{/* menu  */}
					<div className='flex flex-col gap-y-6 px-8'>
							<p className={`${archivo.className} p text-[1.5rem] text-[#fff] font-[600] leading-[1]`}>Menu</p>
							<p className={`${archivo.className} p`}> Início </p>
							<p className={`${archivo.className} p`}> Sobre </p>
							<p className={`${archivo.className} p`}> Portfólio </p>
							<p className={`${archivo.className} p`}> Contato </p>
					</div>
				</div>

				<div className='flex flex-col md:flex-col justify-between'>
					{/* social media  */}
					<div className=' flex flex-col gap-y-10'>
						<nav>
							<ul className='flex flex-col md:flex-row gap-4 md:gap-10'>
								<li><a className={`${archivo.className} social_link`} href="https://www.facebook.com/graunkemedia/" target='_blank'>Facebook</a></li>
								<li><a className={`${archivo.className} social_link`} href="https://www.instagram.com/graunkemedia/" target='_blank'>Instagram</a></li>
								<li><a className={`${archivo.className} social_link`} href="https://www.youtube.com/@tiagograunke" target='_blank'>YouTube</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</motion.div>
		</footer>
    )
}