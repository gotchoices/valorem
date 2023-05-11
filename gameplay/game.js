// not to be mistaken with phaser game object
// separate class for a single match played within phaser client
class Game {
    constructor(clients, numRounds = 10, timeUnits = 5, startValue = 1, factor = 0.1, roundTime = 30) {
        this.clients = clients;
        this.players = [];
        this.rounds = numRounds;
        this.currentRound = 0;
        this.timeUnits = timeUnits;
        this.startValue = startValue;
        this.factor = factor;
        this.stage = "acquisition";
        this.roundTime = roundTime; // in seconds at the moment
    }

    // start game
    initializePlayers()
    {
        // for (let i = 0; i < this.clients.length; i++) {
        //     this.players.addPlayer(new Player(this.clients[i]));
        // }
        this.clients.forEach(x => this.players.addPlayer(new Player(x)))
    }

    addPlayer(player) {
        player.holdings.time.units = this.timeUnits;
        this.players.push(player);
    }

    start()
    {
        // start timer
        // client phaser or server side?
    }

    // acquisition, trading, redemption

    done()
    {
        // mark done as true
        // update ui
        // message room
        // update players done on room
        // if all players done, advance
    }

    // acquisition

    assignTimeUnitsToPlayers()
    {
        this.players.forEach(x => x.holdings.time.units = this.timeUnits);
    }

    // convert to update method in phaser
    startAcquisition()
    {
        this.assignTimeUnitsToPlayers();
        // update / while not done
        // handle input for selecting holdings to acquire with time units
    }
    select(holding)
    {
        // exchange time for holding?
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