// We can create objects in two main ways 
// Object literals and classes

//Empty Object literals Created
const cook = {};
console.log(cook);

// Objects Created with some properties(details)
// On left side you can use with qoutes and not qoutes
// Orders are listed in different orders 
// If you use the special characters you should use qoutes
const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function () {

        // this means we try to access the property of name from this cookie
        console.log("I am eating " + this.name);
    }
}
// You can assign the values 
cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
cookie.eatCookie();
// You can use the square braces for special characters to assign the values
console.log(cookie["+Yummy"]);

// If you want to show all properties
console.log(cookie);

// If you want to show specific property
console.log(cookie.name);


// Chapter 4.2
// Creating Class
// Constructor is just a rules that you need to create a cookie
class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    // You don't need a function keyword
    eatCookie() {
        console.log("I am eating " + this.name);
    }

}
// Creating new object
const mycookie = new Cookie("IceCream", false);
// you can show output by dot operator
console.log(mycookie.name);
// you can show output by square braces and remove dot
console.log(mycookie["isGlutenFree"]);
mycookie.eatCookie();


