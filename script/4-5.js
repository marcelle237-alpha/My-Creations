let prize = prompt("enter a price between 0 -10");
prize = Number(prize);
let message = "My selection: ";
switch(prize){
    case prize = 1:
    case prize = 2:
    case prize = 3:
        console.log( message + prize + " wins a smart phone 4GB");
    break;
    case prize = 4:
    case prize = 5:
        console.log( message + prize + " wins a Computer 16 GB RAM");
    break;
    case prize = 6:
    case prize = 7:
        console.log( message + prize + " wins an samsung 52 pouce television");
    break;
    case prize = 8:
    case prize = 9:
        console.log( message + prize + " wins a cannon printer ");
    break;
    case prize = 10:
        message = "You choosed the jackpot : ";
        console.log( message +" "+ prize + " you win a vila in bastos");
    break;
    default: 
        console.log( message + prize + " OH NO! you got no price! try harder");
    break;

}