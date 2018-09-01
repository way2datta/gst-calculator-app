
const itemName = prompt("Enter the item");
const itemQuantity = parseInt(prompt("Enter quantity of the item"));
const itemInitialPrice = parseFloat(prompt("Enter initial price of the item"));

console.log("Item name: "+itemName);
console.log("Item quantity: "+itemQuantity);
console.log("Item initial price: "+itemInitialPrice);


const itemsPricesWithoutGst = itemQuantity * itemInitialPrice;
const gstOnSellingItem = itemsPricesWithoutGst * 0;
const sellingPrice = itemsPricesWithoutGst + gstOnSellingItem;

console.log("Final selling price: " + sellingPrice);