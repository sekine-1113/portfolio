import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile, ProfileResponse } from '../../interface/profile';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const birthDate = new Date("2001-11-13 0:00:00");
    const now = new Date();
    const thisYearBirthDate = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate(), 0, 0, 0, 0)
    const nextYearBirthDate = new Date(now.getFullYear()+1, birthDate.getMonth(), birthDate.getDate(), 0, 0, 0, 0)
    const currentAge = thisYearBirthDate.getFullYear() - birthDate.getFullYear() - Number((thisYearBirthDate.getTime() - now.getTime()) > 0)
    const isBirthDay = birthDate.getMonth() == now.getMonth() && birthDate.getDate() == now.getDate()
    const isAfterBirthDate = thisYearBirthDate.getTime() > now.getTime()
    const nextBirthDays = isAfterBirthDate
        ? Math.floor((thisYearBirthDate.getTime() - now.getTime()) / 86400000) + 1
        : Math.floor((nextYearBirthDate.getTime() - now.getTime()) / 86400000)
    const nextBirthDateText = isBirthDay
        ? "はっぴーばーすでぃ！"
        : `あと${nextBirthDays}にち！`
    const profile = {
        datas: [
            {itemName: "なまえ", item: "アリス"},
            {itemName: "せいべつ", item: "おとこのこ"},
            {itemName: "ねんれい", item: currentAge},
            {itemName: "ばーすでー", item: birthDate.toLocaleString("ja-JP").split(" ")[0]},
            {itemName: "ねくすとばーすでー", item: nextBirthDateText},
            {itemName: "うまれ", item: "ふくしまけん"},
        ] as Profile[]
    } as ProfileResponse;
    res.status(200).json(profile)
}

export default handler;