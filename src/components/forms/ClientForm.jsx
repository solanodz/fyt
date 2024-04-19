import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Label } from '../ui/label'

const ClientForm = () => {

    const [date, setDate] = useState()

    return (
        <div>
            <form action="" className='flex flex-col gap-4 p-3 border px-3 border-slate-300 rounded-xl drop-shadow-md bg-slate-100'>
                <section>
                    <p className='font-semibold text-lg'>Información personal</p>
                    <div className='flex flex-col sm:flex-row gap-2 items-end'>
                        <div className='w-full'>
                            <Label>Nombre</Label>
                            <Input type="text" placeholder='Nombre' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Apellido</Label>
                            <Input type="text" placeholder='Apellido' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Fecha de nacimiento</Label>
                            <Input type='date' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Foto de perfil</Label>
                            <Input type='file' className='w-full' placeholder='Foto de perfil' />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-semibold text-lg'>Información de contacto</p>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className='w-full'>
                            <Label>Email</Label>
                            <Input type="text" placeholder='solanodz.dev@gmail.com' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Teléfono</Label>
                            <Input type="text" placeholder='3812345678' className='w-full' />
                        </div>
                    </div>
                </section>
                <Button>Enviar</Button>
            </form>
        </div>
    )
}

export default ClientForm
