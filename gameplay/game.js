class Game {
    constructor(numRounds = 10, timeUnits = 5, startValue = 1, factor = 0.1) {
        this.players = [];
        this.rounds = numRounds;
        this.currentRound = 0;
        this.timeUnits = timeUnits;
        this.startValue = startValue;
        this.factor = factor;
        this.stage = "acquisition";
    }

    addPlayer(player) {
        player.holdings.time.addUnits(this.timeUnits);
        this.players.push(player);
    }

    advanceStage() {
        if (this.stage === "acquisition") {
            this.stage = "trading";
        } else if (this.stage === "trading") {
            this.stage = "redemption";
        } else if (this.stage === "redemption") {
            if (this.currentRound < this.rounds) {
                this.currentRound++;
                this.stage = "acquisition";
                this.players.forEach(player => player.holdings.time.addUnits(this.timeUnits));
            } else {
                this.endGame();
            }
        }
    }

    endGame() {
        // Implementation of end game
    }
}

// Usage
// let game = new Game();
// let player1 = new Player('Player 1');
// let player2 = new Player('Player 2');
//
// game.addPlayer(player1);
// game.addPlayer(player2);