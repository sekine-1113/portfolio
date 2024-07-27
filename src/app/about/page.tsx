export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full bg-pink text-white py-4 text-center shadow-md">
                <h1 className="text-3xl font-bold">アリスのポートフォリオ</h1>
            </header>
            <section id="about" className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-pink mb-4">自己紹介 - 詳細</h2>
                <p className="text-pink-dark">Webエンジニア（主にバックエンド）です。</p>
            </section>
        </div>
    )
}