function test(){
    var color = document.getElementById("hexcode").value
    document.getElementById("test").style.background=color
}

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mop floor', 'cook dinner')
console.log(chores)

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores)

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
// .shift() method to remove the first item from the array groceryList and.unshift() method to add 'popcorn' to the beginning of your grocery list.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)
// list of these three things
groceryList.slice()
console.log(groceryList.slice(1,4) )