import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { PiArrowSquareOut, PiGithubLogo, PiLinkedinLogo, PiMagnifyingGlass } from "react-icons/pi"
import Link from "next/link"
import Image from "next/image"
import SearchBar from "./SearchBar"

export default function DevPortofolios({ className }: { className?: string }) {

    const portList = [
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'RH',
            name: 'Rayhan H. Sutrisno',
            title: 'Fullstack Developer',
            href: 'https://rayhansoe.vercel.app',
            linkedin: 'https://www.linkedin.com/in/rayhansoe/',
            github: 'https://github.com/rayhansoe',
        },
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'TJ',
            name: 'Timothy Jason Caviezel',
            title: 'Fullstack Developer',
            href: 'https://portfolio-taupe-zeta-92.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/timothy-jason-c-47b43828b/',
            github: 'https://github.com/timothyJasonC',
        },
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'AH',
            name: 'Arya Hanif Nugroho',
            title: 'Fullstack Developer',
            href: 'https://aryahanif-portfolio.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/aryahanifn/',
            github: 'https://github.com/mstrpyyy',
        },
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'NS',
            name: 'Nadirra Shifa Zuhra Shafira',
            title: 'Fullstack Developer',
            href: 'https://portofolio-nadirra.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/nadirra-s-3a36b0118/',
            github: 'https://github.com/nadirras',
        },
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'JS',
            name: 'Julius Siregar',
            title: 'Fullstack Developer',
            href: 'https://portofolio-julius.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/julius-siregar-164a85213/',
            github: 'https://github.com/juliussiregar',
        },
        {
            imgUrl: 'https://github.com/shadcn.png',
            fallback: 'AW',
            name: 'Amsaldi Wahyu Kristian Sinulingga',
            title: 'Frontend Developer',
            href: 'https://amsaldi3.vercel.app',
            linkedin: 'https://www.linkedin.com/in/amsaldi/',
            github: 'https://github.com/Altruism23',
        },
    ]

    return (
        <Dialog>
            <DialogTrigger asChild className={`${ className } flex items-center gap-4 py-2 px-2 rounded-lg bg-white/70 hover:bg-white duration-200 max-w-96 cursor-pointer`}>
                <div className="relative">
                    <div className="flex -space-x-6 rtl:space-x-reverse">
                        { portList && 
                            portList.map((item, idx) => {
                                if (idx < 3) {
                                    return <Avatar key={idx}>
                                        <AvatarImage src={item.imgUrl} />
                                        <AvatarFallback>{ item.fallback }</AvatarFallback>
                                    </Avatar>
                                }
                        }) }
                    </div>
                    <div className="flex items-center gap-2 text-left lg:text-center">
                        <span>Check out my developer friends&apos; portfolios!</span>
                        <PiArrowSquareOut size={`1.5rem`} />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="py-6">
                <DialogTitle className="text-left">
                    <span className="font-bold text-xl">Meet my fellow developers!</span>
                    <DialogDescription className="font-light">Click to check their portfolios!</DialogDescription>
                </DialogTitle>
                <SearchBar placeholder={"@example: mobile developer?"} />
                <div className="overflow-y-scroll overscroll-x-visible max-h-96 space-y-2">
                    { portList && 
                        portList.map((item, idx) => {
                            return <Dialog key={idx}>
                                <DialogTrigger className="w-full border-[1px] rounded-lg px-2 group hover:bg-black/5 duration-200">
                                    <div key={idx} className="flex items-center justify-between gap-2 py-1 rounded-lg duration-200 cursor-pointer">
                                        <div className="flex items-center gap-2 w-full">
                                            {/* <Avatar>
                                                <AvatarImage src={item.imgUrl} />
                                                <AvatarFallback>{ item.fallback }</AvatarFallback>
                                            </Avatar> */}
                                            <div className="text-start">
                                                <h3>{ item.name }</h3>
                                                <p className="text-black/55">{ item.title }</p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogTitle className="flex gap-2 items-center">
                                        {/* <div>
                                            <Image className="rounded-full" width={60} height={60} src={item.imgUrl} alt={""} />
                                        </div> */}
                                        <div>
                                            { item.name }
                                            <DialogDescription className="font-light">{ item.title }</DialogDescription>
                                        </div>
                                    </DialogTitle>
                                    <div className="flex items-center justify-between w-full h-fit gap-2">
                                        <div className="flex gap-4">
                                            <Link target="_blank" className="flex items-center gap-1" href={item.github}><PiGithubLogo size={`1rem`} />GitHub</Link>
                                            <Link target="_blank" className="flex items-center gap-1" href={item.linkedin}><PiLinkedinLogo size={`1rem`} />LinkedIn</Link>
                                        </div>
                                        <Link target="_blank" href={item.href}><PiArrowSquareOut size={`1rem`} /></Link>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            
                    }) }
                </div>
            </DialogContent>
        </Dialog>
    )
};

