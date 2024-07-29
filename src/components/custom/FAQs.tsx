'use client'
import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog"
import { PiChatTeardropText } from "react-icons/pi"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function FAQs({ className }: { className?: string }) {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const faqsList = [
        {
            question: 'Do you need to have a computer-science degree to land a coding job at tech companies?',
            answer: <div>
                <blockquote className="italic" cite="https://www.glassdoor.com/blog/technical-interview-tips/">
                    &quot;Not really. With a CS degree, a candidate will hopefully already know the core data structures and algorithms. 
                    But that only takes candidates a week or so to learn, so it doesn&apos;t really give those candidates a huge advantage. 
                    <span className="bg-yellow-400 text-black">
                        The biggest disadvantage that candidates without CS degrees have is just a lack confidence.&quot;
                    </span>
                </blockquote>
                <br />
                <span> - <a href="https://www.gayle.com/" target="_blank" className="linked-text">Gayle Laakmann McDowell</a>, author of the best-selling book, 
                <a target="_blank" className="linked-text" href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=asap_bc?ie=UTF8"> Cracking the Coding Interview</a> </span>
            </div>,
        },
        {
            question: 'Do you need to have a computer-science degree to land a coding job at tech companies?',
            answer: <div>
                <blockquote className="italic" cite="https://www.glassdoor.com/blog/technical-interview-tips/">
                    &quot;Not really. With a CS degree, a candidate will hopefully already know the core data structures and algorithms. 
                    But that only takes candidates a week or so to learn, so it doesn&apos;t really give those candidates a huge advantage. 
                    <span className="bg-yellow-400 text-black">
                        The biggest disadvantage that candidates without CS degrees have is just a lack confidence.&quot;
                    </span>
                </blockquote>
                <br />
                <span> - <a href="https://www.gayle.com/" target="_blank" className="linked-text">Gayle Laakmann McDowell</a>, author of the best-selling book, 
                <a target="_blank" className="linked-text" href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=asap_bc?ie=UTF8"> Cracking the Coding Interview</a> </span>
            </div>,
        },
    ]

    return (
        <div className={`${ className }`}>
            <h2 className="text-left font-bold text-2xl text-white bg-black/25 rounded-sm px-2 w-fit">FAQs</h2>
            <div>
            <Carousel opts={{ loop: true }}
            plugins={[plugin.current]}
            >
                <CarouselContent>
                    {
                        faqsList.map((item, idx) => {
                            return <CarouselItem key={idx}>
                                <Dialog>
                                    <DialogTrigger asChild className=" bg-white text-black/70 rounded-lg py-2 px-4 text-left cursor-pointer">
                                        <div className="flex items-center gap-2">
                                            <PiChatTeardropText className="max-md:hidden" size={`1.5rem`}/>
                                            <PiChatTeardropText className="md:hidden" size={`2.3rem`}/>
                                            <span>{ item.question }</span>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="py-8">
                                        <DialogTitle>{ item.question }</DialogTitle>
                                        <DialogDescription></DialogDescription>
                                        <div>{ item.answer }</div>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        })
                    }
                </CarouselContent>
                <div className="hidden">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
                
            </div>
        </div>
    )
};

