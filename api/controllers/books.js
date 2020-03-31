import  {BookModel} from '../models' 

//let array = ["FYJC","SYJC","FY","SY","TY"]
const getAllBooks= async (req,res) => {
    const{ body } = req
    const book = await BookModel.find()
    const count = await BookModel.count()
    return res.send({Statuscode:200,message:"Ok",data:{count,book}})
}

const createBooks = async (req,res) => {
    const {body} = req
    const book = await BookModel.create(body)    
   return res.send({Statuscode:200,message:"Created",data:book})
}

const updateBooks = async (req,res) => {
    const{body , params } = req
      const {id : _id} = params
      const book = await BookModel.update({_id},({$set:body}))
    return  res.send({Statuscode:200,message:"Updated",data:book})    
}
const deleteBooks = async (req,res) => {
   const{body ,params} = req
    const {id : _id} =  params
    const book = await BookModel.deleteOne({_id})
    return res.send({Statuscode:200,message:"Deleted",data:book})
}

const getStandardBooks = async (req,res) => {
    const {params:{standardId}}=req
    const book = await BookModel.find({Standard:standardId})

    return res.send({Statuscode:200,message:"Ok",data:{book}})
}
export const BookController = { getAllBooks, createBooks , updateBooks ,deleteBooks, getStandardBooks } 
