'use client'
import React, { useState } from "react"
import { LoadingButton } from "../ui/loading-button"
import { PiArrowLeft } from "react-icons/pi"
import { useRouter } from "next/navigation"

export default function PrevButton({ text, className, iconClassName, href }: { text?: string, className?:string, iconClassName?:string, href?: string }) {

    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter();

    return (
        <LoadingButton loading={ isLoading } className={`${ className } group flex items-center gap-2 px-2 py-3 h-2`} onClick={() => { setIsLoading(true) ; if (href) { router.push(href) } else router.back() }}>
            <PiArrowLeft className={`${ iconClassName } ${ isLoading ? 'hidden' : 'block' }  max-sm:text-lg lg:group-hover:-translate-x-1 duration-200`} />
            <span className={`max-sm:hidden ${ isLoading ? 'hidden' : 'block' } `}>{ text }</span>
            <span className={`${ isLoading ? '' : 'hidden' }`}>Please wait...</span>
        </LoadingButton>
    )
};

