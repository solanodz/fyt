/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { montserrat } from '@/ui/fonts'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res?.error) return setError(res.error)

        if (res.ok) return router.push('/profile')

        console.log(res);
        reload()
    }

    return (
        <div className='max-h-screen my-12 flex flex-col justify-center mx-auto items-center'>
            <h2 className={`${montserrat.className} antialiased text-5xl w-fit mx-auto font-bold p-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>Inicia sesión</h2>
            <form className='max-w-lg my-12 w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1 mx-auto w-full'>
                    <Label>Email</Label>
                    <Input
                        type="text"
                        placeholder="juanperez@mail.com"
                        required
                        name='email'
                    />
                </div>
                <div className='flex flex-col gap-1 mx-auto w-full'>
                    <Label>Contraseña</Label>
                    <Input
                        type="password"
                        placeholder="******"
                        required
                        name='password'
                    />
                </div>
                {error && <p className='text-sm bg-red-500  font-medium text-white rounded-md px-2 py-1'>{error}</p>}
                <Button className='w-full'>Ingresar</Button>
            </form>
            <span className='text-sm tracking-tight font-medium'>¿No tienes una cuenta?{' '}
                <Link href='/register' className='text-blue-600'>Ingresa aquí</Link>
            </span>
        </div>
    )
}

export default page
