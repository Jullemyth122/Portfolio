const router = require('express').Router()
let Rate = require('../models/rate-model')


router.route('/').get((req,res) => {
    Rate.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.route('/add').post((req,res) => {

    const { comment, rate} = req.body

    new Rate({
        comment,rate
    }).save().then(data => res.send('Comment Added')).catch(err => console.log(err))

})

module.exports = router