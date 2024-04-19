"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { montserrat } from "@/ui/fonts";
import { DumbbellIcon, LocateIcon, MapIcon, MapPin, PinIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
                <div>
                    <Image
                        src='/trainer.png'
                        width={200}
                        height={200}
                        className='rounded-full bg-red-500'
                        alt='foto de perfil del entrenador' />
                </div>
                <div>
                    <h1 className={`${montserrat.className} w-fit antialiased text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800 tracking-tighter`}>{trainer.firstName} {trainer.lastName}</h1>
                    <p className="font-bold text-lg tracking-tight flex gap-2 items-center">{trainer.service}</p>
                    <div className="flex flex-col gap-1 my-3">
                        <span className="font-semibold tracking-tight flex gap-2 items-center"><ShieldCheck /> Tiene +{trainer.yearsExp} años de experiencia</span>
                        <p className="font-semibold tracking-tight flex gap-2 items-center"><MapPin /> {trainer.city}, {trainer.state} - {trainer.country}.</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: trainer.description }} />
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default TrainerPage
