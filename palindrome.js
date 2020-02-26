
function palindrome(kata) {
    // you can only write your code here!
    var isPalindrome = false;

    for(var i=0;i<kata.length;i++){
        
        if(kata[i] == kata[kata.length-(i+1)]){
            isPalindrome = true;
        }
        else
        {
            isPalindrome =false;
            break;
        }
    }

    return isPalindrome
  }

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false