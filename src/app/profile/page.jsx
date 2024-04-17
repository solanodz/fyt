/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from '@/components/ui/button'
import { montserrat } from '@/ui/fonts'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'

const page = () => {

    const [date, setDate] = React.useState()
    const { data: session, status } = useSession()
    const router = useRouter()
    const handleSignOut = () => {
        router.push('/login')

        signOut()
    }
    console.log(session, status);

    return (
        <MaxWidthWrapper>
            <div>
                {session ? (
                    <div>
                        <h3 className={`${montserrat.className} w-fit antialiased text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>{session.user.fullName.split(' ')[0]}, este es tu perfil</h3>
                        <p className='w-fit bg-slate-200 px-3 rounded-full text-muted-foreground font-medium'>{session.user.email}</p>
                        <Button onClick={handleSignOut}>Cerrar sesión</Button>
                    </div>
                ) : (
                    <div>
                        <h3 className='text-2xl'>No has iniciado sesión</h3>
                    </div>
                )}
                <div className='my-6 border p-6 border-slate-300 rounded-xl drop-shadow-md bg-slate-100'>
                    <h2 className='font-slate-800 text-xl font-bold tracking-tight'>Sos entrenador o preparador fisico?</h2>
                    <p className='text-muted-foreground italic text-sm tracking-tight font-medium'> Para publicar tus servicios necesitamos que completes el siguiente formulario</p>
                    <form action="" className='flex flex-col gap-2'>
                        <p>Información personal </p>
                        <div className='flex gap-2'>
                            <Input type="text" placeholder='Nombre' className='w-full' />
                            <Input type="text" placeholder='Apellido' className='w-full' />
                            <Popover className='w-full'>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Fecha de nacimiento</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Input type='date' />
                                </PopoverContent>
                            </Popover>

                        </div>
                        <p>Información de contacto</p>
                        <div className='flex gap-2'>
                            <Input type="text" placeholder='Email' className='w-full' />
                            <Input type="text" placeholder='Teléfono' className='w-full' />
                        </div>
                        <p>Información profesional</p>
                        <div className='flex gap-2'>
                            <Input type="text" placeholder='Especialidad' className='w-full' />
                            <Input type="text" placeholder='Experiencia' className='w-full' />
                            <Input type="text" placeholder='Certificaciones' className='w-full' />
                        </div>
                        <p>Tu ubicación</p>
                        <div className='flex gap-2'>
                            <Input type="text" placeholder='Dirección' className='w-full' />
                            <Input type="text" placeholder='Ciudad' className='w-full' />
                            <Input type="text" placeholder='Provincia' className='w-full' />
                            <Input type="text" placeholder='País' className='w-full' />
                        </div>
                        <Textarea name="" id="" cols="30" rows="10" placeholder='Descripción de tus servicios' className='w-full'></Textarea>
                        <Button>Enviar</Button>
                    </form>
                </div>
            </div >
        </MaxWidthWrapper >
    )
}

export default page
