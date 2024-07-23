import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
    title: 'アリスのポートフォリオ',
    description: 'アリスのポートフォリオサイトです',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-soft-pink font-sans">{children}</body>
        </html>
    )
}