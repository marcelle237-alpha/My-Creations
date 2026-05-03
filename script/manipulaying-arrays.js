const theList = ["laurence", "Svekis", true, 35, null, undefined,
    {
        test: "one",
        score: 55
    }, ["one", "two"]];
console.log(theList);
theList.pop();
theList.shift();
console.log(theList);
theList.unshift("FIRST");
theList[5] = "\"hello World\"";
theList[3] = "MIDDLE";
theList.pop();
theList.push("LAST");
console.log(theList.indexOf(true));
theList.splice(2,1);
theList.splice(3,1);
console.log("this is the list = " + theList);
console.log(theList)
