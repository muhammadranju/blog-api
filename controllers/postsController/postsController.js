import shortid from "shortid";
import serve from "../../services/dbService/DBService.js";

const postGetController = async (req, res, next) => {
  try {
    const posts = await serve.find("post");
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
const postPostController = async (req, res, next) => {
  try {
    const { title, dest, tags, category, thumbnail, comment } = req.body;

    const short_title =
      title.split(" ").join("_") + `_${shortid.generate().toLowerCase()}`;

    console.log(req.userId);
    const posts = serve.creates("post", {
      title,
      short_title,
      dest,
      tags,
      category,
      thumbnail,
      author: req.userId,
      comment,
    });
    await posts.save();

    return res.status(201).json(posts);
  } catch (error) {
    next(error);
  }
};

export default { postGetController, postPostController };
