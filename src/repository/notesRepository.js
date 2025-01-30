import CrudRepository from "./crudRepository.js";
import notes from "../schema/notesSchema.js";

class NotesRepository extends CrudRepository {
  constructor() {
    super(notes);
  }
  async getNotesByTitle(title) {
    try {
      return await this.model.find({ titleName: new RegExp(title, "i") });
    } catch (error) {
      throw error;
    }
  }
}

export default NotesRepository;
