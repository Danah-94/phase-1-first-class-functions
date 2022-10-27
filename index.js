/* 1) The receivesAFunction function should: - take a callback function as an argument
                                            - call the callback function
                                           - it doesn't matter what this function returns, as long as it calls the callback function */


function receivesAFunction (addTheNumbers){
    addTheNumbers();
    return "anything";
} 

/* 2) The returnsANamedFunction function should: - take no arguments
                                                - return a named function   */

function returnsANamedFunction(){
    return function multiplyTheNumbers() {return 10 * 9;} ;
}

/* 3) The returnsAnAnonymousFunction function should: - take no arguments
                                                      - return an anonymous function */

function returnsAnAnonymousFunction(){
    return ( () => console.log ("You can do it!!!"));
}                                                      
