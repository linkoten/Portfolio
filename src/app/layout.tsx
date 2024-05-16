import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Catto François',
    description: 'Portfolio Développement Web, Javascript, React, Next JS, front-end, back-end, Full-Stack, Headless-CMS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}
            </body>
        </html>
    );
}
