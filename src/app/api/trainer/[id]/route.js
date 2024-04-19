import Trainer from "@/models/trainer";
import { connectDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = params;
    try {
        connectDB();

        const trainer = await Trainer.findById(id);
        return NextResponse.json(trainer)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get trainer")
    }
};


export const DELETE = async (req, { params }) => {
    const { id } = params;

    try {
        connectDB();
        await Trainer.deleteOne({ _id: id });
        return NextResponse.json({ message: "Trainer deleted" })
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete trainer")
    }
};