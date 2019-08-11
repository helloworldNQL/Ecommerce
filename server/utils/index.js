const token = require('./token');

exports.formatData = (obj={})=>{
    // code: 200=>成功，250=>失败
    let {data=[],code=200,msg='success'} = obj;

    if(code === 250 && !obj.msg){
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}

exports.token = token;//{create,verify}

