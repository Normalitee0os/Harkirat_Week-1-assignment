const fs = require('fs')

function removeSpace(err,data){
    if (err){
        console.log(err)
        return
    }
    removeSpaceregex = /\s+/g
    data = data.replace(removeSpaceregex, ' ')
    console.log(data)
}


fs.readFile('./test.txt' , 'utf-8' , removeSpace)