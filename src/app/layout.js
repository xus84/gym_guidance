import { Lato } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const lato = Lato({ subsets: [], weight: ['400', '700'] })

export const metadata = {
  title: 'Gym Guidance',
  description: 'Generated by create next app',
  icons: {
    icon: [
      { url: 'img/gymguidance_logo.jpeg' }
    ]
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </Head>
      <body className={lato.className}>{children}</body>
    </html>
  )
}
