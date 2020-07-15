var list = [12, 32, 34, 45, 118, 78, 12, 54, 76, 87, 99, 10]
var max = list[0];
for(var i = 1; i < list.length; i++){
    if(list[i] > max){
        max = list[i];
    }
}
console.log(max);