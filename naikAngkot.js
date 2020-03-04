function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if(arrPenumpang.length==0){
        return arrPenumpang
        exit()
    }

    var posAwal=0
    var posAkhir = 0
    var result =[]
    var data = {}
    for(var i=0;i<arrPenumpang.length;i++){
        for(var j=1;j<arrPenumpang[i].length;j++){
            for(var k=0;k<rute.length;k++){
                if(arrPenumpang[i][j]==rute[k] && j ==1){
                    posAwal = k
                }
                else if(arrPenumpang[i][j]==rute[k] && j ==2){
                    posAkhir = k
                }
            }
        }

        data = {
            penumpang : arrPenumpang[i][0],
            naikDari :  arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : 2000 * (posAkhir - posAwal)
        }
        
        result.push(data)
    }

    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]