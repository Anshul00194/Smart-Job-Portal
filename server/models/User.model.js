import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["candidate", "recruiter"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resumeUrl: String,  
    company: String,    
    logoUrl: String     
  },
  { timestamps: true }
);


export default mongoose.model("User", userSchema);
