import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Skill } from "@/models/Skills";

export async function GET(req: Request){
    try {
        await connectToDatabase();

        const skills = await Skill.find({});

        return NextResponse.json(skills);
    } catch (error) {
        console.error("Error fetching skills: ", error);
        return NextResponse.json({error: "Failed to fetch skills"}, {status: 500});
    }
}