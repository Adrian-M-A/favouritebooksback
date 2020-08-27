import express from 'express';
import BookController from '../controllers/BookController.js';

const router = express.Router();

router.post('/', BookController.newBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook)
router.get('/', BookController.getAllBooks)

export default router;