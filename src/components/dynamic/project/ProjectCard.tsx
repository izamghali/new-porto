import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ProjectInfo } from "@/lib/constant"
import { PiArrowRight } from "react-icons/pi"

export function ProjectCard({ title, desc, imgUrl, href, tools, tags } : ProjectInfo) {
  return (
    <Link href={href} className="relative rounded-lg group cursor-pointer">
        <Card className="bg-[#FAF9F6] rounded-lg border-2 border-black/5 w-[350px] z-[2] relative group-hover:bg-white group-hover:border-white group-hover:-translate-x-2 group-hover:-translate-y-2 duration-200">
            <CardHeader>
                <div className="flex w-full justify-between">
                    <div>
                        <CardTitle>{ title }</CardTitle>
                    </div>
                    { tags }
                </div>
                <CardDescription className="truncate">{ desc }</CardDescription>
            </CardHeader>
            <CardContent>
                {/* <Image src={imgUrl} alt="" /> */}
            </CardContent>
            <CardFooter className="flex justify-between">
                { tools }
                <Button className="flex items-center gap-2">Read More<PiArrowRight /></Button>
            </CardFooter>
        </Card>

        {/* shadow */}
        <div className="rounded-lg bg-black/0 group-hover:bg-black w-full h-full absolute top-0 left-0 z-[1] duration-200"></div>
    </Link>
  )
}
