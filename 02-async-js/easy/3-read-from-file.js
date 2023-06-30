const fs = require('fs');

function fileReading(err, data){

    if(err){
        console.log(err)
        return
    }

    console.log(data);

}

fs.readFile('./test.txt', 'utf-8' , fileReading)


sum = 0 
for( let i = 0 ; i <1000000000; i++){
    sum+=i
}

console.log(sum)



