var rows3=5;
var output='';

for(let rows=1;rows<=rows3;rows++){
    for(let cols=1;cols<=rows;cols++){
        output +='*';
    }
    output += '\n';
}

console.log(output);