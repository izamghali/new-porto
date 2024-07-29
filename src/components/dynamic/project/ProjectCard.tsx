'use client'
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
import { ToolTip } from "../ToolTip"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"

export function ProjectCard({ title, desc, imgUrl, href, tools, tags, year } : ProjectInfo) {
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter()
    return (
        <div onClick={() => { setIsLoading(true); router.push(href) } } className="select-none cursor-pointer group rounded-lg relative w-full">
            <Card className={`${ isLoading ? 'blur-[1px]' : 'blur-none' } bg-[#FAF9F6] rounded-lg border-2 border-black/5 max-lg:shadow-md max-xs:w-72 w-80 lg:w-96 max-h-96 z-[2] relative lg:group-hover:bg-white lg:group-hover:border-white lg:group-hover:-translate-x-2 lg:group-hover:-translate-y-2 duration-200`}>
                <CardHeader>
                    <div className="flex w-full justify-between">
                        <CardTitle className="max-lg:truncate">{ title }</CardTitle>
                        <div className="flex gap-2">
                            { tags && 
                                <div className=" max-xs:hidden">
                                    { tags }
                                </div>
                            }
                            <Badge>{ year }</Badge>
                        </div>
                    </div>
                    <CardDescription>{ desc }</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <Image src={imgUrl} alt="" /> */}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex gap-1 lg:gap-2 items-center">
                        { tools.length > 0 && tools.map((item, idx) => {
                            return <div key={idx}>
                                <ToolTip className="std-hover w-fit" content={item.name}>
                                    <Link target="_blank" href={item.href}>{ item.logo }
                                    </Link>
                                </ToolTip>
                            </div>
                        }) }
                    </div>
                    <Button className="flex items-center gap-2">Read More<PiArrowRight /></Button>
                </CardFooter>
            </Card>
            <div className="rounded-lg bg-black/0 lg:group-hover:bg-black w-full h-full absolute top-0 left-0 z-[1] duration-200"></div>
            <div className={`flex gap-2 justify-center items-center ${ isLoading ? 'opacity-100 z-[2]' : 'opacity-0 z-[0]' } bg-black/70 duration-200  absolute top-0 left-0 w-full h-full rounded-lg lg:group-hover:-translate-x-2 lg:group-hover:-translate-y-2`}>
                <Spinner className="z-[3] relative text-white" size={'small'} />
                <p className="z-[3] relative text-white select-none">Please wait...</p>
            </div>
        </div>
    )
}
