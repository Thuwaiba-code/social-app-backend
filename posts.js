let posts = [];

router.post("/", (req, res) => {
    const post = {
        id: Date.now(),
        text: req.body.text,
        likes: 0,
        comments: [],
    };

posts.unshift(post);
res.json(post);

});

router.post("/:id/like", (req, res) => {
    const post = posts.find(p =>.id == req.params.id);
    post.likes++;
    res.json(post);
});

router.post("/:id/comment", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    post.comments.push(erq.body.comment);
    res.json(post);
});
