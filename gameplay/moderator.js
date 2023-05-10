class Moderator {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }

    // Rest of the Moderator class methods...

    // operations on players?

    doSomethingToPlayer(players)
    {
        // async operations
        // for (let i = 0; i < players.length; i++) {
        //     console.log(players[i].name);
        // }
        players.forEach(p => console.log(p.name));
    }
}