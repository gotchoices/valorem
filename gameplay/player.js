class Player {
    constructor(name) {
        this.name = name;
        this.holdings = {
            time: new Time(),
            commodities: {
                consumables: new Commodity('consumables'),
                durables: new Commodity('durables'),
                luxuries: new Commodity('luxuries'),
            },
            capital: {
                con: new Capital('con'),
                dur: new Capital('dur'),
                lux: new Capital('lux'),
            },
            legacy: new Legacy(),
        };
    }

    // Rest of the Player class methods...
}

// Example of usage:
// let player = new Player("Player1");
// player.holdings.time.addUnits(5); // Add 5 units of time
// player.holdings.commodities.consumables.addUnits(10); // Add 10 units of consumable commodities