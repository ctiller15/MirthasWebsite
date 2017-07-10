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
		image: "https://farm9.staticflickr.com/8370/29486063321_b9752da19e.jpg"
	},
	{
		name: "Ground Beef",
		price: "$8.49",
		description: "Carne Molida/Picadillo",
		image: "https://farm1.staticflickr.com/280/19866594818_9f02f7a6c5.jpg"
	},
	{
		name: "Chicken and Rice",
		price: "$8.49",
		description: "Arroz Con Pollo",
		image: "https://farm9.staticflickr.com/8496/8375888294_5ed7ef8a5e.jpg"
	},
	{
		name: "Shredded Beef",
		price: "$8.49",
		description: "Ropa Vieja",
		image: "https://farm9.staticflickr.com/8359/8433039859_48618b6887.jpg"
	},	
	{
		name: "Roasted Pork",
		price: "$8.99",
		description: "Pernil/Lechon",
		image: "https://farm6.staticflickr.com/5183/5647644620_2fce333478.jpg"
	},	
];

var sandwiches = [
	{
		name: "Cuban",
		price: "$7.99",
		description: "(Cubano/Medianoche), Pork, Ham, Swiss, Pickles, & Mustard",
		image: "https://farm4.staticflickr.com/3429/3916988783_b6b3182574.jpg"
	},
	{
		name: "1/2 Cuban",
		price: "$4.00",
		description: "Cubano/Medianoche",
		image: "https://farm6.staticflickr.com/5228/5551869000_76c79c2e91.jpg"
	},
	{
		name: "Pork Sandwich",
		price: "$7.49",
		description: "Lechon en pan cubano",
		image: "https://farm8.staticflickr.com/7408/26826540994_b56efc6d4e.jpg"
	},
	{
		name: "1/2 Pork Sandwich",
		price: "$3.75",
		description: "",
		image: "https://farm8.staticflickr.com/7221/7327049962_fa7dc79a44.jpg"
	}
];

var sides = [
	{
		name: "Yellow or White Rice",
		price: "$1.99",
		description: "Arroz Amarillo o Blanco",
		image: "https://farm9.staticflickr.com/8641/16080355213_7ae7e61be8.jpg"
	},
	{
		name: "Black or Kidney Beans",
		price: "$1.99",
		description: "Frijoles Negro o Habichuelas Coloradas",
		image: "https://farm8.staticflickr.com/7026/6772569317_77e5811865.jpg"
	},
	{
		name: "Plantain",
		price: "$1.99",
		description: "Maduros o Tostones",
		image: "https://farm5.staticflickr.com/4013/4698215535_a69c548aff.jpg"
	},
	{
		name: "Churros",
		price: "$2.25",
		description: "Stuffed with cheddar and green chili",
		image: "https://farm3.staticflickr.com/2430/3650473121_ac71fa871e.jpg"
	},
	{
		name: "Empanada",
		price: "$1.50",
		description: "beef/carne, chicken/pollo, or pork,lechon",
		image: "https://farm5.staticflickr.com/4020/4618214585_ca38f8dba9.jpg"
	},
	{
		name: "Pressed Cuban bread with butter",
		price: "$1.25",
		description: "Pan con mantequilla",
		image: "https://farm8.staticflickr.com/7436/8726079227_8ab0c2dbbf.jpg"
	},
];

var desserts = [
	{
		name: "Guava Pastry",
		price: "$2.25",
		description: "Pastelito de Guayava",
		image: "https://farm4.staticflickr.com/3538/4606571598_bcbf4556b9.jpg"
	},
	{
		name: "Coconut Custard topped with caramel",
		price: "$1.99",
		description: "Flan De Coco con caramelo",
		image:  "https://farm6.staticflickr.com/5270/5651864872_665c0939a9.jpg"
	},
	{
		name: "Bread Pudding",
		price: "$2.49",
		description: "Pudin de Pan",
		image: "https://farm2.staticflickr.com/1126/949707043_183d6157b7.jpg"
	},
];

