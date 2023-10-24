import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile, ProfileResponse } from '../../interface/profile';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const birthDay = new Date("2001-11-13");
    const now = new Date();
    const isBirthDay = now.getMonth() + 1 === birthDay.getMonth() + 1 && now.getDate() === birthDay.getDate();
    const nextBirthDay = new Date();
    if (Number(now.getMonth() + 1 >= birthDay.getMonth() + 1 && now.getDate() >= birthDay.getDate())) {
        nextBirthDay.setFullYear(now.getFullYear() + 1);
    }
    nextBirthDay.setMonth(10);
    nextBirthDay.setUTCDate(13);
    nextBirthDay.setUTCHours(0, 0, 0, 0);
    const currentAge = now.getFullYear() - birthDay.getFullYear() - 1 + Number(now.getMonth() + 1 >= birthDay.getMonth() + 1 && now.getDate() >= birthDay.getDate());
    const birthDayText = birthDay.toLocaleString("ja-JP").split(" ")[0];
    const isBirthDayText = isBirthDay
        ? "今日が誕生日です！！"
        : `あと${Math.floor(Math.floor(nextBirthDay.getTime() - now.getTime()) / 86400000)}日！`;
    const profile = {
        datas: [
            {itemName: "名前", item: "アリス"},
            {itemName: "性別", item: "男"},
            {itemName: "年齢", item: currentAge},
            {itemName: "誕生日", item: birthDayText},
            {itemName: "次の誕生日まで", item: isBirthDayText},
            {itemName: "出身地", item: "福島県"},
            {itemName: "趣味", item: "読書、散歩、ジョギング、お出かけ、カラオケ、ボウリング、プログラミング"},
            {itemName: "好きなタイプ", item: "僕を好きでいてくれる人"},

        ] as Profile[]
    } as ProfileResponse;
    res.status(200).json(profile)
}

export default handler;