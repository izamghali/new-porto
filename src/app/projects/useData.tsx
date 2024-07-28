import { ToolTip } from "@/components/dynamic/ToolTip"
import { ProjectInfo } from "@/lib/constant"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from "react"
import { FaBootstrap, FaReact, FaSass } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { PiFigmaLogo, PiSpotifyLogo } from "react-icons/pi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiShadcnui, SiGreensock } from "react-icons/si"
import { ProjectType } from "@/lib/constant"

const projectInfo: ProjectInfo[] | [] = [
    {
        title: 'WearDrobe',
        desc: 'A multi-warehouse e-commerce web app that boosts delivery speed and cuts costs.',
        imgUrl: '',
        href: '/projects/weardrobe',
        links: [
            {
                name: 'Live Website',
                link: 'https://jcwd030801.purwadhikabootcamp.com/'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/purwadhikafullstack/JCWD0308-01'
            },
        ],
        tools: [
            {
                name: 'Firebase',
                href: 'https://firebase.google.com/',
                logo: <IoLogoFirebase size={`1.2rem`} />,
            },
            {
                name: 'Next.js',
                href: 'https://nextjs.org/',
                logo: <RiNextjsFill size={`1.2rem`} />,
            },
            {
                name: 'Tailwind CSS',
                href: 'https://tailwindcss.com/',
                logo: <RiTailwindCssFill size={`1.2rem`} />,
            },
            {
                name: 'Shadcn UI',
                href: 'https://ui.shadcn.com/',
                logo: <SiShadcnui size={`1.2rem`} />,
            },
        ]
        ,
        tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["Team Project"],
        year: 2024,
        members: [
            {
                name: 'Arya Hanif Nugroho',
                portfolio: 'https://aryahanif-portfolio.vercel.app/',
            },
            {
                name: 'Timothy Jason Caviezel',
                portfolio: 'https://portfolio-taupe-zeta-92.vercel.app/',
            },
            {
                name: 'Mohammad Izam Ghali',
                portfolio: '/',
            },
        ]
    }, 
    {
        title: 'Samiya Home Page',
        desc: 'A multi-warehouse e-commerce web app that boosts delivery speed and cuts costs.',
        imgUrl: '',
        href: '/projects/samiya',
        links: [
            {
                name: 'Live Website',
                link: 'https://samiyastudio.com/'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/izamghali/samiya-website'
            },
        ],
        tools: [
            {
                name: 'Firebase',
                href: 'https://firebase.google.com/',
                logo: <IoLogoFirebase size={`1.2rem`} />,
            },
            {
                name: 'Tailwind CSS',
                href: 'https://tailwindcss.com/',
                logo: <RiTailwindCssFill size={`1.2rem`} />,
            },
            {
                name: 'GSAP',
                href: 'https://gsap.com/',
                logo: <SiGreensock size={`1.2rem`} />,
            },
        ]
        ,
        // tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["Work-related Project"],
        year: 2023,
    }, 
    {
        title: "Mixin' Jam",
        desc: 'Spotify-integrated Web App that allows users to browse artists, albums, & tracks and to export their new customized playlist.',
        imgUrl: '',
        href: '/projects/mixin',
        links: [
            {
                name: 'Live Website',
                link: 'https://samiyastudio.com/'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/izamghali/samiya-website'
            },
        ],
        tools: [
            {
                name: 'React',
                href: 'https://react.dev/',
                logo: <FaReact size={`1.2rem`} />,
            },
            {
                name: 'Spotify API',
                href: 'https://developer.spotify.com/documentation/web-api',
                logo: <PiSpotifyLogo size={`1.2rem`} />,
            },
            {
                name: 'SASS',
                href: 'https://sass-lang.com/',
                logo: <FaSass size={`1.2rem`} />,
            },
        ]
        ,
        tags: <div><Badge className="bg-[#23cf5f]">Spotify</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["Hobby Project"],
        year: 2023,
    }, 
    {
        title: 'Wham Bam',
        desc: 'Wham Bam is a simple kanban board to help users manage their on-going project chopping it into an individual tasks.',
        imgUrl: '',
        href: '/projects/whambam',
        links: [
            {
                name: 'Wireframe in Figma',
                link: 'https://www.figma.com/proto/tQixvYwwk34MzXsUbu9b1o/wham-bam?page-id=0%3A1&type=design&node-id=36-2&viewport=-77%2C453%2C0.21&t=sebcgOm0K4yvWm3R-1&scaling=scale-down&starting-point-node-id=36%3A2&mode=design'
            },
            {
                name: 'GitHub Repository',
                link: ''
            },
        ],
        tools: [
            {
                name: 'Firebase',
                href: 'https://firebase.google.com/',
                logo: <IoLogoFirebase size={`1.2rem`} />,
            },
            {
                name: 'Next.js',
                href: 'https://nextjs.org/',
                logo: <RiNextjsFill size={`1.2rem`} />,
            },
            {
                name: 'Tailwind CSS',
                href: 'https://tailwindcss.com/',
                logo: <RiTailwindCssFill size={`1.2rem`} />,
            },
            {
                name: 'Shadcn UI',
                href: 'https://ui.shadcn.com/',
                logo: <SiShadcnui size={`1.2rem`} />,
            },
        ]
        ,
        tags: <div><Badge className="bg-orange-400">On Going</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["On Progress"],
        year: 2023,
    }, 
    {
        title: 'Ridgeline Prototype',
        desc: "Ridgeline's product page showcases a colorful, eco-friendly, water-resistant, insulated jacket.",
        imgUrl: '',
        href: '/projects/ridgeline',
        links: [
            {
                name: 'Wireframe in Figma',
                link: 'https://www.figma.com/proto/jNebvyOS15FdifjuMaNEES/Ridgeline-Prototype?page-id=0%3A1&type=design&node-id=1-34&viewport=-494%2C462%2C0.64&t=7SxF4tbWHjXfMKgr-1&scaling=min-zoom&mode=design'
            }
        ],
        tools: [
            {
                name: 'Figma',
                href: 'https://www.figma.com/',
                logo: <PiFigmaLogo size={`1.2rem`} />,
            },
        ]
        ,
        // tags: <div><Badge className="bg-orange-400">On Going</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["Hobby Project"],
        year: 2023,
    }, 
    {
        title: 'Cakra Home Page',
        desc: "Ridgeline's product page showcases a colorful, eco-friendly, water-resistant, insulated jacket.",
        imgUrl: '',
        href: '/projects/cakra',
        links: [
            {
                name: 'Live Website',
                link: 'https://cakraanagata.netlify.app/'
            }
        ],
        tools: [
            {
                name: 'Bootstrap',
                href: 'https://getbootstrap.com/',
                logo: <FaBootstrap size={`1.2rem`} />,
            },
        ]
        ,
        // tags: <div><Badge className="bg-orange-400">On Going</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="std-header">Project Background</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div>
        </div>,
        type: ProjectType["Work-related Project"],
        year: 2023,
    }, 
]

export default function useData() {
    return { projectInfo }
};

