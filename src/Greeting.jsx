function Greeting({greeting, number}) {
    console.log("This is the greeting component");
console.log(greeting);

    // if (!greeting) {
    //     console.log("Have a great day!");
    // } else {
    //     console.log(greeting);
    // }

    //ternary => 

    !greeting ? console.log("Have a great day!") : console.log(greeting);


    return <div>
        <h3>{greeting}</h3>
    </div>
}

export default Greeting;