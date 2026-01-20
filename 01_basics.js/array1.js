arr=[3,1,2,3,4,5]
console.log("B",arr);
const myarr = arr.slice (1,3)
console.log (myarr);
console.log("C",arr);

//splice 
const arr2= arr.splice(2,4)
console.log("D",arr2);
// splice and slice differnece 
//major diffence is in slice original data is manipulated in splice the main splice gets removed and rest stays
