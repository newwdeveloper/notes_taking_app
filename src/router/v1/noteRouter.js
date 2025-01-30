import express from "express";
import {
  createNote,
  deleteNoteDetails,
  findNoteByTitle,
  getAllNotes,
  updateNoteDetails,
} from "../../controller/notesController.js";

const router = express.Router();

router.post("/notes", createNote);
router.get("/:title", findNoteByTitle);
router.get("/", getAllNotes);
router.patch("/:id", updateNoteDetails);
router.delete("/:id", deleteNoteDetails);

export default router;
