import './globals.css';
import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import HeaderNavbar from '@/components/custom/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bicol Bites Recipes',
    description: 'A Bicolan food recipes catalogue.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} h-[100vh]`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeaderNavbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
