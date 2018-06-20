'use strict'
console.log('JS -> Min Max');

function miniMaxSum(arr) {
    var min;
    var max;
    var arrFin = [];
    var sumArr = arr.reduce(function(prev, next){
        return prev + next;
    });
    arr.forEach(function(el, i){
        arrFin.push((sumArr - el));
        if(!min)
            min = arrFin[i];
        if(!max)
            max = arrFin[i];

        if(arrFin[i] < min)
            min = arrFin[i];

        if(arrFin[i] > max)
            max = arrFin[i];
    });
    return [min, max];
}

function main(ar) {
    console.log(ar);
    const arr = ar.split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

var arr2 = prompt('Defina o array:');

main(arr2);