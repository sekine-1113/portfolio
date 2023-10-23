import useSwr from 'swr'

import Header from "@/components/base/Header/Header";
import { ProfileResponse } from "./interface/profile";



const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error, isLoading } = useSwr<ProfileResponse>('/api/profile', fetcher)

    if (error) return <div>Failed to load profile</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        <div className='container font-mono max-w-screen flex mx-auto'>
            <Header title="アリスのウェブページ" />
            <div className='mx-auto'>
                <h1 className='text-3xl text-start m-4 font-bold'>アリスのウェブページ</h1>
                <h2 className='text-2xl text-center m-4 font-bold'>プロフィール</h2>
                <div className=''>
                {data.datas.map((it) => (
                    <div key={it.itemName} className='text-lg bg-green-100 rounded-lg m-2'>
                        <div className='p-2 underline underline-offset-2'>{it.itemName}</div>
                        <div className='indent-8 p-2'>{it.item}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}