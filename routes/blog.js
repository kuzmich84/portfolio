const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).render('blog-minibar', {
        title: `Blog Dmitry Kuchukov`,
        isBlog: true
    })
})

module.exports = router;

