function meleeRangedGrouping (str) {
    var ranged = []
    var melee = []
    var data=[]
    var words =''
    var groups =''
    var isWord = false

    if(str.length==0){
        return data
    }
    
    for(var i=0;i<str.length;i++){
        if(str[i] !='-' && str[i] !=',' && isWord == false){
            words += str[i]
        }
        else if(str[i]=='-'){
            isWord = true   
        }

        if(isWord==true && str[i]!='-'){
            groups += str[i]
            if(groups=='Ranged'){
                ranged.push(words)
                groups=''
                words =''
                isWord=false
                

            }
            else if(groups=='Melee'){
                melee.push(words)
                groups=''
                words =''
                isWord = false
            }
        }
    }

    data.push(ranged)
    data.push(melee)

    return data
}

// TEST CASE

 console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

 console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

 console.log(meleeRangedGrouping('')); // []


    
    
 