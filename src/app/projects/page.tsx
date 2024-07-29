import { Header } from "@/components/custom/Header"
import ProjectBlock from "@/components/dynamic/project/ProjectBlock"
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Izam Ghali | Projects",
    description: "Showcasing Izam Ghali's web development projects and designs."
};

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

