import { Header } from "@/components/custom/Header"
import React from "react"
import useData from "../useData"
import Link from "next/link"
import { PiArrowLeft } from "react-icons/pi"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ProjectInfo, ProjectLink, ProjectMember, ProjectType } from "@/lib/constant"
import { ToolTip } from "@/components/dynamic/ToolTip"
import { Badge } from "@/components/ui/badge"
import { LoadingButton } from "@/components/ui/loading-button"
import PrevButton from "@/components/dynamic/PrevButton"

export default function Page(params : { params: { slug: string } }) {

    const slug = params.params.slug
    const data = useData()
    const filtered = data.projectInfo.filter(item =>
        item.href.split('/projects/')[1] == slug
    )[0]

    return (
        <div className="w-full bg-[#FAF9F6] lg:h-screen h-full">
            <div className="w-full flex justify-center bg-white py-4">
                <Header />
            </div>
            <div className="py-8 px-4 flex flex-col items-center gap-6">
                <div className="max-sm:flex max-sm:items-start gap-2 max-sm:flex-col relative w-full std-article-max-w">
                    <PrevButton className="rounded-sm max-sm:static max-sm:m-0 absolute top-0 bottom-0 m-auto left-0 bg-transparent text-black/60 border-black/60 hover:text-black hover:border-black border-[1.9px] hover:bg-transparent" text="Projects" />
                    <h2 className="font-bold text-2xl lg:text-4xl text-center">{ filtered.title }</h2>
                </div>
                <Separator className="bg-black/30 std-article-max-w" />
                <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center gap-8 lg:gap-0 std-article-max-w w-full">
                    {/* navigation */}
                    <div className="flex flex-col gap-5 lg:gap-10 w-full">
                        <div className="flex lg:flex-col justify-between gap-2">
                            <div className="space-x-2">
                                <Badge className="w-fit">{ filtered.type != undefined && ProjectType[filtered.type] }</Badge>
                                <Badge className="w-fit">{ filtered.year && filtered.year }</Badge>
                            </div>
                        </div>
                        {/* tools */}
                        <div>
                            <p>Tech Stack</p>
                            <div className="flex gap-1 lg:gap-2 items-center">
                                { filtered.tools.length > 0 && filtered.tools.map((item, idx) => {
                                    return <ToolTip className="std-hover w-fit"  key={idx} content={item.name}>
                                        <Link target="_blank" href={item.href}>{ item.logo }
                                        </Link>
                                    </ToolTip>
                                }) }
                            </div>
                        </div>
                        { (filtered.members && filtered.members.length > 0) && 
                        <div>
                            <p>Team Members</p>
                            <ul className="flex flex-col pl-5">
                                { filtered.members.map((member: ProjectMember, idx: number) => {
                                    return <li key={idx} className="std-hover list-disc">
                                        <Link target="_blank" href={member.portfolio}>{ member.name }</Link>
                                    </li>
                                }) }
                            </ul>
                        </div>
                        }
                        { (filtered.links && filtered.links.length > 0) && 
                        <div>
                            <p>Project Links</p>
                            <ul className="flex flex-col pl-5">
                                
                                { filtered.links != undefined &&
                                    filtered.links.map((item: ProjectLink, idx: number) => {
                                        return <li key={idx} className="std-hover list-disc">
                                        <Link target="_blank" href={item.link}>{ item.name }</Link>
                                    </li>
                                    })
                                }
                            </ul>
                        </div>
                        }
                    </div>

                    {/* content */}
                    <div className="max-md:max-h-full">
                        { filtered.content }
                    </div>
                </div>
            </div>
        </div>
    )
};

