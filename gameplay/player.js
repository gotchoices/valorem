class Player {
    constructor({id, name}) {
        this.id = id
        this.name = name;
        this.holdings = {
            time: 0,
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

    acquireHolding(arg) {
        // Check if the argument is a Commodity or Capital
        if (!(arg instanceof Commodity || arg instanceof Capital)) {
            throw new Error('Argument must be a Commodity or Capital');
        }

        // Check all holdings
        let transactionOutcome = "not found";
        Object.values(this.holdings).forEach(holding => {
            // If the holding is an object (commodities or capital),
            // check its properties
            if (typeof holding === 'object' && holding !== null) {
                Object.values(holding).forEach(subHolding => {
                    if (subHolding.type === arg.type) {
                        if (this.time > arg.cost)
                        {
                            this.time -= holding.cost;
                            subHolding.units += arg.units;
                            transactionOutcome = "success";
                        }
                        else
                        {
                            transactionOutcome = "insufficient funds";
                        }
                    }
                });
            }
        });

        return transactionOutcome;
    }
}

// Example of usage:
// let player = new Player("Player1");
// player.holdings.time.addUnits(5); // Add 5 units of time
// player.holdings.commodities.consumables.addUnits(10); // Add 10 units of consumable commodities