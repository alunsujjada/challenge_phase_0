function ubahHuruf(kata) {
    // you can only write your code here!
    var words = 'abcdefghijklmnopqrstuvwxyz'
    var result=''
    for(let i=0;i<kata.length;i++){
        for(let j=0;j<words.length;j++){
            if(kata[i]==words[j]){
                result += words[j+1]
            }
        }
    }

    return result

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu