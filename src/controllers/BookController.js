import BookModel from '../models/Book.js';

const BookController = {

    async newBook(req, res){
        try {
            const book = await BookModel.create(req.body);
            res.status(201).send(book);

        } catch (error) {
            console.error(error)
            res.status(500).send({message:'There was an error trying to create this book.'})
        }
    },
    async getAllBooks(req,res){
        try {
            const books = await BookModel.find();
            res.status(201).send(books)

        } catch (error) {
            sole.error(error)
            res.status(500).send({message:'There was an error trying to update this book.'})
        }
    },

    async updateBook(req,res){
        try {
            const { id } = req.params;
            const body = req.body;

            const book = await BookModel.findByIdAndUpdate(id,
                body
            , {new:true});

            res.status(201).send(book);

        } catch (error) {
            sole.error(error)
            res.status(500).send({message:'There was an error trying to update this book.'})
        }
    },

    async deleteBook(req,res){
        try {
            const {id} = req.params;
            await BookModel.findByIdAndDelete(id);
            res.status(201).send({message:'Books was succesfully deleted.'})

        } catch (error) {
            sole.error(error)
            res.status(500).send({message:'There was an error trying to delete this book.'})
        }
    }

}
export default BookController;