import { Header } from "@/components/custom/Header"
import ProjectBlock from "@/components/dynamic/project/ProjectBlock"
import React from "react"

export default function Page() {
    return (
        <div className="w-full bg-[#FAF9F6]">
            <div className="w-full flex justify-center bg-white py-4">
                <Header />
            </div>
            <div className="flex justify-center py-8 px-4"><ProjectBlock /></div>
        </div>
    )
};

