import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'

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
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
