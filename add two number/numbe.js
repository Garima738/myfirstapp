// let a = 5;
// let b = 10;

// let sum = a + b;
// console.log(sum);


//let,var,cons----->


// {let a=10,b=10;}
// console.log(a+b);



// {var a=10,b=10;}
// console.log(a+b);



// var a = 10;
// console.log(a);
//  a= 20;
// console.log(a);

// let b = 10;
// console.log(b);
//  b= 20;
// console.log(b);

// console.log(b); //error
// let  b= 20;

// console.log(c); 
// var  c= 20;

// console.log(d); 
// const d= 20;


// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }

// console.log(sum); 

// let name = "Garima";

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }


// console.log(5=='5');
// console.log(5==='5');

// let i;
// for ( i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;   
//     }
//     console.log(i);
// }


// let num = 10;
// let str = 'hello';
// let arr = [1,2,3];
// let obj ={name:"Robin",age:10};
// let a;

// let emp = null;
// let isok = true;

// console.log(typeof num);  // number
// console.log(typeof str);  // string
// console.log(typeof arr);  // object  
// console.log(typeof obj);  // object (key value pair);
// console.log(typeof a);    // undefined
// console.log(typeof emp);// object  
// console.log(typeof isok);   //boolean



//  function add(a, b) {
//     return a + b;

//  }

//  let result = add(5, 10);
//  console.log(result); 

// function greet(){
//     console.log("Hello"); 

// }

// greet(); 






// let arr = [1,2,4,5,6,8];
// let i;
// for( i=0;i<6;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// const person ={key:"Hello"};
// console.log(person.key);
// person.key = "Bye";
// console.log(person.key);


// const arr = ["HTML","CSS","JS"];
// console.log(arr);
// arr.push("Python");
// console.log(arr);


// const sales = "Toyota";
// function carType(name){
//    return name ==="Honda"? name:"Sorry we don't sell the car";
// }
// const car = {carn:"City",getCar:carType("Honda"),Special:sales}

// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special)


//--------For EACH----------
// const color = ["Red","Black","White"];
// color.forEach((i)=>console.log(i));  //i collect value and hold it;

//---add 3 value to each number of array--------

// const arr = [1,2,3,4,5];
// arr.forEach((i,a)=>{ //i for value and a for index
//     console.log(i);
//    arr[a] = i+3;
// })
// console.log(arr);

//----------FOR IN   if we want to use for object--------

//  const color = ["Red","Black","White"];
//  color.forEach((i)=>console.log(i)); 
//  for(const i in color){   //i for index 
//     console.log(i,color[i]);
//  }


//--------add 3 to array using for in loop------
// const arr = [1,2,3,4,5];
// for(const i in arr){
//     arr[i]=arr[i]+3
// }
// console.log(arr);




// const user ={name:"Rabins",age:25,Hobby:"Coding"}; //user.index compare to name,age,hooby
// for(const index in user){
//     console.log(index,user[index]);  
// }


//-----FOR OF if we want to work on array
// const language = ["HTML","CSS","JS"]
// for(const i of language){  //i is not for index it directly stores the value at the index
//     console.log(index,user[index])

// }

//--------------note : for in for index and for of for value-------------


//-------------React---------------

//react is a library of js 
// node js npm---node package manager(if need functionality we need to download it using npm)
//npx create-react-app FirstApp (slower and heavier)
//npm
//  create vite@latest(faster and lighter)
