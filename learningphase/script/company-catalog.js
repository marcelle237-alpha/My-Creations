let inventoryStoreItems = [ ];
const devise = "fr-CFA"
let item1 = {
    name: "Biscuit naya" ,
    model: "chococlat" ,
    cost:`25 ${ devise}`,
    quantity: 4
}
let item2 = {
    name: "Biscuit O'choco" ,
    model: "Fraise" ,
    cost: `50 ${ devise} `,
    quantity: 2
}
let item3 = {
    name: "Biscuit Parle-G" ,
    model: "Au Lait" ,
    cost: `100 ${ devise} ` ,
    quantity: 8
}
inventoryStoreItems = inventoryStoreItems.concat(item1,item2,item3);
console.log(inventoryStoreItems);
let quantity3 = inventoryStoreItems[2].quantity;
console.log("this is the quantity of parle-G baught= "+ quantity3);
let model2 = inventoryStoreItems[1].model;
console.log("the model of biscuit 0'choco =  "+model2);
console.log(inventoryStoreItems[6]);
inventoryStoreItems[10] = "father";
console.log(inventoryStoreItems[10]);
console.log("this is the cost of 1 naya = "+ inventoryStoreItems[0].cost);
console.log("this is te data type of cost = "+typeof(inventoryStoreItems[0].cost));
console.log("this is the cost of 1 parle-G = "+ inventoryStoreItems[2].cost);
console.log(inventoryStoreItems);
console.log(inventoryStoreItems[8]);
inventoryStoreItems.length = 1 ;
console.log(inventoryStoreItems[0]);