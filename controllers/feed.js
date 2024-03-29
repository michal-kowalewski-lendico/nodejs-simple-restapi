exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First post", content: "This is my first post" }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  // Create post in db

  res.status(201).json({
    message: "Post created succesfully!",
    post: { id: new Date().toISOString().toString(), title, content }
  });
};
