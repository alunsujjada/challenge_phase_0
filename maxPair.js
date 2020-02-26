
function pasanganTerbesar(num) {
    // you can only write your code here!
    var pairNum
    var minNumber =0
    var numString = num.toString();
    for (var i = 0; i < numString.length-1; i++){
        pairNum = numString[i] + numString[i+1]
        if(pairNum > minNumber){
            minNumber = pairNum
        }
    }

    return minNumber
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99