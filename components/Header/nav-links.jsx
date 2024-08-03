"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navLinksData } from "@/data/nav-links"
import { nanoid } from "nanoid"

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild className="z-[9999]">
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

export function NavLinks() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-5">
                {navLinksData?.map((link, i) => (
                    <NavigationMenuItem key={nanoid()}>

                        {link.type === 'dropdown' ?
                            <>
                                <NavigationMenuTrigger className="text-[1rem]">{link.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] !z-[999999999999999999999] bg-white">
                                        {link.links.map((link) => (
                                            <ListItem
                                                key={link.title}
                                                title={link.title}
                                                href={link.href}
                                            >
                                                {link.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>

                            :

                            <Link href={link.url} legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-[1rem]")}>
                                    {link.title}
                                </NavigationMenuLink>
                            </Link>
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

