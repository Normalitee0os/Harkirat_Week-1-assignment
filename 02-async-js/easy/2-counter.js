
function counter(i){
    setTimeout(()=>{
        console.log(i)
       counter(i+1)
    },1000)
}
counter(1)