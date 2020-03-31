import  {RecordModel} from '../models' 

//let array = ["FYJC","SYJC","FY","SY","TY"]
const checkRecords= async (studentId) => {
    const book = await RecordModel.find({studentId,'status':'issue'})
    return book;
}

const getRecords= async (req,res) => {
    const{ body } = req
    const records = await RecordModel.find()
    return res.send({Statuscode:200,message:"Ok",data:records})
}

const issueRecords= async (req,res) => {
    const{ body } = req
    const { studentId, bookId} = body
    let records=await checkRecords(studentId)
    if(records && records.length>0){
        return res.send({statusCode:400,message:"Book already issued"})
    }
    const book = await RecordModel.create(body)
    return res.send({Statuscode:200,message:"Ok",data:book})
}
const deleteRecords = async (req,res) => {
    const{body ,params} = req
     const {id : _id} =  params
     const book = await RecordModel.deleteOne({_id})
     return res.send({Statuscode:200,message:"Deleted",data:book})
 }

 const getBookRecords= async (req,res) => {
    const {params:{bookId}}  = req
    const records = await RecordModel.find({bookId:bookId})
    return res.send({Statuscode:200,message:"Ok",data:records})
 }
const getStudentRecords= async (req,res) => {
    const {params:{studentId}}  = req
    const records = await RecordModel.find({studentId:studentId})
    return res.send({Statuscode:200,message:"Ok",data:records})
}


export const RecordController =  { issueRecords , getRecords ,deleteRecords ,getBookRecords , getStudentRecords }
