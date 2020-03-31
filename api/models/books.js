import mongoose from 'mongoose'

const { Schema } = mongoose

const BookSchema = new Schema({
    Bookname: {type : String},
    Standard : {type : String}
}, { timestamps: true, strict: false })


const BookModel = mongoose.model('book', BookSchema)

export { BookModel }
