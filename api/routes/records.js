import express from 'express'
import { asyncMiddleware } from '../../utils/asyncmiddleware'
import { RecordController } from '../controllers'
const RecordRouter =new express.Router();


const { issueRecords , getRecords ,deleteRecords ,getBookRecords , getStudentRecords } = RecordController 
RecordRouter.get('/', asyncMiddleware(getRecords))
RecordRouter.get('/:bookId', asyncMiddleware(getBookRecords))
RecordRouter.get('/:studentId', asyncMiddleware(getStudentRecords))
RecordRouter.post('/issue', asyncMiddleware(issueRecords))
RecordRouter.delete('/:id', asyncMiddleware(deleteRecords))


export { RecordRouter }
