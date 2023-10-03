import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] , weight: ['100', '200', '300', '400']})

//import header
import Header from '../components/header';

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
      <body className={poppins.className}>

        <Header />
        {children}
        
      </body>
    </html>
  )
}
