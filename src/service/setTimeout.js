function timeOut(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

async function wait(){
    await timeOut(2000)
}

export {wait}