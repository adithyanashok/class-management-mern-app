import Events from "../models/Events.js";

export const createEvent = async (req, res, next) => {
  try {
    const newEvent = new Events(req.body);
    const savedEvents = await newEvent.save();
    res.status(200).json(savedEvents);
  } catch (err) {
    next(err);
  }
};
export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Events.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};
export const deleteEvent = async (req, res, next) => {
  try {
    await Events.deleteOne(req.params.id);
    res.status(200).json("Event deleted");
  } catch (err) {
    next(err);
  }
};

export const getEvents = async (req, res, next) => {
  try {
    const event = await Events.find();
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

export const getAEvents = async (req, res, next) => {
  try {
    const event = await Events.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};
