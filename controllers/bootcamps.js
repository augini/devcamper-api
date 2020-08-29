export const getBootcamps = (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { message: 'Show all bootcamps' } });
};

export const addBootcamp = (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { message: 'Add a new bootcamp' } });
};

export const getBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    data: { message: `Display the bootcamp ${req.params.id}` },
  });
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
