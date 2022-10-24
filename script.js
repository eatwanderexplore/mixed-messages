//arrays of meal ideas
const breakfasts = ['cereal', 'oatmeal', 'french toast', 'pancakes', 'liege waffles'];
const lunches = ['PB&J sandwiches', 'leftovers', 'nachos', 'tuna casserole', 'cobb salad'];
const dinners = ['spaghetti nests', 'bird tongue lemon soup', 'chili', 'fish and rice', 'pizza', 'pineapple fried rice', 'rice-a-roni'];

//output random dinner idea function
function whatToEat()  {
    let breakfast = breakfasts[Math.floor(Math.random()*breakfasts.length)];
    let lunch = lunches[Math.floor(Math.random()*lunches.length)];
    let dinner = dinners[Math.floor(Math.random()*dinners.length)];
    return `Today's menu: ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`;
}




//print random meal ideas
console.log(whatToEat());