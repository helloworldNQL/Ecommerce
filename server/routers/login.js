const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');
const {formatData,token} = require('../utils')

Router.post('/',async (req,res)=>{
    let {username,password} = req.body;
    let result = await find('users',{username,password});
    if(result.length>0){
        // 生成token，并返回客户端
        let Athorization = token.create(username);
        // res.set('Athorization', Athorization);
        res.send(formatData({data:Athorization}))
    }else{
        res.send(formatData({code:250}))
    }
})
module.exports = Router;