const arr = [80, 2, 8, 3.30, 3.51, 3.23];

//1) Map Function
let arr1 = arr.map((value, index, array)=>{
    // console.log(value, index, array);
    return value+index;
})
// console.log(arr1);

//2) ForEach Function
arr.forEach((num, index, array) => {
    // console.log(num)
    // console.log(index);
    // console.log(array);
});

//3) Filter Function
let arr2 = [1,3,4,5,7,9,79];
let filteredArray = arr2.filter((val)=>{
    return val>5;
})
// console.log(filteredArray);
