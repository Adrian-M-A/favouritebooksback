import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    imagePath:{
        type: String, 
        required: true
    },
    collectionName: {
        type: String,
        required: true
    }
})

const BookModel = mongoose.model('Book', BookSchema);

export default BookModel;