import './globals.css'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

// const poppins = Poppins({ subsets: ['latin'] , weight: ['100', '200', '300', '400']})
const syne = Syne({ subsets: ['latin'] , weight: ['700']})
// const archivo = Archivo({ subsets: ['latin'] , weight: ['400']})
 
//import header
import Header from '../components/header';

// import footer 
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Graunke Media'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={syne.className}>
        <Header />
        {children }
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
