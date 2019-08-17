const express = require('express');

const Router = express.Router();

const { formatData } = require('../utils')

const {find, insert,update,delet} = require('../db/mongo');



// 查找所有商品
Router.get('/:id', async (req, res) => {
    // async & await 实现：用同步的代码实现异步操作
    // async * await 是ES7的知识
    let { id } = req.params;

    // console.log("--", id);
    // // console.log(_id);
    let data = await find('goods', { goodsid: id });
    if (data.length > 0) {
        res.send(data);
    } else {
        return res.send(formatData({ code: 250 }))
    }
})

//加入购物车
//查用户名
Router.post('/addcart', async (req, res) => {
    // console.log(req.body);
    //查找用户名，如存在，数量加
    let { goodsid, username } = req.body;
    let result = await find('orders', { goodsid, username });
    if (result.length > 0) {
        //购物车已有商品 修改商品数量
        let { number, goodsprice
        } = result[0];
        number++;
        let data = await update('orders', {
            goodsid: goodsid,
            username: username
        }, {
                number: number,
                total: number * goodsprice
            });
        console.log(total)
        if (data.result.n == 1) {
            res.send(formatData({
                code: 200,
                msg: 'update success'
            }))
        } else {
            res.send(formatData({
                code: 250,
                msg: 'update fail'
            }))
        }
    } else {
        //购物车没有商品
        let data = await insert('orders', req.body);
        res.send(formatData({ code: 200 }))
    }
})
//查看用户的购物车信息
Router.post('/cart', async (req, res) => {
    // console.log(req.body);
    //查找用户名，如存在，数量加
    let { username } = req.body;
    let result = await find('orders', { username });
    if (result.length > 0) {
        //购物车已有商品 修改商品数量
        res.send(result);
    } else {
        //购物车没有商品
        res.send(formatData({ code: 200 }))
    }
})
//修改数量
Router.post('/update', async (req, res) => {
    // console.log(req.body);
    //查找用户名，如存在，数量加
    let { goodsid, username, number, goodsprice } = req.body;
    console.log(goodsid, username, number, goodsprice);
    let data = await update('orders', {
        goodsid: goodsid,
        username: username
    }, {
        number: number,
        total: number * goodsprice
    });
    if (data.result.n == 1) {
        let result = await find('orders', { username });
        console.log(result);
        res.send(result);
    } else {
        res.send(formatData({
            code: 250,
            msg: 'update fail'
        }))
    }
})
//删除购物车商品
Router.post('/del', async (req, res) => {
    let result = await delet('orders', req.body);
    console.log(result);
    if (result.length > 0) {
        res.send(formatData({ code: 250 }))
    } else {
        let data = await find('orders', { username });
        res.send(data);
    }
})
module.exports = Router;