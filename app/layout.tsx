import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import MyProfilePic from './components/MyProfilePic'

export const metadata: Metadata = {
  title: "Ruslan's blog",
  description: 'Created by Ruslan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-700' suppressHydrationWarning={true}>
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
