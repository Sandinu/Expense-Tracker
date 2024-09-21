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
            <div className='flex flex-row items-center'>
                <Image src={'/logo.png'} alt='logo' width={40} height={25}/>
                <span className='text-blue-200 font-bold text-xl'>FinanSmart</span>
            </div>

            <div>
                {menuList.map((menu,index)=> (
                    <Link href="" /*{menu.path}*/ key={index}>
                        <h2 className={`flex gap-2 items-center text-gray-500 font-medium cursor-pointer mb-2 p-4 rounded-full hover:text-primary hover:bg-blue-200 ${path == menu.path && 'text-primary bg-blue-200'}`}>
                            <menu.icon/>
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav;