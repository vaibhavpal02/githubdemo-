
const prompt = require('prompt-sync')();

const Gname = prompt("Please enter your name: ");
switch(Gname) {
    case "Vaibhav Pal":
        console.log("You are best");
        break;
    case "Tanmay Singh":
        console.log("");
        break;
    default:
        console.log("Name not recognized");
}