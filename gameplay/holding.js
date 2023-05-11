class Holding {
    constructor(cost) {
        this.units = 0;
        this.cost = cost
    }

    addUnits(amount) {
        this.units += amount;
    }

    removeUnits(amount) {
        if (amount <= this.units) {
            this.units -= amount;
        } else {
            throw new Error("Not enough units to remove");
        }
    }
}