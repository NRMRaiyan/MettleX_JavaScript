var x // declare
x = 42 // define

var x = 42 // initialization

console.log(x)

// Global scope

{
    // Local scope
    let x = 77
    console.log("Local scope: ", x)
}

console.log("Global scope: ", x) // x is hoisted

{
     x = 77 // reassign x 
    console.log("Reassigning: ", x)
}

console.log("After reassigning: ", x)