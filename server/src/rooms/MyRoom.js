const colyseus = require('colyseus');
const { MyRoomState } = require('./schema/MyRoomState');

exports.MyRoom = class extends colyseus.Room {

  onCreate (options) {
    this.setState(new MyRoomState());

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
      //
      // handle "type" message.
      //
      client.send('begin allocation')
    });
  }

  onJoin (client, options) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
