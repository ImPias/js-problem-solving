var list = [2, 3, 5, 3, 2, 1, 4, 7, 8, 9, 6, 2];
var unique = [];
for(var i = 0; i < list.length; i++){
    var element = list[i];
    var isExist = unique.indexOf(element);
    if(isExist == -1){
        unique.push(element);
    }
}
console.log(unique);