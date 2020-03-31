'use strict'

import mongoose from 'mongoose'

const { Schema } = mongoose

const GENDER = ['Male', 'Female', 'Transgender']
const CLASS = [ 'FYJC','SYJC','FY','SY','TY']



const StudentSchema = new Schema({
    rollno:{type:Number , index : true,required : true},
    name : {type : String , required :true },
    dob:{type :Date , required : true},
    email : {type : String},
    phone_no :{ type: Number , required : true },
    gender:{type :String ,enum : GENDER , required :true },
    address :{type : String},
    class: {type :String ,enum : CLASS, required :true }, 
}, { timestamps: true, strict: false })

StudentSchema.index({ rollno: 1, dob: 1, status: 1, uniqueId : 1 })


export const StudentModel = mongoose.model('student', StudentSchema)





































































