import mongoose, {Schema, Document, mongo} from "mongoose"

export interface IJob extends Document{
    title: string;
    salary: string;
    location: string;
    roadmap: string;
    qualification: "10th" | "12th" | "unskilled"
}


const JobSchema = new Schema<IJob>({
    title: {type: String, required: true},
    salary: {type: String, required: true},
    location: {type: String, required: true},
    roadmap: {type: String,},
    qualification: {type: String, enum: ["10th", "12th", "unskilled"], required: true},

});

export const Job = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);