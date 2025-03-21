import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  _id: String;
  title: String;
  institution: String;
  location: String;
  duration: String;
  price: Number;
  type: String;
  timeline: String;
  link: String;
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  type: {
    type: String,
    required: true,
    enum: ["certification", "diploma", "degree"],
  },
  timeline: {
    type: String,
    required: true,
    enum: ["short", "long"],
  },
  link:{ type: String},
});

export const Course =
  mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);
