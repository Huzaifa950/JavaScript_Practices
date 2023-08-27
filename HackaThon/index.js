// // console.log("Revision Hackathon");
// // console.log(`Class_1: 
// //             Strings, Numbers, Variables, Constants,
// //             Mathematical Calculations, Template Literals`);

// //Question 1
// // console.log(`Q1
// //         Create a variable without assigning any
// //         value to find & check it's value`);

// // let name;
// // console.log(name);

// //Question 2
// // console.log(`Q2
// //             Create a variable assign a string value to it
// //             then again assign it with value of type number
// //             the assign again with value of type number then
// //             assign again with value of type boolean
// //             and print end result`);

// // let name = 'Huzaifa';
// // name = 33;
// // name = true;
// // console.log(name);

// //Question 3
// // console.log(`Q3
// //                 Create a variable with let keyword and
// //                 then declare the same variable with const keyword`);

// // let age = 33;
// // const age = 33;
// // console.log(age);

// //Question 4
// console.log(`Q4
//             Create a variable with let keyword and
// // //          then declare the same variable with let keyword`);
// // let age;
// // let age;
// // console.log(age);

// //Question 5

// // let name = 'Huzaifa';
// // let age = 22;

// // console.log("Add Number to Number", age+age);
// // console.log("Add String to String", name+name);
// // console.log("Add String to Number", name+age);


// //Question 6

// // let name = 'Salman';
// // let age = 24;
// // let Pass = true;

// // console.log("Add Num , String & Boolean", age+name+Pass);
// // console.log("Add Boolean ,Num & String", Pass+age+name);         // Trick
// // console.log("Add String, Num & Boolean", name+age+Pass);
// // console.log("Add string,boolean,num", name+Pass+age);


// //Question 7
// let username = 'Ahmad';
// let age = 33;
// console.log(`My name is ${username} and I am ${age} years old`);         //Template Literals


// //Question 8
// let name = 'Ali';
// let age = 25;
// console.log(typeof(name));
// console.log(typeof(age));


// // Question 9

// const arr1 = [1,2,3,4,5,6,7,8,9,10];

// arr1.pop();
// arr1.push(23);
// arr1.push(25);

// console.log(arr1.length);
// arr1.splice(7,1);
// console.log(arr1);


// Question 10
// const intro = {
//     name:'Ali',
//     age:"23",
// }
// intro.email = 'abc@xyz.com';
// intro.age=true;

// const copy = {...intro};              //Spread Operator makes copy of object
// delete copy.name;

// console.log(intro);
// console.log(copy);

// //Question 11

// function Temperature(temp)
// {
//     if(temp >= 40)
//     {
//         // console.log("AC is Required");
//         return 'AC is Req';
//     }
//     else if(temp<=5)
//     {
//         // console.log("Heater is Required");
//         return 'Heater is Req';
//     }
//     else{
//         // console.log("Weather Seems Cool");
//         return 'Weather Seems Cool';
//     }
// }
// console.log(Temperature(45));

// // Using Function ShortHand
// let Temperature = (temp)=>{
//     if(temp >= 40)
//     {
//         // console.log("AC is Required");
//         return 'AC is Req';
//     }
//     else if(temp<=5)
//     {
//         // console.log("Heater is Required");
//         return 'Heater is Req';
//     }
//     else{
//         // console.log("Weather Seems Cool");
//         return 'Weather Seems Cool';
//     }
// }
// console.log(Temperature(45));



// //Question 12
// function nameAndAge(name, age)
// {
//     if((name[0]==='A') |(name[0] ==='a') & age>15)
//     {
//         return 'Person name with along with its age';
//     }
//     else if(name[0]==='X' & age === undefined)
//     {
//         return 'Unknown Data';
//     }
//     else if(name.length===10 | age> 0)
//     {
//         return 'Name contains 10 letters';
//     }
//     else{
//         return 'Data is Faulty';
//     }
// }

// console.log(nameAndAge('Ahmad', 30));



// //Question 13


// // // Left Triangle
// var triangle = "";

// for (var i = 1; i <= 5; i++) 
// {
//   for (var j = 1; j <= i; j++) 
//   {
//     triangle += "*";
//   }
//   triangle += "\n";
// }
// console.log(triangle);




// // Right Triangle
// var length1 = 5;
// var triangle1 = "";

// for (var i = 1; i <= length1; i++) {
//   var spaces = " ".repeat(length1 - i);
//   var asterisks = "*".repeat(i);
//   triangle1 += spaces + asterisks + "\n";
// }

// console.log(triangle1);



// // Triangle
// let length2 = 5;
// var triangle2 = "";

// for (var i = 1; i <= length2; i++) {
//   var spaces = " ".repeat(length2 - i);
//   var asterisks = "*".repeat(2 * i - 1);
//   triangle2 += spaces + asterisks + "\n";
// }

// console.log(triangle2);
 
// const add = (a,b) => {return a+b;}

// const calculate = (a,b, callBack)=>{
//     const c = a*b;

//     return callBack(c,10);
// }

// console.log(calculate(1,5,add));



// Asynchronous Function******************************************************************************************
function printName()
{
    console.log("Info")
}

console.log("Start");
setTimeout(printName, 3000);                   //setTimeout is an Asynchronous function
setTimeout(()=> console.log('3000 milliseconds'), 3000);                   //setTimeout is an Asynchronous function

console.log("After TimeOut");















