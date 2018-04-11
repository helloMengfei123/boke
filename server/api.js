//导入express框架
const express = require('express')
//导入路由
const router = express.Router()
//导入数据库文件
const db = require('./db.js')

// 获取某篇文章
router.get('/api/oo', (req, res) => {
    db.UserYang.findOne({age:13}, (err, doc) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(doc)
        }
    })
})
//登录
router.post('/api/login', (req, res) => {
    // let newAccount = new db.Login({
    //     userName : req.body.userName,
    //     password : req.body.password
    // });
    // console.log(newAccount)
    // 保存数据newAccount数据进mongoDB
    //注册
    // newAccount.save((err,data) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send('createAccount successed');
    //     }
    // });
    db.Login.findOne({userName:req.body.userName,password:req.body.password}, (err, doc) => {
        if (!doc) {
            res.status(400).send('userName undefined')
        } else {
            res.status(200).send(doc)
        }
    })
})
module.exports = router