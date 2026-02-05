let a = 300 // use let as it local scopped
if (true) {
    let a = 10
    let b= 20
   // console.log("inner",a); // local scope- checks only for inside loop
}

//console.log(a) // global scope - outside the loop


var c =1 //avoid var as it is function scopped 
if(true){
    var c = 10
    //console.log("inner",c);
}

//console.log(c) 

function one (){
    const username = "hi"
}

// this -

function two(){
    const website="github"
    //console.log(username)
}
//console.log(username);
//console. log(website);









