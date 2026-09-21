import Link from 'next/link'
import { Inter } from 'next/font/google'
import ThemeProvider from '../components/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Shahid Dhariwala — Frontend Developer',
        template: '%s | Shahid Dhariwala'
    },
    description:
        'Frontend developer writing about React, Next.js, and modern web development.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="shell">
                        <header className="topbar">
                            <Link href="/" className="brand">
                                Shahid Dhariwala
                            </Link>
                            <ThemeToggle />
                        </header>
                        <main className="main">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
