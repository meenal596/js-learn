//dates
let mydate= new Date()
//console.log(mydate.toDateString());
//console.log(mydate.toISOString());
//console.log(mydate.toJSON());
//console.log(mydate.toUTCString());

//let date1 = new Date (2024,8,30)
//let date2 = new Date(2024,8,30,2,5)
//let date3 = new Date("2024-08=30")
//let date4 = new Date("08-30-2024")
//console.log(date3.toLocaleString());

//let TimeStamp = Date.now() used for miliseconds values 
//console.log(TimeStamp); // used in where we want to compare time like in quizes who give the fastest response
//console.log(date4.getTime()); // here it give value of miliseconds of particular date that one has given to system before 

console.log(Math.floor(Date.now()/1000));// convert miliseconds to seconds


let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth()+1); // for month

console.log(newDate.getDay());

newDate.toLocaleString('default',{
       weekday : "long",

});

