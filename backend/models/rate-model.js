const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rateSchema = new Schema({
    comment:{
        type:String,
        required:true
    },
    rate:{type:Number,required:true}
},{
    timestamps:true
})



const Rate = mongoose.model('rates',rateSchema)

module.exports = Rate