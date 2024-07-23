import React from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectInfo } from "@/lib/constant"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock, SiShadcnui } from "react-icons/si";
import { PiSpotifyLogo } from "react-icons/pi"
import { FaReact, FaSass } from "react-icons/fa";

export default function ProjectBlock() {

    const projectInfo: ProjectInfo[] | [] = [
        {
            title: 'WearDrobe',
            desc: 'WearDrobe is a Multi-Warehouse E-commerce uses multiple warehouses to improve delivery speed and reduce shipping costs, with orders directed to the nearest warehouse and users seeing a unified stock inventory without knowing the multiple locations.',
            imgUrl: '',
            href: '/projects/weardrobe',
            tools: <div className="flex items-center gap-1">
                <IoLogoFirebase size={`1.2rem`} />
                <RiNextjsFill size={`1.2rem`} />
                <RiTailwindCssFill size={`1.2rem`} />
                <SiShadcnui size={`1.2rem`} />
            </div>,
            tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
            content: <div></div>
        }, 
        {
            title: 'Samiya Landing Page',
            desc: '',
            imgUrl: '',
            href: '/projects/samiya',
            tools: <div className="flex items-center gap-1">
                <IoLogoFirebase size={`1.2rem`} />
                <RiTailwindCssFill size={`1.2rem`} />
                <SiGreensock size={`1.2rem`} />
            </div>,
            tags: <div></div>,
            content: <div></div>
        }, 
        {
            title: "Mixin' Jam",
            desc: '',
            imgUrl: '',
            href: '/projects/mixin',
            tools: <div className="flex items-center gap-1">
                <FaReact size={`1.2rem`} />
                <PiSpotifyLogo size={`1.2rem`} />
                <FaSass size={`1.2rem`} />
            </div>,
            tags: <div><Badge className="bg-[#23cf5f]">Spotify</Badge></div>,
            content: <div></div>
        }, 
    ]

    // const projectInfo: ProjectInfo[] | [] = []

    return (
        <div>
            <div className="mb-10">
                <h2 className="text-4xl font-bold mb-2">Projects</h2>
                <p className="text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ad!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-10 ">
                {
                    projectInfo && projectInfo.length > 0 ?
                    projectInfo.map((item: ProjectInfo, idx: number) => {
                        return <div className=" justify-self-center" key={idx}>
                            <ProjectCard 
                                title={item.title} desc={item.desc} imgUrl={item.imgUrl} 
                                href={item.href} tools={item.tools} tags={item.tags}
                            />
                        </div>
                    })
                    :
                    <div>
                        Your project is empty.
                    </div>
                }
            </div>
        </div>
    )
};

