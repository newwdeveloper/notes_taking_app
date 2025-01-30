import NotesRepository from "../repository/notesRepository.js";

const notesRepository = new NotesRepository();

async function createNotes(data) {
  try {
    const note = await notesRepository.createNotes(data);
    console.log("service response", note);
    return {
      success: true,
      message: "Note created successfully!",
      data: note,
    };
  } catch (error) {
    console.error("Error creating note:", error.message);
    // Custom error response
    return {
      success: false,
      message: "Failed to create note. Please try again later.",
      error: error.message, // Optional: for debugging (remove in production)
    };
  }
}

async function getNotes() {
  try {
    const notes = await notesRepository.getAllNotes();
    return {
      success: true,
      message: "All notes found",
      data: notes,
    };
  } catch (error) {
    console.error("Error creating note:", error.message);
    // Custom error response
    return {
      success: false,
      message: "Failed to create note. Please try again later.",
      error: error.message, // Optional: for debugging (remove in production)
    };
  }
}

async function getNoteByTitle(title) {
  try {
    const notes = await notesRepository.getNotesByTitle(title);
    if (notes.length === 0) {
      return null;
    }
    return {
      success: true,
      message: "Notes found",
      data: notes,
    };
  } catch (error) {
    console.error("Error fetching notes by title:", error.message);
    return {
      success: false,
      message: "Failed to find notes by title. Please try again later.",
      error: error.message, // Optional: for debugging (remove in production)
    };
  }
}

async function deleteNote(id) {
  try {
    const response = await notesRepository.deleteNote(id);
    return {
      success: true,
      message: "Notes deleted",
      data: response,
    };
  } catch (error) {
    console.error("Error deleting note:", error.message);
    return {
      success: false,
      message: "Failed to delete notes . Please try again later.",
      error: error.message, // Optional: for debugging (remove in production)
    };
  }
}

async function updateNote(id, data) {
  try {
    console.log("Updating note with ID:", id);
    console.log("Data being passed to update:", data);
    const note = await notesRepository.update(id, data); // Use the repository's update method
    return {
      success: true,
      message: "Note updated successfully",
      data: note,
    };
  } catch (error) {
    console.error("Error updating note:", error.message);
    return {
      success: false,
      message: "Failed to update note. Please try again later.",
      error: error.message, // Optional: for debugging (remove in production)
    };
  }
}

export { createNotes, getNotes, getNoteByTitle, updateNote, deleteNote };
