var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {

    for(let index=0;index<data.length;index++){
        
        console.log('Nomor ID: ' + data[index][0])
        console.log('Nama: ' + data[index][1])
        console.log('TTL: ' + data[index][2]  + ',' + data[index][3])
        console.log('Hobi: ' + data[index][4])
        console.log('--------------------------')

    }
}

dataHandling(input)