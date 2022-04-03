const router = require('express').Router()
let Likes = require('../models/likes-model')

router.route('/').get((req,res) => {
    
    Likes.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))    

})

router.route('/add/likes').post((req,res) => {
    const { likes } = req.body

    Likes.updateOne(
        {_id:'00000001a24dfc9b806e607b'},
        {
            $set:{
                likes
            }
        }
    ).then((likes) => res.json({ message: "New Likes Added" }))
    .catch((err) => 
        console.log(err)
    );
})

router.route('/add/dislikes').post((req,res) => {
    const {dislikes} = req.body

    Likes.updateOne(
        {_id:'00000001a24dfc9b806e607b'},
        {
            $set:{
                dislikes
            }
        }
    ).then((likes) => res.json({ message: "New Dislikes Added" }))
    .catch((err) => 
        // res.status(400).json("Error :" + err)
        console.log(err)
    );
})

module.exports = router