const {Router} = require('express');
const router = Router();

router.post('/', (req, res) => {
    res.status(200).render('receive-contact', {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    console.log(req.body)
})


module.exports = router;