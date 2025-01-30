import express from "express";
import notesRoutes from "./noteRouter.js";

const router = express.Router();

router.use("/notesApp", notesRoutes);

export default router;
