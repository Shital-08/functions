//1. Create one function with zero parameter having a console statement.
function test(){
    console.log("Hello");
}
test();

//2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".
function add(a,b){
    console.log(a+b);
}
add(3,4);

//3. Create one arrow function.
let mul=(n) =>{
    n=n*10;
    console.log(n);
 }
 mul(20);

//Q4. Print output: 
var x = 21;
var c = function () {
    console.log(x);
    var girl = 20;
};
girl ();

//5. Print output:
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//6. Print output:
var x = 21;
a();
b();
console.log(a);
a = function() {

x = 20;
console.log(x);
}
b = function() {

x = 40;
console.log(x);
}

//7. Write a function that accepts parameter n and returns factorial of n.
function fact(n){
    let f=1;
    for(let i=1;i<=n;i++)
    f=f*i;
    return f;       
} 
fact(4);