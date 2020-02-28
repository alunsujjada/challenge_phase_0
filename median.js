function cariMedian(arr) {
    // you can only write your code here!
    var dummy
    for(var i = 0; i < arr.length;i++){
        for(var j = 0; j < arr.length;j++){
            if(arr[i] < arr[j]){
                dummy = arr[i]
                arr[i] = arr[j]
                arr[j] = dummy
            }
        }
    }

    var index = arr.length / 2
    if(arr.length % 2 ==0){
        
        return (arr[index]+arr[index-1]) /2
    }
    else{
        return arr[Math.floor(index)]
    }
   
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  console.log(cariMedian([1, 3, 4, 5])); // 7.5