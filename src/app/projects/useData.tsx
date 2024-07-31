import { ToolTip } from "@/components/dynamic/ToolTip"
import { ProjectInfo } from "@/lib/constant"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from "react"
import { FaBootstrap, FaReact, FaSass } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { PiFigmaLogo, PiMapPin, PiSpotifyLogo } from "react-icons/pi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiShadcnui, SiGreensock, SiExcalidraw } from "react-icons/si"
import { ProjectType } from "@/lib/constant"
import ArticleImage from "./_components/ArticleImage"

const projectInfo: ProjectInfo[] | [] = [
    {
        title: 'WearDrobe',
        desc: 'A multi-warehouse e-commerce web app that boosts delivery speed and cuts costs.',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fhomepage.png?alt=media&token=eb7a2e34-7470-4af9-b2ce-0f816731d3ec',
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
            {
                name: 'Maptiler API',
                href: 'https://www.maptiler.com/',
                logo: <PiMapPin size={`1.2rem`} />,
            },
            {
                name: 'Excalidraw',
                href: 'https://excalidraw.com/',
                logo: <SiExcalidraw size={`1.2rem`} />,
            },
        ]
        ,
        tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fhomepage.png?alt=media&token=eb7a2e34-7470-4af9-b2ce-0f816731d3ec"} 
                className={""} 
                alt={"WearDrobe Landing Page"} 
            />
            <div>
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">
                WearDrobe is a Multi-Warehouse E-commerce that utilizes multiple warehouses to improve delivery speed and reduce shipping costs, with orders directed to the nearest warehouse and users seeing a unified stock inventory without knowing the multiple locations.
                </p>
            </div>
            <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">
                WearDrobe estabilshes Role-based access control (RBAC) to restrict authorization for each roles. There are 2 roles provided, user & admin. Users are authorized to select items, put items to wishlist, and to checkout items. Admin roles are divided into Warehouse Admin & Super Admin. Super admin has higher access than Warehouse admin, such as Warehouse management, Admin, management, & User read-access, which are not authorized to Warehouse admins.
                </p>
                <h4 className="std-sub-header">Authentication & Authorization</h4>
                <p className="std-text">
                Users are able to register & login using their emails or login using their Google account. Users are also able to make forgot-password request to reset their password. Warehouse admins are registered by Super admin and will be invited via email to setup their new warehouse admin account.
                </p>
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fauth.png?alt=media&token=9b745c58-362c-4d1a-9322-9740a37dadd0"} 
                className={""} 
                alt={"User Address Management"} 
            />
            <div>
                <h4 className="std-sub-header">Account Management</h4>
                <p className="std-text">
                Users & admins are able to edit their profile including change photo profile, username or full name, email address, and update new password. 
                Users are also able to add, edit, and delete their address, as well as seting main address.
                WearDrobe provides map to pinpoint the exact location
                </p>
            </div>
            <div>
                <h4 className="std-sub-header">Address Management</h4>
                <p className="std-text">
                Users are able to add, edit, and delete their address, as well as seting the main address.
                WearDrobe provides map to pinpoint the exact location and to reverse geocoding the coordinate and convert it into human-readable address, adjusting its exact province & city.
                </p>
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fmap.png?alt=media&token=a080acad-7d40-46eb-a6ed-da28a0ce34a5"} 
                className={""} 
                alt={"User Address Management"} 
            />
            <div>
                <h4 className="std-sub-header">Catalog & Checkout</h4>
                <p className="std-text">
                Users are able to browse catalog, like & put items into wishlist, up until checking out items.
                </p>
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fcatalog.png?alt=media&token=875adef3-b9f3-4919-8419-f48f40e7669b"} 
                className={"border-2"} 
                alt={"Catalog Page"} 
                objPosY="29%"
            />
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fproduct.png?alt=media&token=16a25e61-e61c-4cf1-ba66-666ddfe273ca"} 
                className={"border-2"} 
                alt={"Item Page"} 
            />
            <div className="flex gap-4">
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fcheckout.png?alt=media&token=23287961-694d-4bda-8d6b-900c93bf70fd"} 
                className={"border-2"} 
                alt={"Checkout Page"} 
                objPosY="30%"
            />
            {/* <div>
                <h3 className="std-header">Approach</h3>
                <p className="std-text">
                This project was completed in 4 sprints. We utilized Jira as a collaboration platforms to update progress & to put note/feedback if needed. 
                </p>
                <h4 className="std-sub-header">Prep Phase</h4>
            </div> */}
            <div>
                <h4 className="std-sub-header">Admin Dashboard Management</h4>
                <p className="std-text">
                Warehouse admins are able to manage products, mutate stocks, approve transactions, and monitor sales. Additionally, warehouse admins are not authorized to access warehouses, admins, users information. These access are exclusive to super admin.
                </p>
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/weardrobe%2Fdashboard-stock.png?alt=media&token=13248da7-de81-4f60-acf4-18e6e67499c6"} 
                className={"border-2"} 
                alt={"Admin Dashboard (Stock Management)"} 
                objPosY="29%"
            />

            <div>
                <h3 className="std-header">Responsibilities</h3>
                <ul className="std-text space-y-2">
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Database Design & Security</span>: Collaboratively designed the Entity-Relationship Diagram (ERD) using dbdiagram.io and implemented a Role-Based Access Control (RBAC) system with custom middleware in Next.js.
                    </li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Authentication & Authorization</span>: Developed comprehensive authentication and authorization flows for users and administrators, including login, registration, password recovery, email change, verification, and Single Sign-On (SSO) functionality.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Responsive UI Development</span>: Built a responsive homepage interface using Tailwind CSS and customized shadcn components to ensure a seamless user experience across devices.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">API Integration</span>: Integrated reverse geocoding functionality using Maptiler API and Raja Ongkir API to enhance application features and usability.</li>
                </ul>
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
        title: 'JS Do-Nuts',
        desc: 'JS Do-Nuts is a responsive landing page for a fictional donut store built using Next.js.',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/donut%2Fhomepage.png?alt=media&token=d31b7756-d43a-4541-96e2-c3dea7ee5d83',
        href: '/projects/js-donuts',
        links: [
            {
                name: 'Live Website',
                link: 'https://donut-company.vercel.app/'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/izamghali/donut-company'
            },
        ],
        tools: [
            {
                name: 'Tailwind CSS',
                href: 'https://tailwindcss.com/',
                logo: <RiTailwindCssFill size={`1.2rem`} />,
            },
            {
                name: 'Next.js',
                href: 'https://nextjs.org/',
                logo: <RiNextjsFill size={`1.2rem`} />,
            },
        ]
        ,
        // tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
        
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/donut%2Fhomepage.png?alt=media&token=d31b7756-d43a-4541-96e2-c3dea7ee5d83"} 
                className={""} 
                alt={"JS Do-Nuts Landing Page"} 
                objPosY="37%"
            />
            <div>
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">JS Do-Nuts is a responsive landing page for a fictional donut store built using Next.js which contains home, about, menu, and team pages. During the development, each pages are measured based on Core Web Vitals metrics to improve its performance, accessibility, best practice, and SEO.</p>
            </div>
            
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/donut%2Fmenu.png?alt=media&token=876b8a39-bc1f-4190-a3db-4b1eb9e75899"} 
                className={""} 
                alt={"Menu Page"} 
                objPosY="37%"
            />
            {/* <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
            {/* <div>
                <h3 className="std-header">Responsibilities</h3>
                <ul className="std-text space-y-2">
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Wireframe Design</span>:  Created initial website layouts using Figma for a cohesive design vision.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Responsive Development</span>: Ensured optimal user experience across various screen sizes and devices.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Interactive Features</span>: Implemented interactive elements such as carousels and animations using Tailwind CSS, daisyUI, and GSAP.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Dynamic Functionality</span>: Developed a category-based gallery filter and carousel logic with React hooks.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Dashboard Development</span>: Designed a CRUD photo gallery dashboard and login system using Firebase.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Firebase Integration & Deployment</span>: Integrated Firebase Storage and Firestore Database for efficient content management and deployed the website with a custom domain on Netlify.</li>
                </ul>
            </div> */}
        </div>,
        type: ProjectType["Assignment Project"],
        year: 2024,
    }, 
    {
        title: 'Samiya Home Page',
        desc: 'A Photography Showcase Gallery Page with CRUD functionality for a local photography business service.',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/samiya%2Fhomepage.png?alt=media&token=dd4960fd-4e0d-4c31-ae06-746f1afd3866',
        href: '/projects/samiya',
        links: [
            {
                name: 'Live Website',
                link: 'https://samiyastudio.com/'
            },
            {
                name: 'Wireframe in Figma',
                link: 'https://www.figma.com/proto/wrJu7cv0FUTuUS9M3C33ey/samiya-wireframe?page-id=0%3A1&type=design&node-id=34-100&viewport=294%2C268%2C0.27&t=26KEpD4GwZpEWWug-1&scaling=min-zoom&mode=design'
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
            {
                name: 'Figma',
                href: 'https://www.figma.com/',
                logo: <PiFigmaLogo size={`1.2rem`} />,
            },
        ]
        ,
        // tags: <div><Badge className="bg-red-400">Hot</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">

            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/samiya%2Fhomepage.png?alt=media&token=dd4960fd-4e0d-4c31-ae06-746f1afd3866"} 
                className={""} 
                alt={"Samiya's Landing Page"} 
                objPosY="30%"
            />
        
            <div>
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">Samiya Studio is a local photography service located in Yogyakarta specializing in a variety of services including food photography, fashion photography, product photography, architecture photography and company profile photography. I was responsible for creating website page for Samiya Studio and its admin dashboard to provide CRUD feature for its photos displayed on the gallery page.</p>
            </div>
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/samiya%2Fcarousel.png?alt=media&token=f8897a60-3e5d-48ce-bb48-ad565db3985f"} 
                className={""} 
                alt={"Carousel on Samiya Website"} 
                objPosY="30%"
            />
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/samiya%2Fgallery.png?alt=media&token=154cb6a1-b3c4-4d6b-bfe7-29074e496234"} 
                className={""} 
                alt={"Samiya's Gallery Page"} 
                objPosY="30%"
            />
            {/* <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
            <div>
                <h3 className="std-header">Responsibilities</h3>
                <ul className="std-text space-y-2">
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Wireframe Design</span>:  Created initial website layouts using Figma for a cohesive design vision.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Responsive Development</span>: Ensured optimal user experience across various screen sizes and devices.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Interactive Features</span>: Implemented interactive elements such as carousels and animations using Tailwind CSS, daisyUI, and GSAP.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Dynamic Functionality</span>: Developed a category-based gallery filter and carousel logic with React hooks.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Dashboard Development</span>: Designed a CRUD photo gallery dashboard and login system using Firebase.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none"><span className="font-bold">Firebase Integration & Deployment</span>: Integrated Firebase Storage and Firestore Database for efficient content management and deployed the website with a custom domain on Netlify.</li>
                </ul>
            </div>
        </div>,
        type: ProjectType["Work-related Project"],
        year: 2023,
    }, 
    {
        title: "Mixin' Jam",
        desc: 'Spotify-integrated Web App that allows users to browse artists, albums, & tracks and to export their new customized playlist.',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/mixin-jam%2Fdashboard.png?alt=media&token=68fb0a89-023e-4962-8d6d-d3ac1a1ec5bc',
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
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">Mixin&apos; Jam is a web application that allows users to:</p>
                <ul className="std-text space-y-1">
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">
                    search for tracks, artists, and albums on Spotify,
                    </li>
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">create personalized playlists,</li>
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">add selected tracks to new playlists,</li>
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">and save these new playlists directly to Spotify.</li>
                </ul>
                <p className="text-black/60 mt-2">The app is developed using React, SASS, and the Spotify Web API. The Spotify Web API facilitates the creation of applications that can interact with Spotify&apos;s streaming service, enabling features such as retrieving content metadata, obtaining recommendations, creating and managing playlists, and controlling playback.</p>

            </div>

            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/mixin-jam%2Fauth.png?alt=media&token=5fc95834-e2b5-463e-bb92-c0486c4b34a7"} 
                className={"border-2"} 
                alt={"Login Page of Mixin' Jam"} 
                objPosY="32%"
            />
            <ArticleImage 
                url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/mixin-jam%2Fdashboard.png?alt=media&token=68fb0a89-023e-4962-8d6d-d3ac1a1ec5bc"} 
                className={""} 
                alt={"Dashboard Page of Mixin' Jam"} 
                objPosY="32%"
            />

            {/* <div>
                <h3 className="std-header">Responsibilities</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
        </div>,
        type: ProjectType["Hobby Project"],
        year: 2023,
    }, 
    {
        title: 'Wham Bam',
        desc: 'A simple kanban board to help users manage their on-going project chopping it into an individual tasks.',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/wham-bam%2Fwham-bam.png?alt=media&token=d3a675f9-ff03-41e0-a4c4-855372fad284',
        href: '/projects/whambam',
        links: [
            {
                name: 'Wireframe in Figma',
                link: 'https://www.figma.com/proto/tQixvYwwk34MzXsUbu9b1o/wham-bam?page-id=0%3A1&type=design&node-id=36-2&viewport=-77%2C453%2C0.21&t=sebcgOm0K4yvWm3R-1&scaling=scale-down&starting-point-node-id=36%3A2&mode=design'
            },
            // {
            //     name: 'GitHub Repository',
            //     link: ''
            // },
        ],
        tools: [
            {
                name: 'Figma',
                href: 'https://www.figma.com/',
                logo: <PiFigmaLogo size={`1.2rem`} />,
            },
            // {
            //     name: 'Firebase',
            //     href: 'https://firebase.google.com/',
            //     logo: <IoLogoFirebase size={`1.2rem`} />,
            // },
            // {
            //     name: 'Next.js',
            //     href: 'https://nextjs.org/',
            //     logo: <RiNextjsFill size={`1.2rem`} />,
            // },
            // {
            //     name: 'Tailwind CSS',
            //     href: 'https://tailwindcss.com/',
            //     logo: <RiTailwindCssFill size={`1.2rem`} />,
            // },
            // {
            //     name: 'Shadcn UI',
            //     href: 'https://ui.shadcn.com/',
            //     logo: <SiShadcnui size={`1.2rem`} />,
            // },
        ]
        ,
        tags: <div><Badge className="bg-orange-400">On Going</Badge></div>,
        content: 
        <div className="flex flex-col gap-4">
            <div>
                <ArticleImage 
                    url={"https://firebasestorage.googleapis.com/v0/b/portfolio-ae8ea.appspot.com/o/wham-bam%2Fwham-bam.png?alt=media&token=d3a675f9-ff03-41e0-a4c4-855372fad284"} 
                    className={""} 
                    alt={"Wham Bam's Wireframe on Figma"} 
                    objPosY="32%"
                />
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">Wham Bam is a simple kanban board to help users manage their on-going project chopping it into an individual tasks. The tasks are assigned into separate section:
                </p>
                <ul className="std-text space-y-1">
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">
                    to-do section
                    </li>
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">in-progress section</li>
                    <li className="ml-5 list-disc text-black/60 hover:text-black duration-200 select-none">completed section</li>
                </ul>
            </div>

            <div>
                <h3 className="std-header">Progress Update</h3>
                <p className="std-text">This is a long on-hold project since late 2023. We&apos;ve finised the wireframe on Figma, and currently on the development phase. We&apos;re planning to build it using next.js, tailwind, & shadcn UI. Any updates will be reported here.</p>
            </div>
            {/* <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
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
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">Ridgeline is a famous fictional outdoor clothing company. The product detail page that the wireframe I was working on was a colorful, water-resistant, insulated jacket that is constructed with eco-friendly and recycled materials.

                After sketching rough layout for the product page, I created the low-fidelity wireframe using Figma. Finally, I added interactivity between page elements in prototype mode, transforming it into high-fidelity wireframe.</p>
            </div>

            {/* <div>
                <h3 className="std-header">Approach</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
        </div>,
        type: ProjectType["Hobby Project"],
        year: 2023,
    }, 
    {
        title: 'Cakra Home Page',
        desc: "A responsive simple portfolio page for an export-import and general trading company.",
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
                <h3 className="std-header">Project Overview</h3>
                <p className="std-text">CV. Cakra Anagata Gemilang is an Export-Import and General Trading company located in Majalengka, West Java. I was responsible to create a simple company portfolio website using jQuery & Bootstrap.</p>
            </div>

            {/* <div>
                <h3 className="std-header">Features</h3>
                <p className="std-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis facere illo possimus harum enim, facilis vitae nostrum mollitia fugit. Possimus reiciendis illum odit qui magnam dolores odio, repellat nobis?</p>
            </div> */}
            <div>
                <h3 className="std-header">Responsibilities</h3>
                <ul className="std-text space-y-2">
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none">Developed a mobile-friendly company website using responsive design principles to ensure optimal user experience across various screen sizes.
                    </li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none">Built user-friendly interfaces by applying the 60-30-10 rule for effective color selection and visual harmony.</li>
                    <li className="ml-5 list-disc hover:text-black duration-200 select-none">Implemented an interactive website using HTML, jQuery, and Bootstrap to enhance user engagement and functionality.</li>
                </ul>
            </div>
        </div>,
        type: ProjectType["Work-related Project"],
        year: 2023,
    }, 
]

export default function useData() {
    return { projectInfo }
};

