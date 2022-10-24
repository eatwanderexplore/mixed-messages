//array of dinner ideas
let message = ['spaghetti nests', 'bird tongue lemon soup', 'chili', 'fish and rice', 'pizza', 'pineapple fried rice', 'rice-a-roni'];

//output random dinner idea function
function whatsForDinner()  {
    let dinner = message[Math.floor(Math.random()*message.length)];
    return dinner;
}




//print random dinner idea
console.log("You should have " + whatsForDinner() + " for dinner.");