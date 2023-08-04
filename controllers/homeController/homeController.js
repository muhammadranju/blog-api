const homeGetController = async (req, res, next) => {
  try {
    return res.status(200).json({ msg: "Hello world from Blog!" });
  } catch (error) {
    next(error);
  }
};
const homePostController = async (req, res, next) => {
  try {
    return res.status(200).json({ msg: "Hello world from Blog!" });
  } catch (error) {
    next(error);
  }
};

export default { homeGetController, homePostController };
