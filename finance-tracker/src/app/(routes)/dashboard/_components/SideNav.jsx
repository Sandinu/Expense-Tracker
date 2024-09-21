import React, {useEffect} from 'react';
import Image from 'next/image';
import { LayoutGrid,PiggyBank,ReceiptText,ShieldCheck,CircleDollarSign } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav(){
    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon: LayoutGrid,
            pathL:'/dashboard'
        },
        {
            id:2,
            name:'Incomes',
            icon: CircleDollarSign,
            pathL:'/dashboard/incomes'
        },
        {
            id:3,
            name:'Budgets',
            icon: PiggyBank,
            pathL:'/dashboard/budgets'
        },
        {
            id:4,
            name:'Expenses',
            icon: ReceiptText,
            pathL:'/dashboard/expenses'
        },
        {
            id:5,
            name:'Upgrade',
            icon: ShieldCheck,
            pathL:'/dashboard/upgrade'
        },
    ]

    const path = usePathname()
    useEffect(()=>{
        console.log(path)
    }, [path]);

    return (
        <div className='h-screen p-5 border shadow-sm '>
            <div>
                
            </div>
        </div>
    )
}