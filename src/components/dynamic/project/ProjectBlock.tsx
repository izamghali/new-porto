import React from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectInfo } from "@/lib/constant"
import useData from "@/app/projects/useData"

export default function ProjectBlock() {

    const { projectInfo } = useData();

    return (
        <div className="">
            <div className="mb-10">
                <h2 className="text-4xl font-bold mb-2">Projects</h2>
                <p className="text-black/60">Collection of my latest and most notable web development projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full ">
                {
                    projectInfo && projectInfo.length > 0 ?
                    projectInfo.map((item: ProjectInfo, idx: number) => {
                        return <div className="justify-self-center" key={idx}>
                            <ProjectCard 
                                title={item.title} desc={item.desc} imgUrl={item.imgUrl} 
                                href={item.href} tools={item.tools} tags={item.tags} year={item.year}
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

