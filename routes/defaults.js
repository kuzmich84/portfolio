exports.index = (req, res) => {
    res.status(200).render('index', {
        title: `Front-end Developer Dmitry Kuchukov`,
        isHome: true,
    });
}
