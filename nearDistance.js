function targetTerdekat(arr) {
  // you can only write your code here!
  var isValid = false
  var jarak=arr.length
  var posO = []
  var posX = []

  for(var i=0; i<arr.length; i++){
    if(arr[i]=='x'){
      posX.push(i)
      isValid =true
    }
    else if(arr[i]=='o'){
      posO.push(i)
    }
  }

  if(isValid){
    for(var i=0; i<posX.length; i++){
      //jarak.push(Math.abs(posO[0]-posX[i]))
      if(Math.abs(posO[0]-posX[i])< jarak){
          jarak = Math.abs(posO[0]-posX[i])
      }
    }
  }
  else{
    jarak =0
  }
  return jarak
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', ' ', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2