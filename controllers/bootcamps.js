import Bootcamp from '../models/Bootcamp.js';

export const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(401).send({ success: false });
  }
};

export const addBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).send({ success: true, data: bootcamp });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, message: 'Duplicate fields in the database' });
  }
};

export const getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(401).send({ success: false });
  }
};

export const updateBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    data: { message: `Update bootcamp ${req.params.id}` },
  });
};

export const deleteBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    data: { message: `Delete bootcamp ${req.params.id}` },
  });
};
