
import Trainer from "@/models/trainer";
import Client from "@/models/client";
import { connectDB } from "./mongoDB";


// DUMMY DATA
const trainers = [
    {
        id: 1,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 2,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 3,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 4,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 5,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 6,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
    {
        id: 7,
        firstName: "Juan",
        lastName: "Pérez",
        bornDate: "1990-01-01",
        profilePhoto: "https://via.placeholder.com/150",
        email: "jp@mail.com",
        phone: "1234567890",
        instagram: "@juanp",
        service: "Personal Trainer",
        yearsExp: 5,
        address: "123 Main St",
        city: "Miami",
        state: "FL",
        country: "USA",
        description: "I'm a personal trainer with 5 years of experience, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc. dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc.",
    },
]

export default trainers;


export const getTrainers = async () => {
    try {
        connectDB();
        const trainers = await Trainer.find();
        return trainers;
    } catch (error) {
        throw new Error("Failed to get trainers")
    }
}
