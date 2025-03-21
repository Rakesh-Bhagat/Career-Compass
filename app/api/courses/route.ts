import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Course } from "@/models/Course";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
    try {
        await connectToDatabase();

        const courses = await Course.find();
        return NextResponse.json({
            success: true,
            data: courses
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Failed to fetch courses"
        }, {status: 500});
    }
}