import CrudRepository from "./crudRepository.js";
import notes from "../schema/notesSchema.js";

class NotesRepository extends CrudRepository {
  constructor() {
    super(notes);
  }
}

export default NotesRepository;
