function meleeRangedGrouping (str) {
    var ranged = []
    var melee = []
    var data=[]
    if(str.length==0){
        return data
    }
    
    var strSplit = str.split(',')
    for(var i=0;i<strSplit.length;i++){
        var dashSplit = strSplit[i].split('-')
        if(dashSplit[1]=='Ranged'){
            ranged.push(dashSplit[0])
        }
        else{
            melee.push(dashSplit[0])
        }
    }
    data.push(ranged)
    data.push(melee)
    
  //your code here
  return data
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []