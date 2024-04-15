import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { montserrat } from '@/ui/fonts'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-h-screen my-12 flex flex-col justify-center mx-auto items-center'>
            <h2 className={`${montserrat.className} antialiased text-5xl w-fit mx-auto font-bold p-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>Inicia sesión</h2>
            <form className='max-w-lg my-12 w-full flex flex-col gap-4'>
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
                        type="text"
                        placeholder="******"
                        required
                        name='password'
                    />
                </div>

                <Button className='w-full'>Ingresar</Button>
            </form>
            <span className='text-sm tracking-tight font-medium'>¿No tienes una cuenta?{' '}
                <Link href='/register' className='text-blue-600'>Ingresa aquí</Link>
            </span>
        </div>
    )
}

export default page
