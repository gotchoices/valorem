const colyseus = require("colyseus");
const { MyRoomState } = require("./schema/MyRoomState");

exports.MyRoom = class extends colyseus.Room {
  onCreate(options) {
    this.setState(new MyRoomState());
    this.players = {};
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

      this.players[client.id] = {
        holdings: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        allocated: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        buying: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
        selling: {
          con: 0,
          dur: 0,
          lux: 0,
          conCap: 0,
          durCap: 0,
          luxCap: 0,
        },
      };

      client.send("begin allocation");
    });

    this.onMessage("allocation", (client, message) => {
      let player = this.players[client.id];
      player.allocated = message;
      player.holdings.conCap+=player.allocated.conCap;
      player.holdings.durCap+=player.allocated.durCap;
      player.holdings.luxCap+=player.allocated.luxCap;
      player.holdings.con+=player.allocated.con*2+player.holdings.conCap/5;
      player.holdings.dur+=player.allocated.dur*2+player.holdings.durCap/5;
      player.holdings.lux+=player.allocated.lux*2+player.holdings.luxCap/5;
      client.send("begin trading",player.holdings);
    })


    }
  

  onJoin(client, options) {
    console.log(client.sessionId, "joined!");
  }

  onLeave(client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

};