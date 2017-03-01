/**
 * Created by anzer on 2017/3/1.
 */
module.exports=Joi=>{
    return {
        index:{
            query:{
                num:Joi.number().required()
            }
        }
    }
}