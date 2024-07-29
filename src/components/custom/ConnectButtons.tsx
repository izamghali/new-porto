'use client'
import React, { useState } from "react"
import { Button } from "../ui/button"
import { PiRocket, PiArrowUpRight, PiGithubLogo, PiLinkedinLogo, PiEnvelope } from "react-icons/pi"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"
import Image from "next/image"
import { LoadingButton } from "../ui/loading-button"

export default function ConnectButtons({ className }: { className?: string }) {

    const [ isLoading, setIsLoading ] = useState(false);

    return (
        <div className={`flex items-center gap-2 w-full justify-end max-w-96 z-10 ${ className } `}>
            <Link href={'/projects'} onClick={() => setIsLoading(true) }>
                <LoadingButton loading={isLoading} className="group flex items-center gap-2">
                    <PiRocket className="group-hover:-translate-y-1 duration-200" size={`1.1rem`} />Projects
                </LoadingButton>
            </Link>
            <Dialog>
                <DialogTrigger className="group flex items-center gap-2 bg-sky-400 hover:bg-sky-400 text-white py-2 px-4 h-10 text-sm font-medium rounded-md">
                    Connect<PiArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 duration-200" size={`1.1rem`} />
                </DialogTrigger>
                <DialogContent className=" max-w-[40rem]">
                    <DialogTitle className="flex items-center gap-2">
                        Connect with me
                        <PiArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 duration-200" size={`1.1rem`} />
                    </DialogTitle>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <div>
                                <Image className="rounded-full" width={60} height={60} src={'https://media.licdn.com/dms/image/D5603AQE_GFSXsGZ2uw/profile-displayphoto-shrink_400_400/0/1686749189660?e=1727308800&v=beta&t=X-ZcWdwU-SnBvxagvBQ5JH0O1FU1_aR623y1Nl2toTY'} alt={""} />
                            </div>
                            <div>
                                Izam Ghali
                                <DialogDescription className="font-light">Junior Fullstack Web Developer</DialogDescription>
                            </div>
                        </div>
                        <span className="text-black/60">
                            Career switcher aspiring to be a Pi-shaped developer, open to work and collaboration. Process-oriented and committed to continuous learning to stay relevant in tech. Excited for what&apos;s ahead!
                        </span>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <Link target="_blank" className="flex items-center gap-1 text-black/60 hover:text-black duration-200 " href={'https://github.com/izamghali'}><PiGithubLogo size={`1rem`} />GitHub</Link>
                                <Link target="_blank" className="flex items-center gap-1 text-black/60 hover:text-black duration-200 " href={'https://www.linkedin.com/in/izam-ghali/'}><PiLinkedinLogo size={`1rem`} />LinkedIn</Link>
                            </div>
                            <Button className="px-8">
                                <Link target="_blank" className="flex items-center gap-1 " href={'mailto:izamghali18@gmail.com'}>Contact</Link>
                            </Button>    
                        </div>
                    </div>
                </DialogContent>
            </Dialog>     
        </div>
    )
};

