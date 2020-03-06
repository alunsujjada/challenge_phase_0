function changeVocals (str) {
  //code di sini
  var key = 'abijuvefop'
  var result = ''
  var isFound = false
  for(var i = 0; i < str.length;i++){
    for(var j = 0; j < key.length;j=j+2){
        if(str[i]==key[j]){
            result += key[j+1]
            isFound = true
        }
        else if(str[i]==key[j].toUpperCase()){
            result += key[j+1].toUpperCase()
            isFound = true
        }
    }

    if(isFound==false){
        result += str[i]
    }
    isFound=false
  }
  return result
}

function reverseWord (str) {
  //code di sini
 var result=''
  for(var i=0;i<str.length;i++){
    result += str[(str.length-1)-i]
  }
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  var result =''
  for(var i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        result += str[i].toLowerCase();
      }
    else{
        result += str[i].toUpperCase()
    }
  }
  

  return result
}

function removeSpaces (str) {
  //code di sini
  var result=''
  for(var i=0;i<str.length;i++){
      if(str[i]!=' '){
          result += str[i]
      }
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
