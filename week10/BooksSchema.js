let mongoose= require('mongoose')
//please note that mongoose will create a unique id called_id which can be used for updates.
const BookScheme= new mongoose.Schema({
 booktitle:{ 
    type:String,
 required:true
 },
 bookid:Number,
 PubYear:Number,
 author:String,
 Topic:String,
 formate:String
 })
 module.exports= mongoose.model('bookmodel',BookScheme,'BookCollection2') 