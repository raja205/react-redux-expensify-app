const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name:'abcd',
            age:45
        })
        reject('error went wrong')
    },5000)
    
})
console.log('before')
promise.then((data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:'abcd',
                age:45
            })
            reject('error went wrong')
        },5000)
    })
}).then(()=>{
    console.log('hola')
}).catch((error)=>{
    console.log(error)
})
console.log('after')