import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import {connectToDatabase} from "@/lib/mongodb";
import { error } from "console";


export  async function POST(req: NextRequest) {
    await connectToDatabase();
    
    
    const { name , email, password, confirmPassword} = await req.json();
    console.log("Received Data:", { name, email, password, confirmPassword });


    if(!name || !email || !password || !confirmPassword){
        return NextResponse.json({message: "All fields are required"},{status: 401});

    }

    if (password !== confirmPassword){
        return NextResponse.json({ messge: "passwords do not match"},{status:400});
    }

    

    const existingUser = await User.findOne({email});

    if(existingUser) {
        return NextResponse.json({message: "User already exists"},{status: 402 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const newUser = new User({name, email, password: hashedPassword});

        await newUser.save();
        return NextResponse.json({message: "User created successfully"},{status: 201});
    }catch(error){
        console.log(error)
        return NextResponse.json({message: "server error"},{status: 500});
    }
}
