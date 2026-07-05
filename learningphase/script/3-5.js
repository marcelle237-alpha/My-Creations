let people = {
    friends:[],
}
let friend1 = {
    firstName : "Nke",
    lastName : "christin",
    idValue : 1
};
let friend2 = {
    firstName : "Ajana",
    lastName : "paradis",
    idValue : 2
};
let friend3 = {
    firstName : "James",
    lastName : "loris",
    idValue : 3
};
people.friends = people.friends.concat(friend1,friend2,friend3);
console.log(people.friends);
console.log(people);