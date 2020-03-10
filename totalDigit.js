function totalDigitRekursif(angka) {
  // you can only write your code here!
  var total = 0
  if(angka == 0){
      return total
  }
  else{
    var sisa = angka % 10
    var bagi = Math.floor(angka/10)
    total += sisa
    return total + totalDigitRekursif(bagi)
  }
}

// TEST CASES
console.log(totalDigitRekursif(51230)); // 8
console.log(totalDigitRekursif(15429)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5