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
// Will need to do multiple times. Function.
mealList = "";

// Will have to do this multiple times. Make into a global function.
meals.forEach(function(meal){
	mealList += "<li>" + "<p>" + meal.name + "<span> " + meal.price + " </span>" + "</p>"
					+ "<p> " + meal.description + " </p>" + "</li>";
});


// Should also be part of function.
mealTab.innerHTML = mealList;