var drinks = [
	{
		name: "Water",
		price: "$1.00",
		description: "",
		image: "https://farm8.staticflickr.com/7359/9351288815_69651106de.jpg"
	},
	{
		name: "Sweet or Unsweetened Tea",
		price: "$1.25",
		description: "",
		image: "https://farm6.staticflickr.com/5127/5306701505_8781253580.jpg"
	},
	{
		name: "Soda",
		price: "$1.25",
		description: "Coke, Pepsi, y productos latinos",
		image: "https://farm1.staticflickr.com/81/264714352_bc245a743c.jpg"
	},
	{
		name: "Goya Nectar",
		price: "$1.50",
		description: "",
		image: "https://1.bp.blogspot.com/-_72M0FVpRW8/WAjnzUNkpYI/AAAAAAABBhA/A1_Oq3W9pe07ERjlpddIGqQF5DA83DwPwCLcB/s320/IMG_20161019_083633.jpg"
		// This image is NOT creative commons.
	},
	{
		name: "Malta",
		price: "$1.50",
		description: "",
		image: "https://farm8.staticflickr.com/7177/6779931680_f78fb0fe13.jpg"
	},
	{
		name: "Espresso",
		price: "$1.00",
		description: "",
		image: "https://farm4.staticflickr.com/3078/3191375363_ec50fb1bb4.jpg"
	},
	{
		name: "Lemonade",
		price: "$1.25",
		description: "",
		image: "https://farm8.staticflickr.com/7495/16076185676_7fc55f30b2.jpg"
	},
];

var kids = [
	{
		name: "Hot Dog",
		price: "$2.99",
		description: "Perro Caliente",
		image: "https://farm7.staticflickr.com/6069/6140659556_398955cafa.jpg"
	},
	{
		name: "Macaroni & Cheese",
		price: "$2.99",
		description: "Perro Caliente y Macarrones con Queso",
		image: "https://farm9.staticflickr.com/8071/8401086278_dda6868a02.jpg"
	},
	{
		name: "Grilled Cheese",
		price: "$2.99",
		description: "Sandwich de Queso a la Plancha",
		image: "https://farm9.staticflickr.com/8086/8601455230_5f64dcca51.jpg"
	},
	{
		name: "Mozzarella Sticks",
		price: "$5.50",
		description: "Palitos de Queso",
		image: "https://farm2.staticflickr.com/1516/26050392236_ca2395b278.jpg"
	},
];

function populateMeal(food, foodTab){
	var foodList = "<div class='row'>";
	var image = "";

	// Will have to do this multiple times. Make into a global function.
	food.forEach(function(meal){
		image = "<div class='col-xs-3'>" + "<img class='img-responsive' src='" + meal.image + "'></div>"
		foodList += "<li class='col-sm-6'><div class='row'>" + image + "<div class='col-xs-9'>" + "<p>" + "<strong>" + meal.name + "</strong>" + "<span> " + meal.price + " </span>" + "</p>"
						+ "<p> " + "<em>" +  meal.description + "</em>" + " </p>" + "</div>" + "</div></li>";
	});
	foodList += "</div>";
	foodTab.innerHTML = foodList;
}

populateMeal(meals, mealTab);
populateMeal(sandwiches, sandwichTab);
populateMeal(sides, sideTab);
populateMeal(kids, additionalTab);
populateMeal(drinks, drinkTab);
populateMeal(desserts, dessertTab);

// Running the google maps API.

// function initMap(){
// 	console.log("Initialized!");
// 	var loc = {lat: 28.017307, lng: -81.630484 };
// 	new google.maps.Map(document.getElementById("map"), {zoom: 6, center: loc });
// 	var marker = new google.maps.Marker({ position: loc, map: map });
// }

function initMap() { 
	var loc = {lat: 28.017307, lng: -81.630484 }; 
	var map = new google.maps.Map(document.getElementById('map'), { zoom: 17, center: loc });
	var marker = new google.maps.Marker({ position: loc, map: map });
}