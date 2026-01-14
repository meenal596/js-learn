const Namegame = new String('world-new-com')
console.log(Namegame)
console.log(Namegame[0]);

console.log(Namegame.charAt(2)); 
console.log(Namegame.indexOf('d'));

const stringnew = Namegame.substring(0,4) // will go till 0 to 3 (will print worl) and no negative value in substring
console.log(stringnew);

const nextstring = Namegame.slice(-3,6)
console.log(nextstring);

const nextnew = "   world  "
console.log (nextnew);
// trim () - used to remove extra spacces that we dont need  //console.log(nextnew.trim());

// for url we can include like "url.include" to check if some word there or not 
// and "url.replace" - to replace anything in url with the one we want

console.log(Namegame.split('-')); // .split(' ') - used to split the already string thats connected with something like dash,dot and mark etc






