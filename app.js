// Find a way to dry this up later!

var mealTab = document.querySelector("#menu1 ul");
var sideTab = document.querySelector("#menu2 ul");
var sandwichTab = document.querySelector("#menu3 ul");
var additionalTab = document.querySelector("#menu4 ul");
var drinkTab = document.querySelector("#menu5 ul");
var dessertTab = document.querySelector("#menu6 ul");

var meals = [
	{
		name: "Dundee Bowl",
		price: "$4.00",
		description: "8oz bowl meat, rice, beans",
		image: ""
		},
	{
		name: "Stewed Chicken",
		price: "$8.49",
		description: "Pollo Guisado",
		image: "https://farm7.staticflickr.com/6228/6426997349_9e45122693.jpg"
	},
	{
		name: "Beef Stew",
		price: "$8.99",
		description: "Carne Guisada",
		image: ""
	},
	{
		name: "Ground Beef",
		price: "$8.49",
		description: "Carne Molida/Picadillo",
		image: ""
	},
	{
		name: "Chicken and Rice",
		price: "$8.49",
		description: "Arroz Con Pollo",
		image: ""
	},
	{
		name: "Shredded Beef",
		price: "$8.49",
		description: "Ropa Vieja",
		image: ""
	},	
	{
		name: "Roasted Pork",
		price: "$8.99",
		description: "Pernil/Lechon",
		image: ""
	},	
];

var sandwiches = [
	{
		name: "Cuban",
		price: "$7.99",
		description: "(Cubano/Medianoche), Pork, Ham, Swiss, Pickles, & Mustard",
		image: ""
	},
	{
		name: "1/2 Cuban",
		price: "$4.00",
		description: "Cubano/Medianoche",
		image: ""
	},
	{
		name: "Pork Sandwich",
		price: "$7.49",
		description: "Lechon en pan cubano",
		image: ""
	},
	{
		name: "1/2 Pork Sandwich",
		price: "$3.75",
		description: "",
		image: ""
	}
];

var sides = [
	{
		name: "Yellow or White Rice",
		price: "$1.99",
		description: "Arroz Amarillo o Blanco",
		image: ""
	},
	{
		name: "Black or Kidney Beans",
		price: "$1.99",
		description: "Frijoles Negro o Habichuelas Coloradas",
		image: ""
	},
	{
		name: "Plantain",
		price: "$1.99",
		description: "Maduros o Tostones",
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
		description: "Pan con mantequilla",
		image: ""
	},
];

var desserts = [
	{
		name: "Guava Pastry",
		price: "$2.25",
		description: "Pastelito de Guayava",
		image: ""
	},
	{
		name: "Coconut Custard topped with caramel",
		price: "$1.99",
		description: "Flan De Coco con caramelo",
		image:  ""
	},
	{
		name: "Bread Pudding",
		price: "$2.49",
		description: "Pudin de Pan",
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
		description: "Perro Caliente",
		image: ""
	},
	{
		name: "Macaroni & Cheese",
		price: "$2.99",
		description: "Perro Caliente y Macarrones con Queso",
		image: ""
	},
	{
		name: "Grilled Cheese",
		price: "$2.99",
		description: "Sandwich de Queso a la Plancha",
		image: ""
	},
	{
		name: "Mozzarella Sticks",
		price: "$5.50",
		description: "Palitos de Queso",
		image: ""
	},
];

function populateMeal(food, foodTab){
	var foodList = "";
	// Will have to do this multiple times. Make into a global function.
	food.forEach(function(meal){
		foodList += "<li class='col-md-6'>" + "<p>" + "<strong>" + meal.name + "</strong>" + "<span> " + meal.price + " </span>" + "</p>"
						+ "<p> " + "<em>" +  meal.description + "<em>" + " </p>" + "</li>";
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