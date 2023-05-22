
const { Trade } = require("./trade.js");
exports.Marketplace = class{
  constructor(room) {
    this.room = room
    this.trades = []
   

    // Creates a trade, ties it to that player
    // message example: {buy: {'dur': 3}, sell: {'con': 3}}
    room.onMessage("trade submitted", (client, message) => {
        let player = room.players[client.id];
        let trade = new Trade(player, message.buy, message.sell)
        this.addTrade(trade)
        this.broadcastTrades()
    })

    room.onMessage("trade canceled", (client, message) => {
     //compare client id to trade via message and if client.id matches
     //the trade's player.id, then cancel the trade
     let player = room.players[client.id].id;
      let trade = this.trades[message]
      console.log(trade)
      console.log(message)
      if (trade.player.id === player.id && trade.id==message) {
        trade.cancelTrade()
      }
      this.broadcastTrades();
    })
  }

  broadcastTrades() {
    for (const [key, client] of Object.entries(this.room.clientList)) {
      if (client) {
        let tradeList = []
        for (const [key, trade] of Object.entries(this.trades)) {
          if (trade.status === 1) {
            let tradeWrapper = {
              owner: client.sessionId === trade.player.id,
              trade: trade.getTradeObject(),
              canAfford: trade.validateBuyer(this.room.players[client.sessionId])
            }
            tradeList.push(tradeWrapper)
          }
        }
        client.send("eligible trades", tradeList)
      }
    }
  }

  getTradesForClient(client) {

  }
  addTrade(trade) {
    this.trades[trade.id] = trade
  }

  getAllTrades() {
    return this.trades
  }

  getTradesByStatus(status) {
    let trades = []
    this.trades.forEach(function (item, index) {
      if (item.status === status) {
        trades[index] = item
      }
    });
    return trades
  }
}