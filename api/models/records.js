'use strict'
import mongoose from 'mongoose'

const ObjectId =  mongoose.Schema.Types.ObjectId
const { Schema } = mongoose

const RecordSchema = new Schema({
    studentId:ObjectId,
    bookId:ObjectId,
    status:{type:String,required:true,default:'issue'}
}, { 
    timestamps: true,
    strict: false
})

const RecordModel = mongoose.model('record', RecordSchema)

export { RecordModel }
