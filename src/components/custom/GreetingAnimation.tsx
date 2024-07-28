'use client'
import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function GreetingAnimation({ className }: { className?: string }) {
    return (
        <div className={`${ className }`}>
            <TypeAnimation
                sequence={[
                    'Hello World!', 1000, 
                    '안녕 세상!', 1000,
                    'Halo Dunia!', 1000,
                    'こんにちは世界!', 1000,
                    'Halo Dunya!', 1000,
                    'Привет, мир!', 1000,
                    '¡Hola Mundo!', 1000,
                    '你好世界!', 1000,
                    'مرحبا بالعالم!', 1000,
                    'Hei maailma!', 1000,
                ]}
                wrapper="h1"
                className="bg-white font-semibold text-4xl xl:text-7xl sm:text-5xl w-fit text-black tracking-wider truncate h-full"
                speed={50}
                repeat={Infinity}
            />
        </div>
    )
};

