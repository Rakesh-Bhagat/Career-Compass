import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Job } from "@/models/Job";

export async function GET(req: Request){
    try {
        await connectToDatabase();

        const { searchParams} = new URL(req.url);
        const level = searchParams.get("level") || "10th";

        const jobs = await Job.find({qualification: level});

        return NextResponse.json(jobs);
    } catch (error) {
        console.error("Error fetching jobs: ", error);
        return NextResponse.json({error: "Failed to fetch jobs"}, {status: 500});
    }
}