var Spaghetti = {
  ingredient1: "ketchup",
  ingredient2: "meat",
  ingredient3: "tomatoes",
};

var Pizza = {
  ingredient1: "pizza bread",
  ingredient2: "ham",
  ingredient3: "pinapple",
  ingredient4: "cheese",
};

var Burger = {
  ingredient1: "burger bread",
  ingredient2: "meat",
  ingredient3: "cheese",
};
 var Pie ={
   ingredient1: "sundried tomatoes",
   ingredient2: "sunflower",
   ingredient3: "bluecheese",
   ingredient4:  "ham",
   ingredient5: "cherry",
 };
function switchCase(food) {
  switch(food) {
    case 'Spaghetti':
      return Object.values(Spaghetti) //list of ingredients ['ketchup', 'meat', 'tomatoes']
    case 'Pizza':
      return Object.values(Pizza)
    case 'Burger':
      return Object.values(Burger)
    case 'Pie':
      return Object.values(Pie)
  }
}

function yummy(element) {
  element.style.color = element.value;
                                // 'Burger' or 'Spaghetti' or 'Pizza' 
  ingredient_list = switchCase(element.innerHTML);

  helper1(ingredient_list);
}

function helper1(ingredient_list) {
  parent = document.getElementById("ingredients");
  clear(parent);
  for (var i in ingredient_list) {
    helper2(ingredient_list[i], parent);
  }
}

function helper2(ingredient, parent) {
  var ul = document.createElement("ul");
  ul.innerHTML = ingredient;

  parent.appendChild(ul);
}

function clear(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// truthy values and falsy values
    