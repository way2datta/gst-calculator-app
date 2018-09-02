class Item {
    constructor() {
        this.name = "";
        this.quantity = 0;
        this.initialPrice = 0.0;
    }
    acceptInput() {
        this.name = prompt("Enter the item");
        this.quantity = parseInt(prompt("Enter quantity of the item"));
        this.initialPrice = parseFloat(prompt("Enter initial price of the item"));
    };
};

class GstRateProvider {
    constructor() {
        this.categoryGstRateMapping = {"Food-grains": 0, "Furniture": 5, "Electronics":18};
    }
    getGSTRateFor(categoryName) {
        return this.categoryGstRateMapping[categoryName];
    }
}


const itemCategoryMapping = {"Rice": "Food-grains", "TV": "Electronics", "Sofa": "Furniture"};


var item = new Item();
item.acceptInput();

console.log("Item name: "+item.name);
console.log("Item quantity: "+item.quantity);
console.log("Item initial price: "+item.initialPrice);

var categoryName = itemCategoryMapping[item.name];
var gstRateApplicableToItem = new GstRateProvider().getGSTRateFor(categoryName);

const itemsPricesWithoutGst = item.quantity * item.initialPrice;
const gstOnSellingItem = itemsPricesWithoutGst * gstRateApplicableToItem / 100;
const sellingPrice = itemsPricesWithoutGst + gstOnSellingItem;

console.log(categoryName);
console.log("Final selling price: " + sellingPrice);