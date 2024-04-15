import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoDB";

export async function POST(request) {
    const { fullName, email, password } = await request.json()
    console.log({ fullName, email, password });

    if (!password || password.length < 6) {
        return NextResponse.json(
            { message: "La contraseña debe ser de al menos 6 caracteres y contener un número" },
            { status: 400 }
        );
    }

    try {
        await connectDB();

        const userFound = await User.findOne({ email });
        if (userFound) {
            return NextResponse.json(
                { message: "El email ya está en uso" },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            fullName,
            email,
            password: hashedPassword,
            // role
        });

        const savedUser = await user.save()
        console.log({ savedUser });

        return NextResponse.json(savedUser, { status: 201 })
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 400 }
            );
        }

    }
}