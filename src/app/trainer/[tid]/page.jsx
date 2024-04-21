"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { montserrat } from "@/ui/fonts";
import { MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const TrainerPage = ({ params }) => {

    // to-do -> fetch trainer with id from the server
    // axios? fetch?

    const [trainer, setTrainer] = useState({})
    const { tid } = params;

    useEffect(() => {
        fetch(`http://localhost:3000/api/trainer/${tid}`)
            .then((data) => data.json())
            .then((data) => {
                setTrainer(data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    return (
        <MaxWidthWrapper>
            <div className='flex gap-6'>
                <div className="flex flex-col items-center">
                    <Link href={'/'} className={`${buttonVariants({ variant: 'link' })} flex gap-3 mb-6`}><FaArrowLeft /> Volver</Link>

                    <Image
                        src='/trainer.png'
                        width={200}
                        height={200}
                        className='rounded-full bg-red-500'
                        alt='foto de perfil del entrenador' />
                    <div className="my-6 text-center w-fit justify-center">
                        <h2 className="text-sky-700 font-bold text-lg tracking-tight  w-full mx-auto text-center">Contacto</h2>
                        <div className="flex text-2xl gap-3 text-sky-700">
                            <Link className="hover:text-blue-800 duration-200 hover:scale-110 bg-sky-200 p-1.5 rounded-full" href={`https://www.facebook.com/${trainer.email}`} target="_blank"><IoMdMail /></Link>
                            <Link className="hover:text-blue-800 duration-200 hover:scale-110 bg-sky-200 p-1.5 rounded-full" href={`https://www.instagram.com/${trainer.instragram}`} target="_blank"><FaInstagram /></Link>
                            <Link className="hover:text-blue-800 duration-200 hover:scale-110 bg-sky-200 p-1.5 rounded-full" href={`https://wa.me/${trainer.phone}`} target="_blank"><FaWhatsapp /></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={`${montserrat.className} w-fit antialiased text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>{trainer.firstName} {trainer.lastName}</h1>
                    <p className="text-sky-700 font-bold text-lg tracking-tight flex gap-2 items-center">{trainer.service}</p>
                    <div className="flex flex-col gap-1 my-3">
                        <p className="text-sm bg-sky-200 w-fit py-0.5 px-3 rounded-full text-sky-700 font-semibold tracking-tight flex gap-2 items-center"><ShieldCheck size={20} /> Tiene +{trainer.yearsExp} años de experiencia</p>
                        <p className="text-sm bg-sky-200 w-fit py-0.5 px-3 rounded-full text-sky-700 font-semibold tracking-tight flex gap-2 items-center"><MapPin size={20} /> {trainer.city}, {trainer.state} - {trainer.country}.</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: trainer.description }} />
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default TrainerPage
