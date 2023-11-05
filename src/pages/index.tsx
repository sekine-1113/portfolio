import useSwr from 'swr'

import Header from "@/components/base/Header/Header";
import { ProfileResponse } from "./interface/profile";

import {Cherry_Bomb_One, Hachi_Maru_Pop, Noto_Serif_JP} from "next/font/google"

const fontStyle = Cherry_Bomb_One({weight: "400", preload: false});

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error, isLoading } = useSwr<ProfileResponse>('/api/v1/profile', fetcher)

    if (error) return <div>Failed to load profile</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    const classNames = `mx-auto ${fontStyle.className}`;

    return (
        <div className='container font-mono max-w-screen flex mx-auto bg-blue-50'>
            <Header title="アリスのウェブページ" />
            <body className={classNames}>
                <div>
                    <h1 className='text-3xl text-start m-4 font-bold'>アリスのウェブページ</h1>
                    <h2 className='text-2xl text-center m-4 font-bold'>プロフィール</h2>
                    <div className=''>
                        {data.datas.map((it) => (
                            <div key={it.itemName} className='text-lg bg-rose-100 rounded-lg m-2 p-3'>
                                <div className='underline underline-offset-2 decoration-dashed indent-2'>{it.itemName}</div>
                                <div className='text-center'>{it.item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </body>
        </div>
    );
}