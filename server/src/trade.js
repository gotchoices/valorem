exports.Trade = class {
  // STATUSES:
  // 1: active
  // 2: cancelled
  // 3: accepted
  // 4: invalid

  // player obj, {conCap: 1}, {durCap, 2, luxCap: 2}
  constructor(player, buy, sell) {
    this.id = Math.floor(Math.random() * 16777215).toString(16);
    this.player = player;
    this.buy = buy;
    this.sell = sell;
    for (const [key, value] of Object.entries(this.sell)) {
      if (value === 0) {
        delete this.sell[key];
      }
    }
    for (const [key, value] of Object.entries(this.buy)) {
      if (value === 0) {
        delete this.buy[key];
      }
    }
    this.buyer = null;
    if (
      Object.keys(this.buy).length === 0 ||
      Object.keys(this.sell).length === 0
    ) {
      this.status = 4;
      return;
    }
    if (this.validateSeller()) {
      this.player.trades.push(this);
      this.status = 1;
      for (const [key, value] of Object.entries(this.sell)) {
        if (value > 0) {
          player.holdings.escrow[key] += value;
        }
      }
    } else {
      this.status = 4;
    }
  }

  cancelTrade() {
    if (this.status === 1) {
      for (const [key, value] of Object.entries(this.sell)) {
        if (value > 0) {
          this.player.holdings.escrow[key] -= value;
        }
      }
      this.status = 2;
    }
  }

  getTradeObject() {
    return {
      id: this.id,
      player: this.player.id,
      name: this.player.name,
      buy: this.buy,
      sell: this.sell,
      status: this.status,
    };
  }

  // player obj
  acceptOffer(buyer) {
    // Validate buyer has the goods
    if (this.validateBuyer(buyer)) {
      this.buyer = buyer;
      this.status = 3;
      // goods change hands
      for (const [key, value] of Object.entries(this.sell)) {
        this.player.holdings.held[key] -= value;
        this.player.holdings.escrow[key] -= value;
        this.buyer.holdings.held[key] += value;
      }
      for (const [key, value] of Object.entries(this.buy)) {
        this.player.holdings.held[key] += value;
        this.buyer.holdings.held[key] -= value;
      }
    }
  }

  reviewTrade() {
  
  }

  validateSeller() {
    let valid = true;
    // Confirm the seller has at least X of each "selling" entry
    for (const [key, value] of Object.entries(this.sell)) {
      if (
        this.player.holdings.held[key] - this.player.holdings.escrow[key] <
        value
      ) {
        valid = false;
      }
    }
    return valid;
  }

  // player obj
  validateBuyer(buyer) {
    let valid = true;
    // Confirm the buyer has at least X of each "buying" entry
    // TODO: check if buyer has orders held in escrow
    for (const [key, value] of Object.entries(this.buy)) {
      if (buyer.holdings.held[key] - buyer.holdings.escrow[key] < value) {
        valid = false;
      }
    }
    return valid;
  }
};
