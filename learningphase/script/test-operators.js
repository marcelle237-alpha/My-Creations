let a = 5 ;
let b = 9 ;
let c = 3 ;
let d = 4 ;

let result1 = a + b ;
console.log("addition of a and b = " + result1 ) ;

let result2 = a * b ; 
console.log("multiplication of a and b = " + result2);

let result3 = b - a ;
console.log( "subtraction of a from b = " + result3 ) ;

let result4 = b / c ;
console.log( "division of b by c = " + result4 ) ;

let result5 = b ** c ;
console.log ( "b raised to the power c = " + result5) ;

c **= 4 ;
console.log ("c raised to the power 4 =  " + c) ;
let e = (a + b) * 3 ;
console.log ("The value of e is =  " +  e ) ;
console.log ( " compare the equality of value and datatype of e and b " + (e === b) ) ;
console.log ( " compare the absolute non-equality of  d and e = " + (d !== e) ) ;
a += 6 ;
b -= 7 ;
console.log("the new value of a = "+a)
console.log("the new value of b = "+b)
console.log("the value of c = "+ c)

console.log("the value of d = "+ d)
console.log ( " compare the loosely non-equality of d and e = " + (d != e) ) ;
console.log (" compare if a is greater than or equal to b = " + (a >= b) ) ;
console.log (" compare if a is greater than a= " + (a > a) ) ;
console.log (" compare if a is less than b = " + (a < b) ) ;
console.log (" compare if a is less than or equal to b = " + (a <= b) ) ;
console.log (" compare if a is greater than b = " + (a > b) ) ;
console.log (" compare if a is greater than b and c greater than d = " + (a  >  b  &&  c  > d) ) ;
console.log (" compare if a is less than d or c greater than d = " +  (a  >  b)  ||  c  > d ) ;
console.log (" logic negate the following a > c =" + !( a > c) ) ;
