import express from 'express'
import mongoose from 'mongoose'


import {Studentrouter} from './student'
import {Bookrouter} from './books'
import {RecordRouter} from './records'

const Router = express.Router()
Router.use('/student',Studentrouter)
Router.use('/book',Bookrouter)
Router.use('/records',RecordRouter)


export {Router}