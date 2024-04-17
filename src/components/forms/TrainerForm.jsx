import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, InfoIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from '../ui/label'


const TrainerForm = () => {

    const [date, setDate] = React.useState()

    return (
        <div>
            <form action="" className='flex flex-col gap-4 p-3 border px-3 border-slate-300 rounded-xl drop-shadow-md bg-slate-100'>
                <section>
                    <p className='font-medium'>Información personal</p>
                    <div className='flex gap-2 items-end'>
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
                    <p className='font-medium'>Información de contacto</p>
                    <div className='flex gap-2'>
                        <div className='w-full'>
                            <Label>Email</Label>
                            <Input type="text" placeholder='solanodz.dev@gmail.com' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Teléfono</Label>
                            <Input type="text" placeholder='3812345678' className='w-full' />
                        </div>
                        <div className='w-full'>
                            <Label>Instagram</Label>
                            <Input type="text" placeholder='@solanodz' className='w-full' />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-medium'>Información profesional</p>
                    <div className='flex gap-2'>
                        <div className='w-full'>
                            <Label>Especialidad</Label>
                            <Input type="text" placeholder='ej.: Entrenador personal especialista en embarazadas' className='w-full' />
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger><InfoIcon /></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Especialidad</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Escribe el titulo con el que te presentarás a tus clientes, por ejemplo:
                                        <ul className='my-2'>
                                            <li>• Entrenador personal</li>
                                            <li>• Preparador físico en deportes de equipo</li>
                                            <li>• Entrenador personal especialista en entrenamiento de fuerza</li>
                                            <li>• Entrenador personal especialista en descenso de peso</li>
                                            <li>• Entrenador especialista en rehabilitación de lesiones deportivas</li>
                                            <li>• etc.</li>
                                        </ul>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction>Close</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className='w-full'>
                            <Label>Años de experiencia</Label>
                            <Input type="number" placeholder='ej.: 4 años' className='w-full' />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-medium'>Tu ubicación</p>
                    <div className='flex gap-2'>
                        <Input type="text" placeholder='Dirección' className='w-full' />
                        <Input type="text" placeholder='Ciudad' className='w-full' />
                        <Input type="text" placeholder='Provincia' className='w-full' />
                        <Input type="text" placeholder='País' className='w-full' />
                    </div>
                </section>
                <section className='flex gap-2'>
                    <AlertDialog>
                        <AlertDialogTrigger><InfoIcon /></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Descripción de tus servicios</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Este es tu espacio para venderte. Escribe tus logros, experiencias, habilidades y conocimientos que te hacen ser una buena opción para tus clientes. Te recomendamos adjuntar los siguientes links:
                                    <ul className='my-2'>
                                        <li>• Certificaciones</li>
                                        <li>• Logros y experiencias</li>
                                        <li>• Testimonios de clientes</li>
                                        <li>• Redes sociales</li>
                                        <li>• Página web</li>
                                        <li>• etc.</li>
                                    </ul>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction>Close</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Textarea name="" id="" cols="30" rows="10" placeholder='Descripción de tus servicios' className='w-full'></Textarea>
                </section>
                <Button>Enviar</Button>
            </form>
        </div >
    )
}

export default TrainerForm