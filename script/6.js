// 6-1
// function sayHello(name , age) {
//     return "your name is "+ name + " you are " + age +" years old"
// }
// let val1 = "elena";
// let val2 = 22;
//  console.log(sayHello(val1,val2))

//  6-2
//  let descriptiveArray = [ "handsome ", "beautiful" , "heavy" , "expensive" , "happy" , "clean" , "large"]
//  function enterYourName(){
//     let name = prompt("enter your name");
//     let randomDescriptionNumber = Math.floor(Math.random()* descriptiveArray.length);
//     console.log(name + " "+ descriptiveArray[randomDescriptionNumber]);
//  }
// enterYourName();

// 6-3
// const a = 20;
// const b = 80;
// let operatorHolder = "-";
// function marcelle(a,b,operatorHolder){
//     switch(operatorHolder){
//         case operatorHolder == "+":
//            console.log(a + b)
//             break;
//         case operatorHolder == "-":
//             console.log(a - b)
//             break;
//         default:
//            console.log( a + b)
//         break;
//     }
// if(operatorHolder == "-"){
//     console.log( a - b );
// } else {
//     console.log(  a + b);
// }
// }
// marcelle(a,b,operatorHolder);

//  6-4
//  function returnOperator (a,b) {
//     console.log(a,b);
//     return a + b;
//  }

//  let emptyArrayOfStorage = [];
//  for (let i=0; i<10; i++){
//     let a = i*5;
//     let  b = i*i;
//    let variable = returnOperator(a,b);
//     emptyArrayOfStorage.push(variable);
//  }
//  console.log(emptyArrayOfStorage); "made by marcelle"

//  let descriptiveArray = [ "handsome ", "beautiful" , "heavy" , "expensive" , "happy" , "clean" , "large"]
//   function enterYourName(){
//      let name = prompt("enter your name");
//      let randomDescriptionNumber = Math.floor(Math.random()* descriptiveArray.length);
//      return name + " "+ descriptiveArray[randomDescriptionNumber];
//   }
//  enterYourName();

// 6-5
// let variable = "1000"
// (()=>{
//    variable = 200
//    console.log(variable);
// })();

// 6-6
function factorialFunction(x) {
  for ( i = x; i > 0 ; i++)
  if (x === 0) {
     return 1;
  } else {
   return x * factorialFunction(x-1);
   }
  }
factorialFunction(4);
