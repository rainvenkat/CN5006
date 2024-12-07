mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb+srv://gvrinternet1:DX8yBLSyQoC9x5Zq@cluster1.za4uq.mongodb.net/Week8';
mongoose.connect('mongodb+srv://gvrinternet1:DX8yBLSyQoC9x5Zq@cluster1.za4uq.mongodb.net/Week8', {useUnifiedTopology: true,useNewUrlParser: true})
; const db = mongoose.connection;
db.on('error', function(err)
{console.log("Error occured during connection"+err)
}
);
db.once('connected', function() {
console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
type: String, required: true
},
age: Number, Gender:String, Salary:Number
});
// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');
// creating a single document
const doc1 = new person_doc({ name: 'Jacky',age:362,Gender:"Male",Salary:3456 });
 adding one document in the collection
doc1.save()
 .then((doc1) => {
 console.log("New Article Has been Added Into Your DataBase.",doc1);
 })
// creating multiple document
const manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
   ,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
   ,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
   { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
   ]
   
   
   person_doc.insertMany(manypersons).then(function(){
    console.log("Data inserted") // Success
    })
// finding all documents in the collection
 person_doc.find({})
 .sort({Salary:1})
 .select('name Salary age')
.limit(10)
.exect()
.then(docs => {
console.log("showing multiple documents")
docs.forEach(function(Doc) {
console.log(Doc.age,Doc.name,Doc.Salary);
})
})
 // find female and age greater than some given number
 var givenage = 20
person_doc.find({Gender:"Female",age:{$gte:givenage}})
.sort({Salary:1})
.select('name age')
.limit(10)
.exec()
.then(docs => {
console.log("showingagegreaterthan15 ",givenage)
docs.forEach(function(Doc) {
console.log(Doc.age,Doc.name);
})
})
// counting all the documents
person_doc.countDocuments().exec()
.then(count=>{
console.log("Total documents Count :", count)
})
//delete the documents for a given criteria
person_doc.deleteMany({ age: { $gte: 25 } })
.exec()
.then(docs=>{
console.log('deleted documents are:',docs);
})
// update all document of which the gender is female and set their salary to 5555 
person_doc.updateMany({ Gender: "Female" },{ $set: { Salary: 5555 } })
.exec()
.then(docs=>{
console.log("update")
console.log(docs); // Success
})
 .catch((err) => {
 console.error(err);
 });

 // I have commented the code in order to run other query, remove the comment to execute the query you want.