import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import React from "react"

export default function ArticleImage({ url, className, alt, objPosX, objPosY }: { url: string, className?:string, alt: string, objPosX?: string, objPosY?: string }) {
    return (
        
        <Dialog>
            <DialogTrigger className="cursor-pointer w-full">
                <Image priority width={500} height={500} style={{objectPosition: `50% ${objPosY}`}} className={`std-h-article-img  ${ className }`} src={url} alt={alt} />
            </DialogTrigger>
            <DialogContent className="max-w-[60rem] py-10">
                <DialogTitle>{ alt }</DialogTitle>
                <Image priority width={1000} height={600} style={{objectPosition: `50% ${objPosY}`}} className={`h-[32rem] w-full object-cover`} src={url} alt={alt} />
            </DialogContent>
        </Dialog>
    )
};

