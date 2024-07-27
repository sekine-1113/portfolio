import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full bg-pink text-white py-4 text-center shadow-md">
                <h1 className="text-3xl font-bold">アリスのポートフォリオ</h1>
            </header>

            <section id="about" className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-pink mb-4">自己紹介</h2>
                <p className="text-pink-dark">Webエンジニア（主にバックエンド）です。</p>
                <p className="text-right"><Link href="./about">続きを見る</Link></p>
            </section>

            <section id="skills" className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-pink mb-4">スキル</h2>
                <ul className="list-disc list-inside text-pink-dark">
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>Kotlin</li>
                </ul>
                <p className="text-right"><Link href="./">続きを見る</Link></p>
            </section>

            <section id="projects" className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-pink mb-4">プロジェクト</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-pink-100 rounded-lg">
                        <h3 className="text-xl font-bold">プロジェクト1</h3>
                        <p>プロジェクト1の説明。</p>
                    </div>
                    <div className="p-4 bg-pink-100 rounded-lg">
                        <h3 className="text-xl font-bold">プロジェクト2</h3>
                        <p>プロジェクト2の説明。</p>
                    </div>
                </div>
                <p className="text-right"><Link href="./">続きを見る</Link></p>
            </section>

            <section id="contact" className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full mb-8">
                <h2 className="text-2xl font-bold text-pink mb-4">お問い合わせ</h2>
                こちらまで <Link href="https://x.com/_alice_chang_" target="_blank">X（旧Twitter）</Link>
            </section>
        </div>
    )
}
