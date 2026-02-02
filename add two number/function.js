// greet("User");
// function greet(name){
   //console.log("Hello"+name); 
//    console.log(`Hello ${name}`);

// }
//normal function are following the hoisting property. we can call function before declartion



//---------------function as expression
const factorial = function(n) //annoymous function
{
    if(n==0||n==1)
        return 1
    else return n*factorial(n-1);
}
console.log(factorial); //it tell function call
console.log(factorial(5));