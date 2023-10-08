import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});


export default function Footer() {
	return (
		<footer className='my-[4rem]'>
			<div className='container mx-auto w-full max-w-[75rem] flex flex-row gap-x-20'>
				<div className=' flex flex-col gap-y-10'>
					<img src="/logo.png" className='w-full max-w-[48px]' alt="" />
					<p className={`${archivo.className} p`}>Cras eu lectus tortor. Fusce neque urna, dapibus sed urna quis, malesuada mollis sapien.</p>
					<nav>
						<ul className='flex flex-row gap-x-10'>
							<li><a className={`${archivo.className} social_link`} href="https://www.facebook.com/graunkemedia/" target='_blank'>Facebook</a></li>
							<li><a className={`${archivo.className} social_link`} href="https://www.instagram.com/graunkemedia/" target='_blank'>Instagram</a></li>
							<li><a className={`${archivo.className} social_link`} href="https://www.youtube.com/@tiagograunke" target='_blank'>YouTube</a></li>
						</ul>
					</nav>
				</div>

				<div className='flex flex-col gap-y-6'>
					<p className={`${archivo.className} p text-[1.5rem] text-[#fff] font-[600] leading-[1]`}>Menu</p>
					<p className={`${archivo.className} p`}> Início </p>
					<p className={`${archivo.className} p`}> Sobre </p>
					<p className={`${archivo.className} p`}> Portfólio </p>
					<p className={`${archivo.className} p`}> Contato </p>
				</div>
			</div>
		</footer>
    )
}