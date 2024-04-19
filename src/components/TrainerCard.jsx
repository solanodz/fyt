"use client"

import { Star } from 'lucide-react'
// import {useState} from 'react'
import { Badge } from './ui/badge'
import { Button, buttonVariants } from './ui/button'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import axios from 'axios'

const TrainerCard = () => {

    // to-do -> fetch trainers from the server
    // axios? fetch?

    const [trainers, setTrainers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/trainer')
            .then((data) => data.json())
            .then((data) => {
                setTrainers(data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    console.log(trainers);

    return (
        <div className='flex flex-wrap my-6'>
            {trainers.map((trainer, index) => (
                <div className="min w-full flex flex-col gap-4  border-y border-slate-300 p-2 m-2" key={index}>
                    <div className="flex gap-4 ">
                        <div>
                            <Image
                                src='/trainer.png'
                                width={120}
                                height={120}
                                className='rounded-full bg-red-500'
                                alt='foto de perfil del entrenador' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='trackig-tighter font-bold text-blue-900 text-2xl'>{trainer.firstName}{' '}{trainer.lastName}</h3>
                            <Badge className='w-fit mb-3'>+ {trainer.yearsExp} años de experiencia</Badge>
                            <span className='bg-sky-100 text-sky-600 rounded-md text-sm p-1 px-2'>{trainer.service}</span>
                            {/* <p className='flex gap-2'><Star size={20} className='text-yellow-500' />{trainer.rating}</p> */}
                        </div>

                        <div className='flex items-end ml-auto'>
                            <Link href={`/trainer/${trainer._id}`} className={buttonVariants({ variant: 'link' })}>Ver perfil</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TrainerCard
