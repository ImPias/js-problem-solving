var sentance = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common.";
var count = 1;
for(var i = 0; i < sentance.length; i++){
    if(sentance[i] == " " && sentance[i-1] != " "){
        count++;
    }
}
console.log(count);