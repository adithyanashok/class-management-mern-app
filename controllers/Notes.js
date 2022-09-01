import Notes from "../models/Notes.js";

export const createNote = async (req, res, next) => {
  try {
    const newNote = new Notes(req.body);
    const savedNotes = await newNote.save();
    res.status(200).json(savedNotes);
  } catch (err) {
    next(err);
  }
};
export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    next(err);
  }
};
export const deleteNote = async (req, res, next) => {
  try {
    await Notes.deleteOne(req.params.id);
    res.status(200).json("Note deleted");
  } catch (err) {
    next(err);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const Note = await Notes.find();
    res.status(200).json(Note);
  } catch (err) {
    next(err);
  }
};

export const getANotes = async (req, res, next) => {
  try {
    const Note = await Notes.findById(req.params.id);
    res.status(200).json(Note);
  } catch (err) {
    next(err);
  }
};
