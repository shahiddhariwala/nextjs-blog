import Link from 'next/link'
import { Fraunces, Karla, IBM_Plex_Mono } from 'next/font/google'
import ThemeProvider from '../components/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import '../styles/global.css'

const display = Fraunces({
    subsets: ['latin'],
    variable: '--font-display',
    axes: ['SOFT', 'opsz']
})
const body = Karla({ subsets: ['latin'], variable: '--font-body' })
const mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono'
})

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
            <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
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
