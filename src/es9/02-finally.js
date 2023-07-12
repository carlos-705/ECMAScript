const anotherFunction = () => {
    return new Promise ((resolve,reject) =>{
        if(false){
            resolve('Hey!!');
        } else {
            reject('Bufff!!');
        }
    } )
    }
    
    anotherFunction()
        .then(response=>console.log(response))
        .catch(error =>console.log(error))
        .finally(() => console.log('Done!'))