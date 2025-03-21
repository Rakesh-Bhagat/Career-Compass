import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
  title: string;
  duration: string;
  description: string;
  levels: string[];
  link: string;
}

const SkillSchema: Schema = new Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  levels: { type: [String], required: true },
});

export const Skill =  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
