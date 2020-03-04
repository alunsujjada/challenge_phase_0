function cariModus(arr) {
  var modusVal = []
  var countIsSame=0
  var countIsNotSame =0
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        modusVal.push(arr[i]);
        countIsSame++
      } 
      else{
        countIsNotSame++
      }
    }
  }

  return (modusVal[0] == undefined || (countIsSame > 0 && countIsNotSame == 0) ) ? -1 : modusVal[0];
  
}

// TEST CASES
console.log(cariModus([10, 10, 5, 5, 5])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1