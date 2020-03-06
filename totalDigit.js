function totalDigitRekursif(angka) {
  // you can only write your code here!
  var total = 0
  var stringNum = String(angka)
  if(stringNum == '0'){
      return total
  }
  else{
      var getNum = stringNum.split('')
      total += parseInt(getNum[0])
      getNum.shift()
      angka = getNum.join('')
      var nextNum = Number(angka)
      return total + totalDigitRekursif(nextNum)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5