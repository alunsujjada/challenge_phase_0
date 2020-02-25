

function balikString(kata){
    let result=''
    for(let index=1;index<=kata.length;index++){
        result += kata[kata.length-index]

    }
    return result;
}

console.log(balikString('Hello World'))