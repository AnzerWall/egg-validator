/**
 * Created by anzer on 2017/3/1.
 */
module.exports=Joi=>{
    return {
        index:{
            queries: {
                num: Joi.array().items(Joi.number())
            }
        }
    }
}