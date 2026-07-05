// let myWork = [];
// for (let object = 1 ; object < 10 ; object++ ){
//     let stat = object % 2 ? true : false ;
//     let temp = {
//         name : `Lesson ${object}` , status : stat
//     };
//     myWork.push(temp)
// }
// console.log(myWork); not me

let arrOfArrays = [];
let count = 0;
for ( let i = 0; i < 3; i++){
 arrOfArrays.push([]);
 for (let j = 0; j < 7; j++) {
    count += 2;
    arrOfArrays[i].push(count);
 }
  }
console.table(arrOfArrays);