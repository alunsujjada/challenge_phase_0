function sorting(arr) {
    // code di sini
    var changeVal
    for(var i=0;i<arr.length;i++){
        for (var j=0;j<arr.length;j++){
            if(arr[i] < arr[j]){
                changeVal = arr[i]
                arr[i] = arr[j]
                arr[j] = changeVal
            }
        }
    }
    return arr
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length==0){
        return `''`
    }
    var total = 0
    for(var i=0;i<arrNumber.length;i++){
        if(arrNumber[i]==arrNumber[arrNumber.length-1]){
            total++
        }
    }

    return `angka paling besar adalah ${arrNumber[arrNumber.length-1]} dan jumlah kemunculan sebanyak ${total} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''