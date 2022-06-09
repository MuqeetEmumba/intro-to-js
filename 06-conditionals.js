const car = {
    price :300000,
    color :"black",
    noOfDoors : 4
}

const cake = {
    price :400,
    flavour : "chocolate",
    size : "large"
}

if(car.price < 300000 && car.color == "black" && car.noOfDoors == 4)
{
    console.log("We will take it");
}
else{
    console.log("Keep Looking");
}

if(cake.price < 300000 || cake.flavour == "caramel" || cake.size == "small")
{
    console.log("We will take it");
}
else{
    console.log("Keep Looking");
}

// What we have to use both && and || then we use this if check like this

if(car.price < 300000 && (car.color == "black" || car.noOfDoors == 4))
{
    console.log("We will take it");
}
else{
    console.log("Keep Looking");
}


if(cake.price < 300000 && (cake.flavour == "chocolate" || cake.size == "small"))
{
    console.log("We will take it");
}
else{
    console.log("Keep Looking");
}
