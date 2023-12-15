import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile, ProfileResponse } from '../../interface/profile';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const birthDate = new Date("2001-11-13 0:00:00");
    const now = new Date();
    const thisYearBirthDate = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate(), 0, 0, 0, 0)
    const currentAge = thisYearBirthDate.getFullYear() - birthDate.getFullYear() - Number((thisYearBirthDate.getTime() - now.getTime()) > 0)
    const profile = {
        items: [
            {itemName: "なまえ", item: "アリス"},
            {itemName: "せいべつ", item: "おとこのこ"},
            {itemName: "ねんれい", item: currentAge},
            {itemName: "うまれ", item: "ふくしまけん"},
            {itemName: "しんちょう", item: "167cmぐらい"},
            {itemName: "みため", item: "たぶんふつう"},
            {itemName: "このみ", item: "女性の方がすきです。"},
            {itemName: "", item: "アニメや演歌が好きな方、好奇心旺盛な方とお付き合いしたいです"}
        ] as Profile[]
    } as ProfileResponse;
    res.status(200).json(profile)
}

export default handler;