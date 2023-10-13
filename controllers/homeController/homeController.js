import serve from "../../services/dbService/DBService.js";
const homeGetController = async (req, res, next) => {
  try {
    const posts = await serve.find("post");
    return res.status(200).json(posts);
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
