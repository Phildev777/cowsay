
const name = "berra";
const campus = "Nantes";


module.exports = {
    name: name,
    campus: campus,
}
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));