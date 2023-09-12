import Header from "@/components/base/Header/Header";

export default function Home() {
    const birthDay = new Date("2001/11/13");
    const now = new Date();
    const isBirthDay = now.getMonth() + 1 === birthDay.getMonth() + 1 && now.getDate() === birthDay.getDate();
    return (
        <div>
            <>
                <title>アリス</title>
                <meta name="description" content="アリスのページです。" />
            </>
            <h1>アリスのウェブページ</h1>
            <h2>プロフィール</h2>
            <div>名前：アリス</div>
            <div>性別：男</div>
            <div>職業：大学生・Webエンジニア</div>
            <div>年齢：{now.getFullYear() - birthDay.getFullYear() - 1 + Number(now.getMonth() + 1 >= birthDay.getMonth() + 1 && now.getDate() >= birthDay.getDate())}</div>
            <div>誕生日：{isBirthDay ? "今日" : birthDay.toLocaleString("ja-JP").split(" ")[0]}</div>
            <div>出身地：福島県</div>
            <div>趣味：読書、散歩、ジョギング、お出かけ、カラオケ、ボウリング、プログラミング</div>
            <div>好きなタイプ：僕を好きでいてくれる人</div>
            <div></div>
        </div>
    )
}