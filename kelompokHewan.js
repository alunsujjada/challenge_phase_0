function groupAnimals(animals) {
    // you can only write your code here!
    var result =[]
    var temp =[]
    var hurufAwal = 'abcdefghijklmnopqrstuvwxyz'
    for(var j=0;j<hurufAwal.length;j++) {
        
        for(var i=0;i<animals.length;i++){

            if(hurufAwal[j]==animals[i][0]){
                
               temp.push(animals[i]);
            }
        }
       
        if(temp.length>0){
            result.push(temp)
            temp =[]
        }
        
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]