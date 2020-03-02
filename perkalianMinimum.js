function digitPerkalianMinimum(angka) {
  // you can only write your code here!

  let minimum = 1000
  var joinNum=''

  for(let i = 1;i<=angka;i++){
    if(angka % i ==0){
        var divNum = angka / i
        joinNum=(String(divNum) + String(i))
        if(joinNum.length < minimum){
             minimum = joinNum.length
        }
    }
  }

  return minimum

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2