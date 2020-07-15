function getArrayTotal(list){
    var sum = 0;
    for(var i = 0; i < list.length; i++){
        sum = sum + list[i];
    }
    return sum;
}
var result = getArrayTotal([12, 32, 34, 45, 118, 78, 12, 54, 76, 87, 99, 100])
console.log("Total: ", result);
var list = [12, 43, 54, 56, 67, 99];
var total = getArrayTotal(list);
console.log("Total: ", total);