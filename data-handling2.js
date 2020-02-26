
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){
    var result=''
    var shortName = input[1].trim()
    input[1] = input[1] + 'Elsharawy'
    input[2] = 'Provinsi ' + input[2]
    input.splice(4,0,'Pria','SMA Internasional Metro')
    input.pop()
    console.log(input)
    var fullDate = input[3]
    var month = fullDate.split('/')
    console.log(getStringMonth(month[1]))
    var monthFormat = []
    monthFormat.push(month[2],month[1],month[0])
    console.log(monthFormat)
    var dashMonth = `${month[0]}-${month[1]}-${month[2]}`
    console.log(dashMonth)
    console.log(shortName)
}

function getStringMonth(month){
    switch (month){
        case '01' :
            return 'Januari'
            break
        case '02' :
            return 'Februari'
            break
        case '03' :
            return 'Maret'
            break
        case '04' :
            return 'April'
            break
        case '05' :
            return 'Mei'
            break
        case '06' :
            return 'Juni'
            break
        case '07' :
            return 'Juli'
            break
        case '08' :
            return 'Agustus'
            break
        case '09' :
            return 'September'
            break
        case '10' :
            return 'Oktober'
            break
        case '11' :
            return 'November'
            break
        case '12' :
            return 'Desember'
            break
        default :
            return 'Wrong date format!'
    }
}


dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */