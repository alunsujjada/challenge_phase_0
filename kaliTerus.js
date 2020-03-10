function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var total =1
    var strNum = String(angka)
    if(strNum.length ==1){
        return angka
    }
    else{
        
        for(var i=0;i<strNum.length;i++){
            total *= Number(strNum[i])
        }
        
        return kaliTerusRekursif(total)
        
       
        
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(666)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6