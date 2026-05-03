let myTable = [];
let row = 4;
let column = 7;
let count = 0;
 for (count1=0 ; count1 < row ; count1++ ){
    let tempTable = [];
    for (let count2 = 0; count2 < column ; count2++){
        count++
        tempTable.push(count) ;
    }
 myTable.push(tempTable);
}
console.table(myTable)