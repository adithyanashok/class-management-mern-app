import Timetable from "../models/Timetable.js";

export const createTimetable = async (req, res, next) => {
  try {
    const newTimetable = new Timetable(req.body);
    const savedTimetable = await newTimetable.save();
    res.status(200).json(savedTimetable);
  } catch (err) {
    next(err);
  }
};
export const updateTimetable = async (req, res, next) => {
  try {
    const updatedTimetable = await Timetable.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          day: req.body.day,
          FirP: req.body.Firp,
          SecP: req.body.SecP,
          ThirP: req.body.ThirP,
          Forp: req.body.Forp,
          FifP: req.body.Fifp,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedTimetable);
  } catch (err) {
    next(err);
  }
};
export const deleteTimetable = async (req, res, next) => {
  try {
    await Timetable.deleteOne(
      { _id: req.params.id },
      { $pull: { timetable: { _id: req.params.id } } }
    );
    res.status(200).json("Timetable deleted");
  } catch (err) {
    next(err);
  }
};

export const getTimetable = async (req, res, next) => {
  try {
    const timetable = await Timetable.find();
    res.status(200).json(timetable);
  } catch (err) {
    next(err);
  }
};
