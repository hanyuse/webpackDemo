

let promise = new Promise((resolve,rejects)=>{
    resolve(1);
})

promise.then(_=>{
    console.log(_)
})