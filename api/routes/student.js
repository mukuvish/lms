import express from 'express'
import mongoose from 'mongoose'
import { asyncMiddleware } from '../../utils/asyncmiddleware'
import { StudentController } from '../controllers'

const Studentrouter =new express.Router();
const { getStudent, createStudent , updateStudents ,deleteStudents } = StudentController 
Studentrouter.get('/', asyncMiddleware(getStudent))
Studentrouter.post('/add', asyncMiddleware(createStudent))
Studentrouter.put('/:id', asyncMiddleware(updateStudents))
Studentrouter.delete('/:id', asyncMiddleware(deleteStudents))

export {  Studentrouter }

