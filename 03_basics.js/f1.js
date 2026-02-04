function calculatecardprice(...num1){ // rest state (...) - helps to add as many as numbers easily
return (num1) 
}
// console.log(calculatecardprice(20,40,50,60));

function calculatecardprice(val1,val2,...num1){
    return(num1)
}
console.log(calculatecardprice(20,30,40,60)); //(val1-20, val2-30 and num1 - 40,60)

const user={
    username:"hi,",
    price:"120",
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
}
//handleobject(user) // this is one method like calling function for object

handleobject({
    username:"hello",
    price:"180",
})

const mynewArray =[200,300,400]
function returnSeconvalue(getarray){
    return(getarray)
}
console.log(returnSeconvalue(mynewArray));
console.log(returnSeconvalue([200,400,600,1000,7000]));
