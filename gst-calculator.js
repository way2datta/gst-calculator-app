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
        this.categoryGstRateMapping = { "Food-grains": 0, "Furniture": 5, "Electronics": 18 };
    }
    getGSTRateFor(categoryName) {
        return this.categoryGstRateMapping[categoryName];
    }
}

class ItemsInCategory {
    constructor() {
        this.itemCategoryMapping = {
            "Rice": "Food-grains", 
            "Wheat": "Food-grains",
            "Table": "Furniture",
            "Sofa": "Furniture",
            "Chair": "Furniture",
            "Mobile": "Electronics",
            "Tablet": "Electronics",
            "TV": "Electronics"
        };
    }
    getCategoryFor(itemName) {
        return this.itemCategoryMapping[itemName];
    }
}

class SellingPriceCalculator {
    calculate(item) {
        var categoryName = new ItemsInCategory().getCategoryFor(item.name);
        var gstRateApplicableToItem = new GstRateProvider().getGSTRateFor(categoryName);
        const itemsPricesWithoutGst = item.quantity * item.initialPrice;
        const gstOnSellingItem = itemsPricesWithoutGst * gstRateApplicableToItem / 100;
        const sellingPrice = itemsPricesWithoutGst + gstOnSellingItem;
        return sellingPrice;
    }
}

function calculateSellingPrice() {
    var item = new Item();
    item.name = document.getElementById("itemName").value;
    item.quantity = document.getElementById("itemQuantity").value;
    item.initialPrice = document.getElementById("itemIntialPrice").value;

    var sellingPrice = new SellingPriceCalculator().calculate(item);
    alert("Final selling price: " + sellingPrice);
}