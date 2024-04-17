/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from '@/components/ui/button'
import { montserrat } from '@/ui/fonts'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

import * as React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import TrainerForm from '@/components/forms/TrainerForm'
import ClientForm from '@/components/forms/ClientForm'



const page = () => {

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
                    <div className='flex justify-between gap-2'>
                        <div className='flex flex-col gap-2'>
                            <h3 className={`${montserrat.className} w-fit antialiased text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>{session.user.fullName.split(' ')[0]}, este es tu perfil</h3>
                            <p className='w-fit bg-slate-200 text-sm px-3 rounded-full text-muted-foreground font-medium'>{session.user.email}</p>
                        </div>
                        <Button onClick={handleSignOut}>Cerrar sesión</Button>
                    </div>
                ) : (
                    <div>
                        <h3 className='text-2xl'>No has iniciado sesión</h3>
                    </div>
                )}
                <div className='my-6'>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='font-slate-800 text-2xl font-bold tracking-tight'>Soy entrenador, quiero publicar mis servicios
                            </AccordionTrigger>
                            <p className='text-muted-foreground italic text-sm tracking-tight font-medium pb-3'> Para publicar tus servicios necesitamos que completes el siguiente formulario.</p>
                            <AccordionContent>
                                <TrainerForm />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='font-slate-800 text-2xl font-bold tracking-tight'>Soy cliente, quiero contratar un entrenador
                            </AccordionTrigger>
                            <p className='text-muted-foreground italic text-sm tracking-tight font-medium pb-3'> Para valorar los servicios de tu entrenador es necesario que completes el formulario.</p>
                            <AccordionContent>
                                <ClientForm />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div >
        </MaxWidthWrapper >
    )
}

export default page
