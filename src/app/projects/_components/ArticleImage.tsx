import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import React from "react"

export default function ArticleImage({ url, className, alt, objPosX, objPosY }: { url: string, className?:string, alt?: string, objPosX?: string, objPosY?: string }) {
    return (
        
        <Dialog>
            <DialogTrigger className="cursor-pointer">
                <img style={{objectPosition: `50% ${objPosY}`}} className={`std-h-article-img ${ className }`} src={url} alt={alt} />
            </DialogTrigger>
            <DialogContent className="max-w-[60rem] py-10">
                <DialogTitle>{ alt }</DialogTitle>
                <img style={{objectPosition: `50% ${objPosY}`}} className={` h-[32rem] w-full object-cover ${ className }`} src={url} alt={alt} />
            </DialogContent>
        </Dialog>
    )
};

