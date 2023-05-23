exports.Redeemer=class{

constructor(room){


    room.onMessage("done trading", (client) => {
      console.log(room.players[client.id].name+" is done trading")
let player=room.players[client.id];
        player.doneTrading = true;
        // check if all players are ready, if so emit "redemption"
        let ready = true
        for (const [key, value] of Object.entries(room.players)) {
          if (!value.doneTrading) {
            ready = false
          }
        }
        if (ready) {
          for (const [key, value] of Object.entries(room.players)) {
            value.doneTrading = false
            //using 5 for prime modifier
            player.legacy+=player.timeLeft*5*.4*player.holdings.held.dur*.2*player.holdings.held.lux;

            //subtract 3 from each players consumables
            value.holdings.held.con-=3;
            value.holdings.held.dur=value.holdings.held.dur*.8;
            value.holdings.held.lux=value.holdings.held.lux*.9;
            player.timeLeft=0;

   client.send("legacy",player.legacy);
          }
          console.log("redemption phase starting")
          room.sendToAll("begin redemption");
          //send the player's legacy to the client
       
         
        }
  
      })



}




}