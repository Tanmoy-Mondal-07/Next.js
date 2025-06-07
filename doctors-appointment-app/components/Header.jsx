import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container'>
                <Link href="/">
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={50}
                        height={10}
                        className='"h-10 w-auto object-contain'
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Header