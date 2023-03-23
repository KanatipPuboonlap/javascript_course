// const a = 10;
// const b = 5;
// let c = 5;
// c = "ABC";
// const sum = a + b;
// console.log(a + b + c);
// console.log(sum);
// console.log("Hello");

// const temp5 = [1, 2, 3, 4, 5];
// console.log(temp5);
// const filtertemp = temp5.filter((item) => item >= 3);
// console.log("filter more than 3", filtertemp);
// temp5.push(6);
// console.log("insert 6", temp5);

// // function sayHello() {
// //     console.log('function');
// // }

// const sayHello = (number) => {
//   console.log("number is", number);
// };
// sayHello(100);

// const car1 = { color: "red", brand: "honda", model: { a1:"a1fsdse", a2:"a2sawdf"} };
// console.log(car1["model"]);
// console.log(car1.model.a2);

// ----------Note : function return
// const firstname = "kanatip";
// const lastname = "puboonlap";
// const mergename = (firstname, lastname) => {
//   //Note:1
//   // return firstname + " " + lastname

//   // Note:2
//   const fullname = firstname + " " + lastname;
//   return fullname;
// };
// const fullname = mergename(firstname, lastname);
// console.log(fullname);

// ----------Note:conditions
// const number1 =20
// if(number1 > 40){
// console.log("number1 is more 40");
// }
// else if(number1 >30) {
//     console.log("number1 is more 30");
// }
// else{
//     console.log("IDK");
// }

// ----------Note:Switch
// switch (number1){
//     case 10:
//         console.log("equal 10");
//     break;
//     case 20:
//         console.log("equal 20");
//     break;
//     default:
//         console.log("equal idk");
//     break;
// }

// ----------Note:Loop and Iterations
// const mypet = [
//     "Dog",
//     "Cat",
//     "Fish"
// ]

// for (let index = 0;index < mypet.length;index++){
//     const pet = mypet[index];
//     console.log(pet);
// }

// const car1 = { color: "red", brand: "honda", model: { a1:"a1fsdse", a2:"a2sawdf"} };

// for (const key in car1){
//     if (Object.hasOwnProperty.call(car1,key)){
//         const element = car1[key];
//         console.log(element);
//     }
// }

let i = 0
while (i<10){
    i++;
    console.log("number is : ",i);
    
}

// const number2 = 30
// number2 < 20 ;
//     ? console.log("20");
//     : console.log("30");