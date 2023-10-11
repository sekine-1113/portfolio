import Header from "@/components/base/Header/Header";

export default function Home() {
    const birthDay = new Date("2001-11-13");
    const now = new Date();
    const isBirthDay = now.getMonth() + 1 === birthDay.getMonth() + 1 && now.getDate() === birthDay.getDate();
    const nextBirthDay = new Date();
    if (Number(now.getMonth() + 1 >= birthDay.getMonth() + 1 && now.getDate() >= birthDay.getDate())) {
        nextBirthDay.setFullYear(now.getFullYear() + 1);
    }
    nextBirthDay.setMonth(11);
    nextBirthDay.setDate(13);
    const nextBirthDayAtText = `次の誕生日まであと${Math.floor(Math.floor(nextBirthDay.getTime() - now.getTime()) / 86400000)}日！`;
    const currentAge = now.getFullYear() - birthDay.getFullYear() - 1 + Number(now.getMonth() + 1 >= birthDay.getMonth() + 1 && now.getDate() >= birthDay.getDate());
    return (
        <>
            <Header title="アリスのウェブページ" />
            <div>
                <h1>アリスのウェブページ</h1>
                <h2>プロフィール</h2>
                <div>名前：アリス</div>
                <div>性別：男</div>
                <div>職業：大学生・Webエンジニア</div>
                <div>年齢：{currentAge}</div>
                <div>誕生日：{isBirthDay ? "今日" : birthDay.toLocaleString("ja-JP").split(" ")[0]}</div>
                {isBirthDay ? "今日が誕生日です！！" : nextBirthDayAtText}
                <div>出身地：福島県</div>
                <div>趣味：読書、散歩、ジョギング、お出かけ、カラオケ、ボウリング、プログラミング</div>
                <div>好きなタイプ：僕を好きでいてくれる人</div>
            </div>
        </>
    )
}