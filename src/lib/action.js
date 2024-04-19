"use server"


import { revalidatePath } from "next/cache"
import Trainer from "@/models/trainer"
import { connectDB } from "./mongoDB"


export const addTrainer = async (prevState, formData) => {

    const { firstName, lastName, bornDate, profilePhoto, email, phone, instagram, service, yearsExp, address, city, state, country, description } = Object.fromEntries(formData)

    try {
        connectDB();
        const newTrainer = new Trainer({
            firstName,
            lastName,
            bornDate,
            // profilePhoto,
            email,
            phone,
            instagram,
            service,
            yearsExp,
            address,
            city,
            state,
            country,
            description
        });

        await newTrainer.save();
        console.log("Trainer saved ✅");
        revalidatePath("/");
    } catch (error) {
        console.log(error);
        throw new Error("Failed to save trainer")
    }
}