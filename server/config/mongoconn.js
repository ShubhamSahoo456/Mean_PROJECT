const moongoose = require('mongoose');

const mongo = process.env.MONGO_DB;

moongoose.connect(mongo,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful')
}).catch((error)=>{
    console.log(error)
})