import { createNotes } from "../service/notesService.js";
import { getNoteByTitle } from "../service/notesService.js";
import { getNotes } from "../service/notesService.js";
import { updateNote } from "../service/notesService.js";
import { deleteNote } from "../service/notesService.js";

async function createNote(req, res) {
  try {
    // Validate input data

    const { titleName, content } = req.body;
    console.log("req.body", req.body);

    if (!titleName || !content) {
      return res.status(400).json({
        success: false,
        message: "Both title and content are required.",
      });
    }

    const note = await createNotes({
      titleName: titleName,
      content: content,
    });

    return res.status(201).json({
      success: true,
      message: "Note created successfully!",
      data: note,
    });
  } catch (error) {
    console.error("Error creating note:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to create note. Please try again later.",
      error: error.message,
    });
  }
}

async function findNoteByTitle(req, res) {
  try {
    console.log(req.params);
    const title = req.params.title;
    console.log("search by title", title);
    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title query parameter is required",
      });
    }
    const note = await getNoteByTitle(title);
    console.log("notes to find", note);
    if (note) {
      return res.status(200).json({
        success: true,
        message: "Note found",
        data: note,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
  } catch (error) {
    console.error("Error fetching note by title:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to find note. Please try again later.",
      error: error.message,
    });
  }
}

async function getAllNotes(req, res) {
  try {
    const notes = await getNotes();
    return res.status(200).json({
      success: true,
      message: "All notes found",
      data: notes,
    });
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch notes. Please try again later.",
      error: error.message,
    });
  }
}

async function updateNoteDetails(req, res) {
  try {
    const id = req.params.id; // Extract id from the URL
    const data = req.body; // Assuming data is in the request body
    console.log("Request body data:", req.body);
    console.log("Attempting to update note with id:", id);

    // Call the service to update the note
    const result = await updateNote(id, data);

    // Check if the update was successful
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.data, // Directly use the 'data' from the result
      });
    } else {
      return res.status(404).json({
        success: false,
        message: result.message, // Use the message from the result
      });
    }
  } catch (error) {
    console.error("Error updating note:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to update note. Please try again later.",
      error: error.message,
    });
  }
}

async function deleteNoteDetails(req, res) {
  try {
    const id = req.params.id;
    const response = await deleteNote(id);
    if (response) {
      return res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        data: response,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Note not found to delete",
      });
    }
  } catch (error) {
    console.error("Error deleting note:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to delete note. Please try again later.",
      error: error.message,
    });
  }
}

export {
  createNote,
  findNoteByTitle,
  getAllNotes,
  updateNoteDetails,
  deleteNoteDetails,
};
