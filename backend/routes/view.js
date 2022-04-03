const router = require('express').Router()
let Ip = require('../models/view-model')

router.route('/').get((req,res) => {
    Ip.find()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.route('/get/ip/address').post((req,res) => {
    const { ip_address,view_count } = req.body

    console.log(ip_address)

    Ip.updateOne(
        {_id:'00000001a24dfc9b806e607f'},
        {
            $set:{
                view_count:view_count
            },
            $addToSet: { 
                ip_address: {  
                    $each: ip_address
                } 
            }
        }
    ).then((comments) => res.json("New Ip Added") )
    .catch(err => console.log(err))

})

module.exports = router