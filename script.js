// // var let const

// // let a = 10; {
// //     let a = 20;
// //     console.log("Inside:", a);
// // }
// // console.log("Outside:", a);
// // 
// //Datatype+Type system


// // let u1 = Symbol("uid");
// // let u2 = Symbol("uid");

// // let a = 181716

// // operetor

// // + - * /  %  ** =  == 

// // ===
// // let m = 10;
// // console.log(m--);
// // console.log(m);


// // let n = 5;
// // let result = n++ + ++n;
// // console.log(result);

// // Control flow


// // if else else-if ===1


// // if (12<15){
// //     console.log("12 is less than 15");
// // } else {
// //     console.log("12 is not less than 15");
// // }

// // if (12>13){
// //     console.log("12 is greater than 13");
// // }
// // else if (12>14){
// //     console.log("12 is greater than 14");

// // }
// // else if (12<15){
// //     console.log("12 is less than 15")


// // switch case ===2

// // switch (1) {
// //     case 1:
// //         console.log(" case 1");
// //         break;

// //     case 2:
// //         console.log("case 2");
// //         break;
// //     case 3:
// //         console.log(" case 3");

// //     default:
// //         // console.log("No match found");
// // }



// // early return pattern ===3

// // function getVal(val){
// //     if(val<100) return 'D';
// //     else if(val<200) return 'C';
// //     else if (val<300) return 'B';
// //     else return 'A';

// // }
// // console.log(getVal(45));


// // function 

// // function dance() {
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");
// //     console.log("I am dancing");

// // }
// // dance();
// // dance();
// // dance();
// // dance();
// // dance();

// // fat arrow fnc 
// // function outer (){
// // let count = 0;
// // return function (){
// //     count++;
// //     console.log(count);
// // };
// // }
// // const counter = outer();
// // counter();
// // counter();
// // counter();
// // counter();
// // counter();




// // let obj = {
// //     name: "raj",
// //     age: 21,
// //     email: "raj@gmail.com",
// //     address: {
// //         city: "Lucknow",
// //         state: "UP",
// //         country: "India"
// //     },
// //     hobbies: ["coding", "gaming", "traveling"]
// //     }

// //     obj.name = "raj";


// // dom 



// // let h1 = document.querySelector("h1");
// // h1.style.color = "red";
// // h1.style.backgroundColor = "yellow";
// // h1.style.fontFamily = "Arial, sans-serif";
// // h1.style.padding = "10px";
// // console.dir(h1);


// // What is the dom ? how    to access the dom ?

// // DOM stands for Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (like elements, attributes, and text). The DOM allows developers to manipulate the content, structure, and style of a web page dynamically using JavaScript.


// // let p = document.querySelector("p");
// // p.addEventListener("click", function() {
// //     p.style.color = "blue";
// //     p.style.fontSize = "20px";
// //     p.style.fontWeight = "bold";
// //     p.style.backgroundColor = "lightgray";
// // });


// // let p = document.querySelector("p");
// // function dbclick(){
// //     p.style.color = "blue";

// // }
// // p.addEventListener("dblclick", dbclick);
// // p.removeEventListener("dblclick", dbclick);

// // let inp = document.querySelector("input");
// // inp.addEventListener("input", function(dets){
// //     if (dets.data == null){
// //         console.log(dets.data);
// //     }
// // })


// // let sel = document.querySelector("select");
// // sel.addEventListener("change", function(dets){
// //     console.log(dets);
// // })



// // let form =document.querySelector("form");
// // let input = document.querySelector("input");
// // form.addEventListener("submit", function (dets) {
// //     dets.preventDefault();
// //     console.log(input.value);
// // })



// // form 

// // let name = document.querySelector("#name");
// // let email = document.querySelector("#email");
// // let password = document.querySelector("#password");
// // let form = document.querySelector("form");

// // form.addEventListener("submit", function (dets) {
// //     dets.preventDefault();
// //     let user = {
// //         name: name.value,
// //         email: email.value,
// //         password: password.value    }
// //     console.log(user);
// //     })

// let form = document.getElementById("signupForm");

// form.addEventListener("submit", function(e){

//   e.preventDefault(); // page reload rokta hai

//   let username = document.getElementById("username").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let password = document.getElementById("password").value.trim();
//   let confirmPassword = document.getElementById("confirmPassword").value.trim();

//   let valid = true;

//   // Clear old errors
//   document.querySelectorAll(".error").forEach(el => el.innerText = "");

//   // Username validation
//   if(username.length < 3){
//     document.getElementById("userError").innerText = "Username must be at least 3 characters";
//     valid = false;
//   }

//   // Email validation (Regex)
//   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if(!emailPattern.test(email)){
//     document.getElementById("emailError").innerText = "Invalid Email";
//     valid = false;
//   }

//   // Password validation
//   if(password.length < 6){
//     document.getElementById("passError").innerText = "Password must be at least 6 characters";
//     valid = false;
//   }

//   // Confirm password check
//   if(password !== confirmPassword){
//     document.getElementById("confirmError").innerText = "Passwords do not match";
//     valid = false;
//   }

//   if(valid){
//     alert("Registration Successful 🎉");
//   }

// });








