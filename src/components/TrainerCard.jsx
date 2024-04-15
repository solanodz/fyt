
import { Star } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const TrainerCard = () => {

    const trainers = [
        {
            name: "John Doe",
            trabajo: "Preparador Físico",
            rating: 4.5,
        },
        {
            name: "Jane Doe",
            trabajo: "Entrenador Personal",
            rating: 4.5,
        },
        {
            name: "John Doe",
            trabajo: "Preparador Físico",
            rating: 4.5,
        },
        {
            name: "Jane Doe",
            trabajo: "Entrenador Personal",
            rating: 4.5,
        },
        {
            name: "John Doe",
            trabajo: "Preparador Físico",
            rating: 4.5,
        },
        {
            name: "Jane Doe",
            trabajo: "Entrenador Personal",
            rating: 4.5,
        },
        {
            name: "John Doe",
            trabajo: "Preparador Físico",
            rating: 4.5,
        },
        {
            name: "Jane Doe",
            trabajo: "Entrenador Personal",
            rating: 4.5,
        },
    ]

    return (
        <div className='flex flex-wrap my-6'>
            {trainers.map((trainer, index) => (
                <div className="min w-96 flex flex-col gap-4  border border-slate-400 rounded-lg p-2 m-2" key={index}>
                    <div className="flex gap-4 ">
                        <div className="min-w-44 max-w-54 border border-slate-400 h-32 bg-gray-200 rounded-md"></div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='trackig-tighter font-bold text-blue-800 text-xl'>{trainer.name}</h3>
                            <Badge>{trainer.trabajo}</Badge>
                            <p className='flex gap-2'><Star size={20} className='text-yellow-500' />{trainer.rating}</p>
                        </div>
                    </div>
                    <div>
                        <Button className=''>Contactar</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TrainerCard
