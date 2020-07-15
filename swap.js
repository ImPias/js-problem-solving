// Swap with Temp variable
var a = 5;
var b = 8;
console.log("Before swap: a = ", a, ", b = ", b);
var temp = a;
a = b;
b = a;
console.log("After swap: a = ", a, ", b = ", b);

// Swap without Temp variable
p = 3;
q = 6;
console.log("Before swap: p = ", p, ", q = ", q);
p = p + q;
q = p - q;
p = p - q;
console.log("After swap: p = ", p, ", q = ", q);

// Swap using function
x = 9;
y = 2;
console.log("Before swap: x = ", x, ", y = ", y);
[x, y] = [y, x];
console.log("After swap: x = ", x, ", y = ", y);