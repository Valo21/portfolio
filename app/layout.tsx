import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThreeScene from "@/components/ThreeScene";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'By Valentin Faciano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className}`}>
            <div className='bg-gradient-to-tr from-sky-950/40 bg-slate-950 bg-opacity-50'>
              <ThreeScene/>
              {children}
            </div>
        </body>
    </html>
  )
}
