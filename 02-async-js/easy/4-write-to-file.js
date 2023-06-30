const fs = require('fs')


data = "some random data here  part 2    !!!!!!!"


fs.writeFile('./test.txt' , data , err=>{
    if(err){
        console.error(err);
    }
} )

sum = 0 
for( let i = 0 ; i <1000000000; i++){
    sum+=i
}

console.log(sum)