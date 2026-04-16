
let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Data connected")
    }
    else{
        reject("Data Rejected")
    }
})


useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
//.then(data=>console.log(data))
.then(data => {
    data.forEach(i => {
        console.log(i.name);      
    });


})
.catch(error=>console.log(error))
//there will be multiple then but only one catch.
},[])




