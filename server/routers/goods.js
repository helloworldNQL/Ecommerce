const express = require('express');

const Router = express.Router();

const { formatData } = require('../utils')

const { find } = require('../db/mongo');



// 查找所有商品
Router.get('/:id', async (req, res) => {
    // async & await 实现：用同步的代码实现异步操作
    // async * await 是ES7的知识
    let { id } = req.params;

    // console.log("--", id);
    // // console.log(_id);
    let data = await find('goods', { goodsid: id });
    res.send(data);
    // console.log(data);
    if(data.length>0){
        return res.send(formatData({code:250}))
    }
})
module.exports = Router;