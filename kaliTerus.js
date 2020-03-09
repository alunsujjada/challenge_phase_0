function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strNum = String(angka)
    var totalMultiply =1
    if(strNum.length==1){
        return totalMultiply * angka
    }
    else{
        var getNum = strNum.split('')
        for(var i=0;i<getNum.length;i++){
            totalMultiply *= parseInt(getNum[i])
        }

        var strNum = String(totalMultiply)
        if(strNum.length >=1){
            return kaliTerusRekursif(totalMultiply)
            
        }
        
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6