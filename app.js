// Find a way to dry this up later!

var mealTab = document.querySelector("#menu1 ul");
var sideTab = document.querySelector("#menu2 ul");
var sandwichTab = document.querySelector("#menu3 ul");
var additionalTab = document.querySelector("#menu4 ul");
var drinkTab = document.querySelector("#menu5 ul");
var dessertTab = document.querySelector("#menu6 ul");

var meals = [
	{
		name: "Picadillo Meal",
		price: "$8.49",
		description: "Ground Beef. Rice and beans included.",
		image: ""
		},
	{
		name: "Pollo Guisado Meal",
		price: "$8.49",
		description: "Stewed chicken. Rice and beans included.",
		image: ""
	},
	{
		name: "Carne Guisada Meal",
		price: "$8.49",
		description: "Stewed beef. Rice and beans included.",
		image: ""
	},
	{
		name: "Lechon Meal",
		price: "$8.49",
		description: "Ground Beef. Rice and beans included.",
		image: ""
	},
	{
		name: "Arroz con Pollo Meal",
		price: "$8.49",
		description: "Chicken and rice. Rice and beans included.",
		image: ""
	},
	{
		name: "Ropa Vieja Meal",
		price: "$8.49",
		description: "Shredded Beef. Rice and beans included.",
		image: ""
	},	
];

var sandwiches = [
	{
		name: "Cuban",
		price: "$7.99",
		description: "Pork, Ham, Swiss, Pickles, & Mustard",
		image: ""
	},
	{
		name: "1/2 Cuban",
		price: "$4.00",
		description: "Pork, Ham, Swiss, Pickles & Mustard",
		image: ""
	},
	{
		name: "Pork Sandwich",
		price: "$7.49",
		description: "",
		image: ""
	},
	{
		name: "1/2 Cuban",
		price: "$3.75",
		description: "",
		image: ""
	}
];

var sides = [
	{
		name: "Yellow or White Rice",
		price: "$1.99",
		description: "",
		image: ""
	},
	{
		name: "Black or Kidney Beans",
		price: "$1.99",
		description: "",
		image: ""
	},
	{
		name: "Plantain",
		price: "$1.99",
		description: "",
		image: "",
	},
	{
		name: "Churros",
		price: "$2.25",
		description: "Stuffed with cheddar and green chili",
		image: ""
	},
	{
		name: "Empanada",
		price: "$1.50",
		description: "beef/carne, chicken/pollo, or pork,lechon",
		image: ""
	},
	{
		name: "Pressed Cuban bread with butter",
		price: "$1.25",
		description: "",
		image: ""
	},
];

var desserts = [
	{
		name: "Guava Pastry",
		price: "$2.25",
		description: "",
		image: ""
	},
	{
		name: "Coconut Custard topped with caramel",
		price: "$1.99",
		description: "",
		image:  ""
	},
	{
		name: "Bread Pudding",
		price: "$2.49",
		description: "",
		image: ""
	},
];

var drinks = [
	{
		name: "Water",
		price: "$1.00",
		description: "",
		image: ""
	},
	{
		name: "Sweet or Unsweetened Tea",
		price: "$1.25",
		description: "",
		image: ""
	},
	{
		name: "Soda",
		price: "$1.25",
		description: "Coke, Pepsi, y productos latinos",
		image: ""
	},
	{
		name: "Goya Nectar",
		price: "$1.50",
		description: "",
		image: ""
	},
	{
		name: "Malta",
		price: "$1.50",
		description: "",
		image: ""
	},
	{
		name: "Espresso",
		price: "$1.00",
		description: "",
		image: ""
	},
	{
		name: "Lemonade",
		price: "$1.25",
		description: "",
		image: ""
	},
];

var kids = [
	{
		name: "Hot Dog",
		price: "$2.99",
		description: "",
		image: ""
	},
	{
		name: "Macaroni & Cheese",
		price: "$2.99",
		description: "",
		image: ""
	},
	{
		name: "Grilled Cheese",
		price: "$2.99",
		description: "",
		image: ""
	},
	{
		name: "Mozzarella Sticks",
		price: "$5.50",
		description: "",
		image: ""
	},
];

function populateMeal(food, foodTab){
	var foodList = "";
	// Will have to do this multiple times. Make into a global function.
	food.forEach(function(meal){
		foodList += "<li>" + "<p>" + meal.name + "<span> " + meal.price + " </span>" + "</p>"
						+ "<p> " + meal.description + " </p>" + "</li>";
	});	
	foodTab.innerHTML = foodList;
}

populateMeal(meals, mealTab);
populateMeal(sandwiches, sandwichTab);
populateMeal(sides, sideTab);
populateMeal(kids, additionalTab);
populateMeal(drinks, drinkTab);
populateMeal(desserts, dessertTab);


// // Should also be part of function.
// mealTab.innerHTML = mealList;