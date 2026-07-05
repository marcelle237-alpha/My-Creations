let maxValue = 10;
let randomNumber = Math.floor(Math.random()*maxValue) + 1;
// console.log(randomNumber);
let check = false;
while (!check){
   let testValue= prompt('enter a number between 1 -' + maxValue);
   testValue = Number(testValue);
   if(testValue === randomNumber){
    check = true;
    console.log("You got it" + randomNumber);
}else if (testValue > randomNumber){
    console.log(randomNumber +"Too High");
} else {
    console.log("The number "+randomNumber+" is Too Low");
}
}

// not me
