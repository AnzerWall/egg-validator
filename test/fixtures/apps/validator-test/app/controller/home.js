/**
 * Created by anzer on 2017/3/1.
 */
module.exports = app => {
    return class extends app.Controller {
        *index(){
            this.ctx.body = 'hi, ' + app.plugins['validator'].name;
        }
    }
}