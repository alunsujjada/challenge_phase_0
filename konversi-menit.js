function konversiMenit(menit) {
  // you can only write your code here!
  let hours=0;
  let minutes =0;

  if(menit < 60){
    minutes = menit;
    hours = 0;
  }
  else{
      hours = parseInt(menit/60);
      minutes = menit % 60 + '';
  }

  if(minutes.length==1){
      minutes = '0' + minutes;
  }
  
  return `${hours} : ${minutes}`;

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00