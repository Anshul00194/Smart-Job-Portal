import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  applyToJob,
  getJobsByRecruiter,
  getJobApplications,
  withdrawApplication,
  updateApplication,
  deleteJob,
  updateJob
} from "../controllers/job.controller.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


router.post("/", verifyToken, createJob); 
router.get("/recruiter", verifyToken, getJobsByRecruiter); 
router.get("/", getAllJobs); 
router.get("/:id", getJobById); 
router.post("/:id/apply", verifyToken, applyToJob); 
router.put("/:jobId/apply", verifyToken, updateApplication); 
router.delete("/:jobId/apply", verifyToken, withdrawApplication); 
router.get("/:jobId/applications", verifyToken, getJobApplications);

router.delete("/:id", verifyToken, deleteJob);
router.put("/:id", verifyToken, updateJob);
export default router;

