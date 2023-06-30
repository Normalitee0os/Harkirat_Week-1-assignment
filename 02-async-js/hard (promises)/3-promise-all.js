/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve('resolved in 1 second')
        },1000)
    })
}

function waitTwoSecond() {
    
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve('resolved in 2 second')
        },2000)
    })
}


function waitThreeSecond() {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve('resolved in 3 second')
        },3000)
    })
}

function resolveAllPromises(){


    return Promise.all([waitOneSecond(), waitTwoSecond() ,waitThreeSecond()])
}


async function  calculateTime() {

    const start = Date.now()
    await resolveAllPromises().then((values)=>{
        console.log(values)
    })
    const end = Date.now()
    console.log(end-start)
}

calculateTime()