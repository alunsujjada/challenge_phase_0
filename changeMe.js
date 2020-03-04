function changeMe(arr) {
    // you can only write your code here!
    var data={}
    var d = new Date()
    var now = d.getFullYear()
    for(var i = 0; i<arr.length;i++){
        data = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : arr[i][3]!=undefined && now > arr[i][3] ? now-arr[i][3] : 'Invalid Birth Year'
        }
        console.log(i+1 + '.' + data.firstName + ' ' + data.lastName + ':')
        console.log(data)
    }

    if(arr.length <= 0){
        console.log('\"\"')
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""