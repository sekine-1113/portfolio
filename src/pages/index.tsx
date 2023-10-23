import useSwr from 'swr'

import Header from "@/components/base/Header/Header";
import { ProfileResponse } from "./interface/profile";


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error, isLoading } = useSwr<ProfileResponse>('/api/profile', fetcher)

    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        <>
            <Header title="アリスのウェブページ" />
            <div>
                <h1>アリスのウェブページ</h1>
                <h2>プロフィール</h2>
                {data.datas.map((it) => (
                    <div key={it.itemName}>{it.itemName} ー {it.item}</div>
                ))}
            </div>
        </>
    );
}