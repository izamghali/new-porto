import React from "react"
import Powered from "./Powered"

export default function Content({ className }: { className?: string }) {
    return ( 
        <section className={` ${className}  w-fit`}>
            <div id="profile" className="duration-200 text-black">
            {/* <div className="absolute bottom-[4rem] xl:bottom-[10rem] 2xl:bottom-[20rem] left-10 text-black duration-200"> */}
                {/* <div className="flex flex-col relative max-sm:hidden">
                    <div className="absolute -top-11 left-14 ">
                        <p className="bg-white text-black w-fit relative -left-11 text-md font-light tracking-wide">a variable</p>
                        <div className="border-l-2 w-2 h-5 " ></div>
                    </div>
                    <div className="border-2 w-28 h-3 border-b-0 mb-3"></div>
                </div> */}
                <h2 className="bg-white text-2xl font-light">Izam Ghali —a <span className="font-bold">Fullstack Web</span> Developer</h2>
                {/* <div className="relative max-sm:hidden">
                    <div className="border-2 w-60 h-3 border-t-0 mt-3 absolute right-0"></div>
                    <div className=" border-l-2 w-2 h-5 right-28 top-6 absolute" ></div>
                    <p className="bg-white text-black w-fit relative -right-52 -bottom-10 text-md font-light tracking-wide translate-x-8">a function call</p>
                </div> */}
                {/* <h2 className="bg-[rgba(255,255,255,0.3)] backdrop-blur-[2px] text-xl">This is content</h2> */}
            </div>
            
            
        </section>
    )
};

