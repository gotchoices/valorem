exports.Redeemer = class {
  constructor(room) {
    room.onMessage("done trading", (client) => {
      console.log(room.players[client.id].name + " is done trading");
      let player = room.players[client.id];
      player.doneTrading = true;
      // check if all players are ready, if so emit "redemption"
      let ready = true;
      for (const [key, value] of Object.entries(room.players)) {
        if (!value.doneTrading) {
          ready = false;
        }
      }
      if (ready) {
        let highScores = []
        for (const [key, value] of Object.entries(room.players)) {
          value.doneTrading = false;
          //using 5 for prime modifier
          console.log(value)
          value.legacy +=
          value.timeLeft *
            5 *
            0.4 *
            value.holdings.held.dur *
            0.2 *
            value.holdings.held.lux;

          //subtract 3 from each players consumables
          value.holdings.held.con -= 3;
          value.holdings.held.dur = value.holdings.held.dur * 0.8;
          value.holdings.held.lux = value.holdings.held.lux * 0.9;
          value.timeLeft = 0;

          highScores.push({
            name: value.name,
            score: value.legacy,
            yours: value.id === client.id
          })
        }
        console.log("redemption phase starting");
        room.endRound()
        room.sendToAll("begin redemption", highScores);
        //send the player's legacy to the client
      }
    });
  }
};
