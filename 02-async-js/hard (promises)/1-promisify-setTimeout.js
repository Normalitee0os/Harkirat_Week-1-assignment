/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => {
        setTimeout(()=>{
        resolve('YAAAY RESOLVED')
        }, 1000*n)
    })
}

object = wait(4)
object.then((data)=> {
    console.log(data)
})