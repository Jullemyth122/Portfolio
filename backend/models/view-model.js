const mongoose = require('mongoose')
const Schema = mongoose.Schema


const viewSchema = new Schema({
    view_count:{type:Number},
    ip_address:[]
},{
    timestamps:true
})

const View = mongoose.model('views',viewSchema)

const defaultIdLikerModel = [
    "00000001a24dfc9b806e607f",
]

const queries = []
defaultIdLikerModel.forEach((viewId) => {
    queries.push(
      View.findOneAndUpdate(
        { _id: viewId },
        {
          $setOnInsert: {
            view_count:0,
            ip_address:[]
          },
        },
        {
            upsert: true,
        },
        ),
    );
});
  
Promise.all(queries).then().catch(error => console.log(error))

module.exports = View