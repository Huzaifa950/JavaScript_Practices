//*************************************************Assignments******************************************************

//Task__1

// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// console.log(styles);
// mid = (styles.length/2);
// styles.splice(mid, 1, 'Classics')
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);


//Task__2

// function sumArray(array)
// {
//     let sum = 0;
//     for(let i=0; i<array.length; i++)
//     {
//         sum+=array[i];
//     }

//     console.log(sum);
// }
// sumArray([4,5,6]);



//Task__3

// function filterRange(arr, a, b) {
//     return arr.filter(element => element >= a && element <= b);
//   }
//   const array = [1, 5, 10, 15, 20];
// const filteredArray = filterRange(array, 5, 15);
// console.log(filteredArray); // Output: [5, 10, 15]



//Task__4

// function filterRangeInPlace(arr, a, b){
// 	return arr.filter(element=> element>=a && element<=b);
// }
// const arr = [1,3,5,7,9,11];
// console.log(filterRangeInPlace(arr, 3,9));


//Task__5

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];

// let names = users.map(user => user.name);
// console.log(names);



//Task__6

// let John = { name: "John", surname: "Smith", id: 1 };
// let Pete = { name: "Pete", surname: "Hunt", id: 2 };
// let Mary = { name: "Mary", surname: "Key", id: 3 };
// let Users = [John, Pete, Mary];

// let usersMapped = Users.map(User => ({
//   fullName: User.name +' '+ User.surname,
//   id: User.id
// }));

// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);



//Task__7

// let JHON = { name: "John", age: 25 };
// let PETE = { name: "Pete", age: 30 };
// let MARY = { name: "Mary", age: 29 };
// let arr = [ 
//     JHON, PETE, MARY ];
// let sum = 0;
// function getAverageAge(arr){
//     arr.forEach((element) => 
//     {
//         sum += element.age;
//     })
//     let avg = sum/arr.length;
//     return avg;

// }
// console.log(getAverageAge(arr));



//Task__8

// function unique(arr) {
//     arr = new Set(arr);
//     strings = Array.from(arr);

//     return strings;
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
//   console.log(unique(strings));
