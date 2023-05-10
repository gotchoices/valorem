class Commodity extends Holding {
    constructor(type) {
        super();
        this.type = type; // "consumables", "durables", "luxuries"
    }
}