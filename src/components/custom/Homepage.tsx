import React from "react"
import Hero from "./Hero"
import { faqSlideIn, popUpAlert, showContentHero, badgesSlideIn } from "@/lib/utils"
import Content from "./Content"
import DevPortofolios from "./DevPortofolios"
import GreetingAnimation from "./GreetingAnimation"
import ConnectButtons from "./ConnectButtons"
import FAQs from "./FAQs"
import Powered from "./Powered"

export default function Homepage() {

    function handleLoad() {
        let loadingLayer = document.getElementById('loading-layer');
    
        setTimeout(() => {
          loadingLayer?.classList.add('opacity-0')
        }, 700);
        setTimeout(() => {
          loadingLayer?.classList.add('hidden')
        }, 1000);
    
        // console.log('its loaded!');
    }

    return (
        <div className="relative font-sans lg:flex lg:flex-col lg:justify-center lg:gap-10 lg:h-screen lg:px-10">
            <Hero className="absolute top-0 left-0 z-[1]"/>
            <div className="flex flex-col xs:items-start items-center justify-center w-full z-[2]
                lg:static fixed lg:top-40 top-20 lg:gap-20 gap-12 lg:px-0 px-4">
                <GreetingAnimation className="" />
                <div className="flex flex-col gap-4 lg:gap-8">
                    <Content className=""/>
                    <Powered className=""/>
                </div>
            </div>
            <div className="flex flex-col xs:items-end items-center justify-center w-full z-[2]
                lg:static fixed bottom-10 gap-2 lg:px-0 px-4">
                <FAQs className="sm:max-w-[40rem] md:max-w-[40rem]"/>
                <DevPortofolios className=" max-w-96 sm:max-w-[40rem] lg:max-w-[29rem]" />
                <ConnectButtons className=" max-w-96 sm:max-w-[40rem] "/>
            </div>
        </div>
    )
};

