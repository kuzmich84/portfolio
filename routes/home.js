const {index} = require("./defaults")
const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    index(req, res)
})

module.exports = router