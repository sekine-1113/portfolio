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
            <div>誕生日：{isBirthDay ? "今日" : birthDay.toLocaleString("ja-JP").split(" ")[0]}</div>
        </div>
    )
}