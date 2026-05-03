let myCar = {
    name: "flash car",
    make: "by MK factory",
    model: "electric",
    color: "blue",
    age: 23,
    weight: 296,
    forSale: true,
    hybrid: false
};
let color2 = "color" ;
myCar[color2] = "purple";
color2 = "forSale";
myCar[color2] = false ;

console.log("my car object contains"+myCar);
console.log("make = "+myCar["make"]+" and model is = "+myCar["model"]);
console.log("is it for sale = "+myCar["forSale"])
