import { NextResponse } from "next/server";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
    const { email, password } = await request.json();

    if (!password || password.length < 6) return NextResponse.json({ password: 'Password must be at least 6 characters' }
        , { status: 400 })

    try {
        await connect()
        const userFound = await User.findOne({ email })

        if (userFound) {
            return NextResponse.json({ user: 'Email already exists' }, { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({ email, password: hashedPassword })

        const savedUser = await user.save()
        console.log(savedUser)


        return NextResponse.json(savedUser)

    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 })
        }
        return NextResponse.error()
    }
}