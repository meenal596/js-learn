const greet =["hi","hello","bye"]
const yes=["yes","true","go"]
//greet.push(yes)
//console.log(greet);
//console.log(greet[3],[2]);

// const wow = greet.concat(yes) // gives output in one line like joins two output without any sign bracket in between
// const wow_h = [...greet,...yes]
// console.log(wow_h);

const another_new =[1,2,3,[4,5,6],7,[8,9,[0.1,2]]]
const real_another_new =another_new.flat(Infinity)
console.log(real_another_new);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"})) // imp+intersting 

let score1=100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

