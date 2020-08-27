import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://Adrian:qQ1!wwww@cluster0.abpnb.mongodb.net/';

const db = mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("Succesfully connected to MongoDB."))
.catch(console.error);

export default db;