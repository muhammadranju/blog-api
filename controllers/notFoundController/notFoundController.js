const notFoundController = (req, res, next) => {
  try {
    res.status(404).json({ error: "Page not found 404" });
    return next();
  } catch (error) {
    console.log(error);
  }
};
const serverProblemController = (req, res, next, err) => {
  try {
  } catch (error) {
    next(error);
  }
};

export default { notFoundController, serverProblemController };
