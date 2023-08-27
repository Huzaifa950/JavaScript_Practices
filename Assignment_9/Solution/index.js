
//**************************************** NAME ---> M.HUZAIFA ************************************************


//Task__1
// Resp=async()=>{
//     let res = await fetch("https://reqres.in/api/users?page=1");
//     console.log(await res.json());
// }
// Resp();




//Task__2
// Resp=async()=>{
//     let res = await fetch("https://reqres.in/api/users?page=1");
//     let resJson = await res.json();
//     let res1 = await fetch("https://reqres.in/api/users?page=2");
//     let res1Json = await res1.json();
//     let arr = [resJson, res1Json];
//     console.log(arr);
// }
// Resp();




//Task__3
// let data;
// let format;
// child2=async(data)=>{
//     // console.log('/n I am in Child 2 Func /n');
//     format = await data.json();
//     console.log(format);
//     // console.log('/n Child 2 End/n');
// }
// child1=async()=>{
//     // console.log('/n I am in Child 1 Func /n');
//     data = await fetch(" https://reqres.in/api/users?page=1");
//     child2(data);
//     // console.log('/n Child 1 End /n');
// }
// parent=async()=>{
//     // console.log('/n I am in Parent Func /n');
//     try{
//         console.log(await child1());
//     }
//     catch(err){
//         console.log("Custom Error = ", err);
//     }
//     // console.log('/n Parent Ended /n');
// }
// parent();




//Task__4
// let data;
// let format;
// child2=async(data)=>{
//     try{
//         format = await data.json();
//         console.log(format);
//     }catch(err){
//         console.log("Error in Child 2 = ", err);
//     }
    
// }
// child1=async()=>{
//     try{
//         data = await fetch(" https://reqres.in/api/users?page=1");
//         child2(data);
//     }catch(err){
//         console.log("Error in Child 1 = ", err);
//     }
    
// }
// parent=async()=>{
//     try{
//         console.log(await child1());
//     }
//     catch(err){
//         console.log("Error in Parent = ", err);
//     }
// }
// parent();





//Task__5
// const fs = require('fs')
// fs.readFile('data.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })





//Task__6
// const fs = require('fs')
// fs.readFile('url.txt', (err, data) => {
//     if (err) throw err;
//     let Text = data.toString();
//     const Arr1 = Text.split(",");
//     Promise.all([fetch(Arr1[0]), fetch(Arr1[1]), fetch(Arr1[2])]).then((values)=>{
//         console.log(values);
//     });
// })
    
    


