exports.Redeemer=class{

constructor(room){


    room.onMessage("end trading", (client) => {
let player=room.players[client.id];
        player.ready = true;
        // check if all players are ready, if so emit "redemption"
        let ready = true
        for (const [key, value] of Object.entries(room.players)) {
          if (!value.ready) {
            ready = false
          }
        }
        if (ready) {
          for (const [key, value] of Object.entries(room.players)) {
            value.ready = false
            //using 5 for prime modifier
            player.legacy+=player.timeLeft*5*.4*player.holdings.held.dur*.2*player.holdings.held.lux;

            //subtract 3 from each players consumables
            value.holdings.held.con-=3;
            value.holdings.held.dur=value.holdings.held.dur*.8;
            value.holdings.held.lux=value.holdings.held.lux*.9;
            player.timeLeft=0;


          }
          room.sendToAll("begin redemption");
          room.sendToAll('begin allocation');
         
        }
  
      })



}




}