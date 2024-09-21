'use client'
import React, {useState,useEffect} from "react";
import { UserButton, useUser } from "@clerk/nextjs";


function Dashboard(){
    const {user} = useUser();
    return (
        <div className="p-8">
            <h2 className="text-primary font-bold text-4xl">HI, {user?.fullName}</h2>
            <p className="text-neutral-500">Here's what happening with your money. Let's manage your expenses</p>
        </div>
    )
}

export default Dashboard;