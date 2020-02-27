function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var result=[[],[],[]]
    var inc0 = 0,inc1 = 0,inc2 =0
    for(var i = 0; i < arr.length;i++){
        if(arr[i] % 2 ==0 && arr[i] % 3 !=0){
            result[0][inc0]= arr[i]
            inc0++
        }

        else if(arr[i] % 2 !=0 && arr[i] % 3 !=0){
            result[1][inc1]= arr[i]
            inc1++
        }

        else if(arr[i] % 3 ==0){
            result[2][inc2]= arr[i]
            inc2++
        }

    }

    return result

  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]