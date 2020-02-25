function xo(str) {
    // you can only write your code here!
    let numO =0;
    let numX =0;

    for(let index=0;index<str.length;index++){
        if(str[index]=='x'){
            numX++;
        }
        else{
            numO++;
        }
    }

    if(numO==numX){
        return true;
    }
    else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true