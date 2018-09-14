export class Item {
    constructor() {
        this.name = "";
        this.quantity = 0;
        this.initialPrice = 0.0;
    }
    acceptInput() {
        this.name = prompt("Enter the item");
        this.quantity = parseInt(prompt("Enter quantity of the item"));
        this.initialPrice = parseFloat(prompt("Enter initial price of the item"));
    }
}