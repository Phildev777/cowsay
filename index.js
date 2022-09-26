var cowsay = require("cowsay");
const user = require("./information");
console.log(cowsay.say({
    text: `My name is ${user.name} and my campus ${user.campus}`,
    e: "oO",
    T: "U "
}));


