
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
import { addTrainer } from '@/lib/action'
import { useFormState } from "react-dom"

const TrainerForm = () => {

    const [state, formAction] = useFormState(addTrainer)

    return (
        <div>
            <form action={formAction} className='flex flex-col gap-4 p-3 border px-3 border-slate-300 rounded-xl drop-shadow-md bg-slate-100'>
                <section>
                    <p className='font-semibold text-lg'>Información personal</p>
                    <div className='flex flex-col sm:flex-row gap-2 items-end'>
                        <div className='w-full'>
                            <Label>Nombre</Label>
                            <Input type="text" placeholder='Nombre' className='w-full' name="firstName" />
                        </div>
                        <div className='w-full'>
                            <Label>Apellido</Label>
                            <Input type="text" placeholder='Apellido' className='w-full' name="lastName" />
                        </div>
                        <div className='w-full'>
                            <Label>Fecha de nacimiento</Label>
                            <Input type='date' className='w-full' name="bornDate" />
                        </div>
                        <div className='w-full'>
                            <Label>Foto de perfil</Label>
                            <Input type='file' className='w-full' placeholder='Foto de perfil' name="profilePhoto" />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-semibold text-lg'>Información de contacto</p>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className='w-full'>
                            <Label>Email</Label>
                            <Input type="text" placeholder='solanodz.dev@gmail.com' className='w-full' name="email" />
                        </div>
                        <div className='w-full'>
                            <Label>Teléfono</Label>
                            <Input type="text" placeholder='3812345678' className='w-full' name="phone" />
                        </div>
                        <div className='w-full'>
                            <Label>Instagram</Label>
                            <Input type="text" placeholder='@solanodz' className='w-full' name="instagram" />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-semibold text-lg'>Información profesional</p>
                    <div className='flex flex-col sm:flex-row items-end gap-2'>
                        <div className='flex  flex-col w-full'>

                            <div className='flex gap-2 items-center w-full'>
                                <Label>Especialidad</Label>
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
                            </div>
                            <Input type="text" placeholder='ej.: Entrenador personal especialista en embarazadas' className='w-full' name="service" />
                        </div>

                        <div className='w-full'>
                            <Label>Años de experiencia</Label>
                            <Input type="number" placeholder='ej.: 4 años' className='w-full' name="yearsExp" />
                        </div>
                    </div>
                </section>
                <section>
                    <p className='font-semibold text-lg'>Tu ubicación</p>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <div className='w-full'>
                            <Label>Dirección</Label>
                            <Input type="text" placeholder='Dirección' className='w-full' name="address" />
                        </div>
                        <div className='w-full'>
                            <Label>Ciudad</Label>
                            <Input type="text" placeholder='Ciudad' className='w-full' name="city" />
                        </div>
                        <div className='w-full'>
                            <Label>Provincia o estado</Label>
                            <Input type="text" placeholder='Provincia' className='w-full' name="state" />
                        </div>
                        <div className='w-full'>
                            <Label>País</Label>
                            <Input type="text" placeholder='País' className='w-full' name="country" />
                        </div>
                    </div>
                </section>
                <section className='flex flex-col gap-2'>
                    <div className='flex items-center  gap-2'>
                        <Label>Descripcion de tus servicios</Label>
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
                    </div>

                    <Textarea id="" cols="30" rows="10" placeholder='Descripción de tus servicios' className='w-full' name="description" />
                </section>
                <Button>Enviar</Button>
            </form>
        </div >
    )
}

export default TrainerForm
