import express from 'express'
import mongoose from 'mongoose'
import { asyncMiddleware } from '../../utils/asyncmiddleware'
import { BookController } from '../controllers'
// const Standard = ["FYJC","SYJC","FY","SY","TY"] 
const Bookrouter =new express.Router();
const { getAllBooks, createBooks , updateBooks ,deleteBooks,getStandardBooks } = BookController 
Bookrouter.get('/', asyncMiddleware(getAllBooks))
Bookrouter.get('/standard/:standardId', asyncMiddleware(getStandardBooks))
Bookrouter.post('/add', asyncMiddleware(createBooks))
Bookrouter.put('/:id', asyncMiddleware(updateBooks))
Bookrouter.delete('/:id', asyncMiddleware(deleteBooks))

export { Bookrouter }
