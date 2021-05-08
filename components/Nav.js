import React from 'react'
import requests from '../utils/requests'
import classes from '../styles/nav.module.css'
import {useRouter} from 'next/router'

const Nav = () => {
    const router = useRouter();

    return (
        <nav className='relative'>
            <div className='flex justify-between px-10 scrollbar-hide sm:px-20 text-2xl  whitespace-nowrap space-x-10 sm:space-x-20 
            overflow-x-scroll  '>
                {Object.entries(requests).map(([key , {title , url}]) => (
                    <h2
                    onClick={() => router.push(`/?genre=${key}`)} 
                     className={classes.h2}
                    key={key}
                   >{title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 '/>
        </nav>
    )
}

export default Nav
