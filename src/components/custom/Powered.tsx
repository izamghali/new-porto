import React from "react"
import { Badge } from "../ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Powered({ className }: { className?: string }) {
    return (
        <div className={`w-fit ${ className }`}>
            <h2 className="text-black/60 bg-white w-fit mb-2 max-sm:text-xs">Powered by</h2>
            <div className="flex gap-2">
                <Link target="_blank" href={"https://www.codecademy.com/learn"} >
                    <Badge className="bg-white hover:bg-white px-5 py-1">
                        <Image priority className="h-3 w-full lg:h-5 object-cover" width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg"} alt={"Logo of Codecademy"}/>
                    </Badge>
                </Link>
                <Link target="_blank" href={"https://purwadhika.com/job-connector/fullstack-web-development"} >
                    <Badge className="bg-black hover:bg-black px-5 py-1">
                        <Image priority className="h-3 w-full lg:h-5 object-cover" width={100} height={100} src={"https://purwadhika.com/static/brand/logopwdk-text-white.png"} alt={"logo of Purwadhika"}/>
                    </Badge>
                </Link>
                <Link target="_blank" href={"https://www.udemy.com/"} >
                    <Badge className="bg-white hover:bg-white px-5 py-1">
                        <Image priority className="h-3 w-full lg:h-5 object-cover" width={100} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"} alt={"Logo of Udemy"}/>
                    </Badge>
                </Link>
            </div>
        </div>
    )
};

