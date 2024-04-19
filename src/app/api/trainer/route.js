import Trainer from "@/models/trainer";
import { connectDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        connectDB();

        const trainers = await Trainer.find();
        return NextResponse.json(trainers)
    } catch (error) {
        throw new Error("Failed to get trainers")
    }
}
