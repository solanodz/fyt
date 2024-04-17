import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

const Navbar = async () => {

    const session = await getServerSession()

    return (
        <div className='border-b border-slate-300 bg-white backdrop-blur-lg bg-opacity-60 fixed w-full z-50 top-0 mb-12'>
            <MaxWidthWrapper >
                <nav className='flex justify-between items-center'>
                    <Link href='/'>
                        <Image src='/fyt-blue.png' alt='Logo' width={1000} height={500} className='p-2 h-14 w-fit' />
                    </Link>
                    <div>
                        {session ? (
                            <Link href='/profile' className={buttonVariants({ variant: 'default' })}>Mi Perfil</Link>
                        ) : (
                            <div className='flex gap-4 items-center'>
                                <Link href='/login' className={buttonVariants({ variant: 'default' })}>Iniciar sesión</Link>
                                <Link href='/register' className={buttonVariants({ variant: 'outline' })}>Registrarse</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </MaxWidthWrapper >
        </div >
    )
}

export default Navbar
