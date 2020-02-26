function angkaPalindrome(num) {
    // you can only write your code here!
    var isNotFound=true
    if(num < 9){
        return num + 1
        
    }
    else
    {
        while(isNotFound){
            num++
            var numStr= String(num)
            var isPalindrome = false;
            for(var i=0;i<numStr.length;i++){
                
                if(numStr[i] == numStr[numStr.length-(i+1)]){
                    isPalindrome = true;
                }
                else
                {
                    isPalindrome =false;
                    break;
                }
            }

            if(isPalindrome==true){
                isNotFound =false
                return numStr
            }
        }

    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(6)); // 7
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(2541)); // ??