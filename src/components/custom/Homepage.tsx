'use client'
import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import { faqSlideIn, popUpAlert, showContentHero, badgesSlideIn } from "@/lib/utils"
import Content from "./Content"
import DevPortofolios from "./DevPortofolios"
import GreetingAnimation from "./GreetingAnimation"
import ConnectButtons from "./ConnectButtons"
import FAQs from "./FAQs"
import Powered from "./Powered"

export default function Homepage() {

    useEffect(() => {
        // setVideoIndex(index)
        
        // faqSlideIn()
        // popUpAlert()
        // showContentHero()
        // badgesSlideIn()
      
    
    //   if (window.matchMedia("(min-width: 1024px)").matches) {
    //   } 
    
    }, [])

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
            <Hero className="absolute top-0 left-0 -z-10"/>
            <div className="flex flex-col xs:items-start items-center justify-center w-full
                lg:static fixed top-40 gap-20 lg:px-0 px-4">
                <GreetingAnimation className="" />
                <div className="flex flex-col gap-4 lg:gap-8">
                    <Content className=""/>
                    <Powered className=""/>
                </div>
            </div>
            <div className="flex flex-col xs:items-end items-center justify-center w-full
                lg:static fixed bottom-10 gap-2 lg:px-0 px-4">
                <FAQs className="sm:max-w-[40rem] px-4 md:max-w-[40rem]"/>
                <DevPortofolios className=" max-w-96 sm:max-w-[40rem] lg:max-w-[29rem]" />
                <ConnectButtons className=" max-w-96 sm:max-w-[40rem] "/>
            </div>
        </div>
    )
};

