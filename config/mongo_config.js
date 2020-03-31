import mongoose from 'mongoose'
mongoose.Promise = Promise
function mongoConnect() {
    let url='mongodb://localhost/lbdb'
    let options={
        useCreateIndex: true,
        useUnifiedTopology: true ,
        useNewUrlParser: true 
 
    }
    mongoose.connect(url,options)
} 
mongoose.connection.on('connected', () => {
    console.log('Connected')  })

export { mongoConnect }
