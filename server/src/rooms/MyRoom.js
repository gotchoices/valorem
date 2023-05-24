const colyseus = require("colyseus");
const { MyRoomState } = require("./schema/MyRoomState");
const { Player } = require("../player.js");
const { Redeemer } = require("../redemption.js");
const { Marketplace } = require("../marketplace.js");

exports.MyRoom = class extends colyseus.Room {
  onCreate(options) {
    this.setState(new MyRoomState());
    this.players = {};
    this.clientList = {};
    this.roundInfo = {
      round: 1,
      roundState: 0, // 0 for trading, 1 for redemption
      roundTimer: 120, // 120 for trading, 15 for redemption
    };

    let that = this;
    this.heatbeatLoop = setInterval(function () {
      that.roundInfo.roundTimer--;
      if (that.roundInfo.roundTimer === 0) {
        if (that.roundInfo.roundState === 0) {
          that.endRound();
        } else {
          that.endRedemption();    
          for (const [key, client] of Object.entries(that.clientList)) {
            if (client) {
              // IF NOT DEAD
              if (that.players[client.id].holdings.held.con >= 0) {
                client.send('new round', that.players[client.id].holdings);
              } else {
                that.players[client.id].dead = true
                client.send('game over');
              }
            }
          }
          that.marketplace.broadcastTrades()
          if (that.roundInfo.round === 10) {
             that.sendToAll('game over')
          }
        }
      }
      that.sendToAll("heartbeat", that.roundInfo);
    }, 1000);

    this.round = 0;
    this.marketplace = new Marketplace(this);
    this.redeemer = new Redeemer(this);
    this.onMessage("message", (client, message) => {
      //
      // handle "type" message.
      //
      console.log(`Message from client: ${message}`);
    });
    // //i'm trying to send 'player ready' from the client to the server
    // //and send 'begin allocation' from the server to the client
    // //to begin the game and set the visibility of the main game
    this.onMessage("player ready", (client, message) => {
      // handle "type" message.
      //
      this.players[client.id] = new Player(client.id, message);

      client.send("begin allocation");
    });

    // UNTESTED
    this.onMessage("get trades", (client) => {
      client.send("trades", this.marketplace.getTradesByStatus(1));
    });

    this.onMessage("allocation", (client, message) => {
      let player = this.players[client.id];
      player.holdings.allocated = message;

      player.holdings.held.conCap += player.holdings.allocated.conCap;
      player.holdings.held.durCap += player.holdings.allocated.durCap;
      player.holdings.held.luxCap += player.holdings.allocated.luxCap;
      player.holdings.held.con +=
        player.holdings.allocated.con + 1 + player.holdings.held.conCap / 5;
      player.holdings.held.dur +=
        player.holdings.allocated.dur + 1 + player.holdings.held.durCap / 5;
      player.holdings.held.lux +=
        player.holdings.allocated.lux + 1 + player.holdings.held.luxCap / 5;

        player.holdings.allocated={
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
          


        }
        
      player.timeLeft = message.timeLeft;
      client.send("allocation accepted", player.holdings.held);
      //wait one second then send "begin trading" to the client
      setTimeout(() => {
        client.send("begin trading");
      }, 1000);
    });
  }

  onJoin(client, options) {
    console.log(client.sessionId, "joined!");
    this.clientList[client.id] = client;
  }

  onLeave(client, consented) {
    console.log(client.sessionId, "left!");
    this.marketplace.removeTradesByPlayerId(client.id);
    this.clientList[client.id] = null;
    this.marketplace.broadcastTrades();
  }

  onDispose() {
    clearInterval(this.heatbeatLoop);
    console.log("room", this.roomId, "disposing...");
  }

  // Emits to all players
  sendToAll(name, message) {
    for (const [key, client] of Object.entries(this.clientList)) {
      if (client) {
        client.send(name, message);
      }
    }
  }

  endRound() {
    this.roundInfo.roundState = 1;
    this.roundInfo.roundTimer = 10; // 15 seconds for redemption
    if (this.roundInfo.round === 10) {
      this.roundInfo.roundTimer = 1000
    }
  }

  endRedemption() {
    this.roundInfo.roundState = 0;
    this.roundInfo.roundTimer = 120; // 2 minutes for trading
    this.roundInfo.round++;
  }
};
