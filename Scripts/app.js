//global area

//let myGlobalVariable = 0;

//var myGlobalVariable = 0;
/*myGlobalVariable = "Ali";
myGlobalVariable = [];
myGlobalVariable = {};*/

//self-executing annonymous function
//IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable = 0; // never declare a variable without let (recommended) or var
    //named function
    function Starts(){
        //injects the value of the variable myFunctionalVariable
        let myLocalVariable = 0;
        console.log(`App started... ${myFunctionalVariable}`);
    }
    //annonymous function
    /*let Start = function(){
        //injects the value of the variable myFunctionalVariable
        let myLocalVariable = 0;
        console.log(`App started... ${myFunctionalVariable}`);
    }*/

    window.addEventListener("load", Start); //(name of event, function)

    /*window.addEventListener("load", () => {
        let myLocalVariable = 0;
        console.log(`App started... ${myFunctionalVariable}`);
    }); //(name of event, function)*/

})();