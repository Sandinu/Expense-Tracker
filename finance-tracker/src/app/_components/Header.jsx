'use client' //to force this component to be a client component (components rendered in the client/browser)

import React from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from 'next/link';

function Header() {
    const {user, isSignedIn} = useUser();
    return(
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex flex-row items-center">
                <Image src={'/logo.png'} alt="logo" width={40} height={25}/>
                <span className="text-blue-300 text-xl font-bold">FinanSmart</span>
            </div>

            {isSignedIn ? (
                <UserButton/>
            ): <div className="flex gap-3 items-center">
                    <Link href='/dashboard'>
                        <Button variant="outline" className="rounded-full">Dashboard</Button>
                    </Link>
                    <Link href='/dashboard'>
                        <Button className="rounded-full bg-blue-800">Get Started</Button>
                    </Link>
                </div>}

        </div>
    )
}

export default Header;