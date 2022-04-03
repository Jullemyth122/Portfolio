const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
    likes:0,
    dislikes:0,
},{
    timestamps:true
})

const Like = mongoose.model('likes',likeSchema)

const defaultIdLikerModel = [
    "00000001a24dfc9b806e607b",
]

const queries = []
defaultIdLikerModel.forEach((viewId) => {
    queries.push(
      Like.findOneAndUpdate(
        { _id: viewId },
        {
          $setOnInsert: {
            likes:0,
            dislikes:0
          },
        },
        {
            upsert: true,
        },
        ),
    );
});
  
Promise.all(queries).then().catch(error => console.log(error))

module.exports = Like