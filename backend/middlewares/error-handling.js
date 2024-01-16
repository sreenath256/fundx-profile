const {constants} = require('../constants')
const errorHandling = (err,req,res,next)=>{
    const statusCode = res.statusCode?res.statusCode:500;
    switch(statusCode){
        case constants.FORBIDDEN:res.json({title:"Forbidden",message:err.message,stackTrace:err.stack});break;
        case constants.NOT_FOUND:res.json({title:"Not found",message:err.message,stackTrace:err.stack});break;
        case constants.SERVER_ERROR:res.json({title:"Server error",message:err.message,stackTrace:err.stack});break;
        case constants.UNAUTHERIZED:res.json({title:"Un Autherized",message:err.message,stackTrace:err.stack,user:false});break;
        case constants.VALIDATION_ERROR:res.json({title:"Validation failed",message:err.message,stackTrace:err.stack});break;
        default:console.log(err.message);break;
    }

}

module.exports=errorHandling