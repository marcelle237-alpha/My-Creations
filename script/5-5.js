let grid = [];
let cellNumber = 64;
let counter = 0;
let row;
for(i = 0 ; i < cellNumber+1; i++){
    if (counter % 8 == 0){
         if (!(row === undefined)){
            grid.push(row);
            console.log(grid)
            }
            row = [];
            console.log(row);
         }
counter++;
let counter2 = counter;
row.push(counter2);
}
console.table(grid);
