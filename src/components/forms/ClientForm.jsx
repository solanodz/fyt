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

const ClientForm = () => {

    const [date, setDate] = useState()

    return (
        <div>
            <form action="" className='flex flex-col gap-4 p-3 border px-3 border-slate-300 rounded-xl drop-shadow-md bg-slate-100'>
                <section>
                    <p className='font-medium'>Información personal</p>
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
                </section>
                <section>
                    <p className='font-medium'>Información de contacto</p>
                    <div className='flex gap-2'>
                        <Input type="text" placeholder='Email' className='w-full' />
                        <Input type="text" placeholder='Teléfono' className='w-full' />
                    </div>
                </section>
                <Button>Enviar</Button>
            </form>
        </div>
    )
}

export default ClientForm
