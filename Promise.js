var fs = require('fs');
//1. var promise = new Promise(function(){
//     //这个function内部写的就是具体的异步操作过程
//     fs.readFile('./1.txt','utf-8',(err,dataStr)=>{
//         if(err) throw err
//         console.log(dataStr)
//     })
// })
// function getFilePath(fpath){
//     var promise = new Promise(function(resolve,reject){
//     //这个function内部写的就是具体的异步操作过程
//     fs.readFile(fpath,'utf-8',(err,dataStr)=>{
//         if(err) return  reject(err)
//         resolve(dataStr)
//     })
// })
//     return promise
// }
// var p = getFilePath('./1.txt')
// p.then(function(data){
//     console.log(data)
// },function(err){
//     console.log(err)
// })
function getFilePath(fpath){
    return new Promise(function(resolve,reject){
    //这个function内部写的就是具体的异步操作过程
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return  reject(err)
        resolve(dataStr)
    })
})
}
getFilePath('./1.txt')
    .then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})