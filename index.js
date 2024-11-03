// Store details
let storeName = "Tech Haven";
let storeType = "Electronics Store";

// Products and prices
let products = ["Laptop", "Smartphone", "Headphones", "Tablet", "Smartwatch"];
let prices = [1200, 800, 150, 300, 250];

// Business hours
let businessHours = {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM",
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "Closed"
};

// Display store information
console.log("Welcome to " + storeName + "!");
console.log("We are an " + storeType + " with the following products and prices:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i] + ": $" + prices[i]);
}
console.log("Business Hours:");
for (let day in businessHours) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + ": " + businessHours[day]);
}
