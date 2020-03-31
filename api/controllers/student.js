import  {StudentModel} from '../models'

// const checkStudent= async (rollno,phone_no) => {
//     const book = await StudentModel.find(rollno,phone_no)
//     return book;
// }
const getStudent = async (req,res) => {
    const{ body } = req 
    const student = await StudentModel.find()
    return res.send({Statuscode:200,message:"Ok",data:student})
}

const createStudent = async (req,res) => {
        const {body,} = req
        const student = await StudentModel.create(body) 
        return res.send({Statuscode:200,message:"Created",data:{student}})
        }
//         return res.send({Statuscode:200,message:"Created",data:{type :'Bad Request '}})
// }

const updateStudents = async (req,res) => {
    const{body , params } = req
      const {id : _id} = params
      const student = await StudentModel.update({_id},({$set:body}))
    return  res.send({Statuscode:200,message:"Updated",data:student})    
}

const deleteStudents = async (req,res) => {
   const{body ,params} = req
    const {id : _id} =  params
    const student = await StudentModel.deleteOne({_id})
    return res.send({Statuscode:200,message:"Deleted",data:student})
}


export const StudentController = { getStudent, createStudent , updateStudents ,deleteStudents }
