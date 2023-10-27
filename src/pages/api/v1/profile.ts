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
        ? "きょう！"
        : `あと${Math.floor(Math.floor(nextBirthDay.getTime() - now.getTime()) / 86400000)}にち！`;
    const profile = {
        datas: [
            {itemName: "なまえ", item: "アリス"},
            {itemName: "せいべつ", item: "おとこのこ"},
            {itemName: "ねんれい", item: currentAge},
            {itemName: "ばーすでー", item: birthDayText},
            {itemName: "ねくすとばーすでー", item: isBirthDayText},
            {itemName: "うまれ", item: "ふくしまけん"},
            {itemName: "すきなこと", item: "いろいろ"},
            {itemName: "すきなひと", item: "すきになったひと"},

        ] as Profile[]
    } as ProfileResponse;
    res.status(200).json(profile)
}

export default handler;