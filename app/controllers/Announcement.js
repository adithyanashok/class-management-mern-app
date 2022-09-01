import Announcement from "../models/Announcement.js";

export const createAnnouncement = async (req, res, next) => {
  try {
    const newAnnouncement = new Announcement(req.body);
    const savedAnnouncement = await newAnnouncement.save();
    res.status(200).json(savedAnnouncement);
  } catch (err) {
    next(err);
  }
};
export const updateAnnouncement = async (req, res, next) => {
  try {
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedAnnouncement);
  } catch (err) {
    next(err);
  }
};
export const deleteAnnouncement = async (req, res, next) => {
  try {
    await Announcement.deleteOne(req.params.id);
    res.status(200).json("Announcement deleted");
  } catch (err) {
    next(err);
  }
};

export const getAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.find();
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};
