{
let a = Number(prompt("Enter distance in miles"));
console.log("The distance in miles is = "+ a);
const milesToKilometer = 1.60934 ;
let distanceInKilometer = (a * milesToKilometer) ;
console.log("The distance of " + distanceInKilometer +" kms" + " is equal to " + a + " miles ");
 }
""
 {
    let height = Number(prompt("Enter height in inches"));
    console.log("the height in inches is = "+ height);
    let weight = Number(prompt("Enter weight in pounds"));
    console.log("the weight in pounds is = "+ weight);
    const inchToCentimeter = 2.54 ;
    let heightInCentimeter = height * inchToCentimeter ;
    console.log(height + " inch is equal to " + heightInCentimeter + "cm" ) ;
    const poundsToKilogramm = 1/2.2046 ;
    let weightInKilo = weight * poundsToKilogramm ;
    console.log(weight + " pounds is equal to " + weightInKilo + " kilo" ) ;
    let heightInMeter = heightInCentimeter / 100 ;
    console.log("the height in meter is = " + heightInMeter + " meters");
    let bMi = weightInKilo / (heightInMeter **2);
    console.log("the BMI = Weight in kilo/ Height² in meters")
    console.log("the BMI is = "+ bMi)

 }