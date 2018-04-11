//导入mongoose
const mongoose =require('mongoose')
//导入表
const Schema = mongoose.Schema;
//链接数据库
mongoose.connect('mongodb://127.0.0.1/myDemo');
//获取到数据库中的数据
const db = mongoose.connection;

//使用Schema的构造方法新建一个Schema的实例
const userSchema = new Schema({
   userName:String,
   age:Number
})
const loginSchema = new Schema({
    userName:String,
    password:String,
 })
//创建model,进行增删改查,就相当于一个构造函数
const Models = {
    UserYang:mongoose.model('UserYang', userSchema ),
    Login:mongoose.model('Login', loginSchema ),
}
// 初始化数据
const initialize = () => { 
    Models.UserYang.remove({userName: 'boss', age: 13}, (err, doc) => {
       if (err) {
           console.log(err)
       } else if (!doc.length) {
           // 第一次创建站长账户
           //   new UserYang({userName: 'boss', age: 12}).save()
       } else {
           console.log('initialize successfully')
       }
   })
   
}

//链接失败
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//连接成功
db.once('open', () => {
//    new  Models['Login']({userName: 'admin', password:'123abc'}).save()
//    new  Models['UserYang']({userName: 'boss', age: 12}).save()
   initialize()    
});
module.exports = Models




