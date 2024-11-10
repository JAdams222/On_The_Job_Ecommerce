// Store information
const storeName = "Tech Haven";
const storeHours = "Mon-Fri 9:00 AM - 8:00 PM | Sat 10:00 AM - 6:00 PM | Sun Closed";

// Existing product and price arrays
let products = ["Laptop", "Smartphone", "Headphones", "Tablet", "Smartwatch"];
let prices = [1200, 800, 150, 300, 250];

//Adding a new product and price
const newProduct = "Gaming Console";
const newPrice = 400;
products.push(newProduct);
prices.push(newPrice);

//Removing an out-of-stock item
const removedProduct = products.pop();
const removedPrice = prices.pop();
console.log(`Removed out-of-stock item: ${removedProduct} - $${removedPrice}`);

//Selecting featured products using slice
const featuredProducts = products.slice(0, 3);
const featuredPrices = prices.slice(0, 3);
console.log("Featured Products:");
for (let i = 0; i < featuredProducts.length; i++) {
    console.log(`${featuredProducts[i]}: $${featuredPrices[i]}`);
}

//Adding new arrivals using concat
const newProducts = ["Bluetooth Speaker", "Gaming Console"];
const newPrices = [100, 400];
products = products.concat(newProducts);
prices = prices.concat(newPrices);

// the customer message with store hours
let message = `Welcome to ${storeName}!\n\nHere are some of our available products:\n`;
for (let i = 0; i < products.length; i++) {
    message += `${products[i]}: $${prices[i]}\n`;
}
message += `\nThank you for shopping with us!\nOur store hours are: ${storeHours}`;

// Display the final message
console.log(message);
