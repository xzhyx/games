var fs = require('fs');

function getFilePath(fpath){
    return new Promise(function(resolve,reject){
    //这个function内部写的就是具体的异步操作过程
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return  reject(err)
        resolve(dataStr)
    })
})
}

//需求：先读取文件一，在读取文件二，最后读取文件三
// getFilePath('./1.txt').then(function(data){
//     console.log(data)
//     getFilePath('./2.txt').then(function(data){
//         console.log(data)
//     })
//     getFilePath('./3.txt').then(function(data){
//         console.log(data)
//     })
// })


//读取文件一
getFilePath('./3.txt').then(function(data){
             console.log(data)

             //读取文件二
             return getFilePath('./2.txt')
         }).then(function(data){
            console.log(data)

            //读取文件三
            return getFilePath('./1.txt')
         }).then(function(data){
            console.log(data)
         })