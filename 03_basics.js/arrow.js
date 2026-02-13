const user ={
    username:"hi",
    price:"999",

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
    }

    // user.welcomemessage()
    // user.username="sam"
    // user.welcomemessage()

    console.log(this)

    const tea=() => {
        let username="sugar"
        console.log(this);
    }

     tea()

     // const addtwo =(num1 , num2 ) =>{
        // return num1+ num2
        //}

       const addtwo=(num1,num2) => num1 + num2
    // const addtwo = (num1,num2) =>({username:"hi"})
        
        console.log(addtwo(3,4))

        //const myArray=[2,3,4,5,6]
       // myArray.forEach()