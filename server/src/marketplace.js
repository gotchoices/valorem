const { Trade } = require("./trade.js");
exports.Marketplace = class {
  constructor(room) {
    this.room = room;
    this.trades = [];

    // Creates a trade, ties it to that player
    // message example: {buy: {'dur': 3}, sell: {'con': 3}}
    room.onMessage("trade submitted", (client, message) => {
      let player = room.players[client.id];
      if (player) {
        let trade = new Trade(player, message.buy, message.sell);
        this.addTrade(trade);
        this.broadcastTrades();
      }
    });

    room.onMessage("trade canceled", (client, message) => {
      //compare client id to trade via message and if client.id matches
      //the trade's player.id, then cancel the trade
      let player = client.id;
      let trade = this.trades[message.id];

      if (trade.player.id == player && trade.id == message.id) {
        trade.cancelTrade();
      }
      this.broadcastTrades();
    });

    room.onMessage("trade accepted", (client, message) => {
      //compare client id to trade via message and if client.id matches
      //the trade's player.id, then accept the trade
      let player = client.id;
      let trade = this.trades[message.id];
      if (trade.player.id != player && trade.id == message.id) {
        trade.acceptOffer(room.players[client.id]);
        client.send("update", room.players[client.id].holdings.held);
      }
      this.broadcastTrades();
    });
  }

  broadcastTrades() {
    for (const [key, client] of Object.entries(this.room.clientList)) {
      if (client) {
        let player = this.room.players[client.id];
        if (player) {
          let tradeList = {};
          tradeList.trades = [];
          tradeList.playerHoldings = player.holdings;
          for (const [key, trade] of Object.entries(this.trades)) {
            if (trade.status === 1 && this.room.players[trade.player.id] && !this.room.players[trade.player.id].dead) {
              let tradeWrapper = {
                owner: client.sessionId === trade.player.id,
                trade: trade.getTradeObject(),
                canAfford: trade.validateBuyer(
                  this.room.players[client.sessionId]
                ),
              };
              tradeList.trades.push(tradeWrapper);
            }
          }
          client.send("eligible trades", tradeList);
        }
      }
    }
  }

  removeTradesByPlayerId(id) {
    console.log("attempting to remove for " + id);
    for (const [index, item] of Object.entries(this.trades)) {
      if (item.status === 1 && item.player.id === id) {
        this.trades[index].status = 4;
      }
    }
  }

  addTrade(trade) {
    this.trades[trade.id] = trade;
  }

  getAllTrades() {
    return this.trades;
  }

  getTradesByStatus(status) {
    let trades = [];
    this.trades.forEach(function (item, index) {
      if (item.status === status) {
        trades[index] = item;
      }
    });
    return trades;
  }
};
