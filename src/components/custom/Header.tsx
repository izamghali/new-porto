"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import SearchBar from "./SearchBar"
import useData from "@/app/projects/useData"

export function Header() {

    const { projectInfo } = useData()

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex lg:gap-8 gap-4 max-xs:px-4 max-xs:justify-between justify-center max-xs:w-screen">
                <NavigationMenuItem className="font-bold text-md">
                    <Link href={'/'}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="font-bold text-md">
                    <SearchBar placeholder={"Search project"} />
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex gap-2"><span className="max-sm:hidden">Projects</span><PiRocket /></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {projectInfo.map((item) => (
                            <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            >
                            {item.desc}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
        <NavigationMenuLink asChild>
            <a
            ref={ref}
            className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
            )}
            {...props}
            >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
            </a>
        </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
