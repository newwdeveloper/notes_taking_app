import { StatusCodes } from "http-status-codes";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async createNotes(data) {
    try {
      const notes = await this.model.create(data);
      return notes;
    } catch (error) {
      console.error("Unable to create notes:", error.message);
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Failed to create notes",
      };
    }
  }

  async getNotesById(id) {
    try {
      const note = await this.model.findById(id);
      if (!note) {
        throw {
          status: StatusCodes.NOT_FOUND,
          message: "Note not found",
        };
      }
      return note;
    } catch (error) {
      console.error("Unable to find note:", error.message);
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Failed to find note",
      };
    }
  }

  async getAllNotes() {
    try {
      const notes = await this.model.find().sort({ createdAt: -1 });
      return notes;
    } catch (error) {
      console.error("Unable to retrieve notes:", error.message);
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Failed to retrieve all notes",
      };
    }
  }

  async deleteNote(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      if (!response) {
        throw {
          status: StatusCodes.NOT_FOUND,
          message: "Note not found",
        };
      }
      return response;
    } catch (error) {
      console.error("Unable to delete note:", error.message);
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Failed to delete note",
      };
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true, // Return the updated document
        runValidators: true, // Ensure validation runs
      });

      if (!response) {
        throw {
          status: StatusCodes.NOT_FOUND,
          message: "Resource not found",
        };
      }
      return response;
    } catch (error) {
      console.error("Unable to update note:", error.message);
      throw {
        status: StatusCodes.BAD_REQUEST,
        message: "Failed to update note",
      };
    }
  }
}

export default CrudRepository;
