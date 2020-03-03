function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerString = 'abcdefghijklmnopqrstuvwxyz'
  let result=''
  var isSame = false
  for(var i = 0; i<kalimat.length;i++){
    for(var j=0; j<upperString.length;j++){
        if(kalimat[i]==upperString[j]){
            result += lowerString[j]
            isSame = true
        }
        else if(kalimat[i]==lowerString[j]){
            result += upperString[j]
            isSame = true
        }
    }
    if(isSame==false){
        result += kalimat[i]
    }
    isSame = false
  }

  return result

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"