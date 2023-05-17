export class tradeHandler {
  constructor(scene, room) {
    //create variables for handling UI
    this.trading = true;
    this.selected = " ";
    this.conBuy = 0;
    this.durBuy = 0;
    this.luxBuy = 0;
    this.conCapBuy = 0;
    this.durCapBuy = 0;
    this.luxCapBuy = 0;
    this.conSell = 0;
    this.durSell = 0;
    this.luxSell = 0;
    this.conCapSell = 0;
    this.durCapSell = 0;
    this.luxCapSell = 0;
    this.buyString =
      "Buying:\n" +
      this.conBuy +
      " con " +
      this.durBuy +
      " dur " +
      this.luxBuy +
      " lux\n" +
      this.conCapBuy +
      " conCap " +
      this.durCapBuy +
      " durCap\n" +
      this.luxCapBuy +
      " luxCap\n";
    this.sellString =
      "Selling:\n" +
      this.conSell +
      " con " +
      this.durSell +
      " dur " +
      this.luxSell +
      " lux\n" +
      this.conCapSell +
      " conCap " +
      this.durCapSell +
      " durCap\n" +
      this.luxCapSell +
      " luxCap";

    this.action = " ";
    scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.buyString =
          "Buying:\n" +
          this.conBuy +
          " con " +
          this.durBuy +
          " dur " +
          this.luxBuy +
          " lux\n" +
          this.conCapBuy +
          " conCap " +
          this.durCapBuy +
          " durCap\n" +
          this.luxCapBuy +
          " luxCap\n";
        this.sellString =
          "Selling:\n" +
          this.conSell +
          " con " +
          this.durSell +
          " dur " +
          this.luxSell +
          " lux\n" +
          this.conCapSell +
          " conCap " +
          this.durCapSell +
          " durCap\n" +
          this.luxCapSell +
          " luxCap";
      },
    });

    //listen for activation of trading UI elements
    scene.events.on(
      "begin trading",
      function () {
      
        scene.time.addEvent({
          delay: 2000,
          callback: () => {
            scene.stageText.setFontSize(72).setLeftAlign();
            scene.stageText.setPosition(
              scene.stageText.x,
              scene.stageText.y - 100
            );
            scene.stageText.setText(this.buyString + this.sellString);
          },
        });

        //show and hide UI buttons
        scene.timeText.visible = false;
        scene.rectangle_7.visible = false;
        scene.submitButton.visible = false;
        scene.submitButtonText.visible = false;
        scene.yesButton.visible = true;
        scene.yesButtonText.visible = true;
        scene.noButton.visible = true;
        scene.noButtonText.visible = true;
        scene.buyButton.visible = true;
        scene.buyButtonText.visible = true;
        scene.sellButton.visible = true;
        scene.sellButtonText.visible = true;

        //set top console text
        scene.stageText.setText("trade \n holdings");
//determine buy/sell, holdings, and amount
        scene.buyButton.setInteractive().on("pointerdown", () => {
          this.action = "Buy";
        });
        scene.sellButton.setInteractive().on("pointerdown", () => {
          this.action = "Sell";
        });
        scene.luxCapSquare.setInteractive().on("pointerdown", () => {
          this.selected = "luxCap";
        });
        scene.conCapSquare.setInteractive().on("pointerdown", () => {
          this.selected = "conCap";
        });
        scene.durCapSquare.setInteractive().on("pointerdown", () => {
          this.selected = "durCap";
        });
        scene.durSquare.setInteractive().on("pointerdown", () => {
          this.selected = "dur";
        });
        scene.luxSquare.setInteractive().on("pointerdown", () => {
          this.selected = "lux";
        });
        scene.conSquare.setInteractive().on("pointerdown", () => {
          this.selected = "con";
        });
        //set variables for buy/sell and amount
        scene.plus.setInteractive().on("pointerdown", () => {
          if (this.action == "Buy") {
            if (this.selected == "con") {
              this.conBuy++;
            }
            if (this.selected == "dur") {
              this.durBuy++;
            }
            if (this.selected == "lux") {
              this.luxBuy++;
            }
            if (this.selected == "conCap") {
              this.conCapBuy++;
            }
            if (this.selected == "durCap") {
              this.durCapBuy++;
            }
            if (this.selected == "luxCap") {
              this.luxCapBuy++;
            }
          }
          if (this.action == "Sell") {
            if (this.selected == "con") {
              this.conSell++;
            }
            if (this.selected == "dur") {
              this.durSell++;
            }
            if (this.selected == "lux") {
              this.luxSell++;
            }
            if (this.selected == "conCap") {
              this.conCapSell++;
            }
            if (this.selected == "durCap") {
              this.durCapSell++;
            }
            if (this.selected == "luxCap") {
              this.luxCapSell++;
            }
          }
        });
        //configure + and - buttons
        scene.minus.setInteractive().on("pointerdown", () => {
          if (this.action == "Buy") {
            if (this.selected == "con") {
              this.conBuy--;
            }
            if (this.selected == "dur") {
              this.durBuy--;
            }
            if (this.selected == "lux") {
              this.luxBuy--;
            }
            if (this.selected == "conCap") {
              this.conCapBuy--;
            }
            if (this.selected == "durCap") {
              this.durCapBuy--;
            }
            if (this.selected == "luxCap") {
              this.luxCapBuy--;
            }
          }
          if (this.action == "Sell") {
            if (this.selected == "con") {
              this.conSell--;
            }
            if (this.selected == "dur") {
              this.durSell--;
            }
            if (this.selected == "lux") {
              this.luxSell--;
            }
            if (this.selected == "conCap") {
              this.conCapSell--;
            }
            if (this.selected == "durCap") {
              this.durCapSell--;
            }
            if (this.selected == "luxCap") {
              this.luxCapSell--;
            }
          }
          console.log(
            this.conBuy,
            this.durBuy,
            this.luxBuy,
            this.conCapBuy,
            this.durCapBuy,
            this.luxCapBuy,
            this.conSell,
            this.durSell,
            this.luxSell,
            this.conCapSell,
            this.durCapSell,
            this.luxCapSell
          );
        });

        //set UI button colors if not submitting a trade
        scene.input.on("pointerdown", (pointer) => {
          let rec = new Phaser.Geom.Rectangle(
            scene.yesButton.x,
            scene.yesButton.y,
            scene.yesButton.width,
            scene.yesButton.height
          );
          if (!rec.contains(pointer.x, pointer.y)) {
            scene.buyButton.setStrokeStyle(4, 0xffffff);
            scene.sellButton.setStrokeStyle(4, 0xffffff);
            scene.conSquare.setStrokeStyle(4, 0xffffff);
            scene.durSquare.setStrokeStyle(4, 0xffffff);
            scene.luxSquare.setStrokeStyle(4, 0xffffff);
            scene.conCapSquare.setStrokeStyle(4, 0xffffff);
            scene.durCapSquare.setStrokeStyle(4, 0xffffff);
            scene.luxCapSquare.setStrokeStyle(4, 0xffffff);
            if (this.selected == "conCap") {
              scene.conCapSquare.setStrokeStyle(4, 0x00ff00);
            }
            if (this.selected == "durCap") {
              scene.durCapSquare.setStrokeStyle(4, 0x00ff00);
            }
            if (this.selected == "luxCap") {
              scene.luxCapSquare.setStrokeStyle(4, 0x00ff00);
            }

            if (this.selected == "con") {
              scene.conSquare.setStrokeStyle(4, 0x00ff00);
            }
            if (this.selected == "dur") {
              scene.durSquare.setStrokeStyle(4, 0x00ff00);
            }
            if (this.selected == "lux") {
              scene.luxSquare.setStrokeStyle(4, 0x00ff00);
            }
            if (this.action == "Buy") {
              scene.buyButton.setStrokeStyle(4, 0x00ff00);
            }
            if (this.action == "Sell") {
              scene.sellButton.setStrokeStyle(4, 0x00ff00);
            }

            //display active trade configuration
            this.buyString =
              "Buying:\n" +
              this.conBuy +
              " con " +
              this.durBuy +
              " dur " +
              this.luxBuy +
              " lux\n" +
              this.conCapBuy +
              " conCap " +
              this.durCapBuy +
              " durCap\n" +
              this.luxCapBuy +
              " luxCap\n";
            this.sellString =
              "Selling:\n" +
              this.conSell +
              " con " +
              this.durSell +
              " dur " +
              this.luxSell +
              " lux\n" +
              this.conCapSell +
              " conCap " +
              this.durCapSell +
              " durCap\n" +
              this.luxCapSell +
              " luxCap";

            scene.stageText.setText(this.buyString + this.sellString);
          }
        });
//submit trade configuration to "server"
        scene.yesButton.setInteractive().on("pointerdown", () => {
          scene.events.emit("trade", {
            buy: {
              conBuy: this.conBuy,
              durBuy: this.durBuy,
              luxBuy: this.luxBuy,
              conCapBuy: this.conCapBuy,
              durCapBuy: this.durCapBuy,
              luxCapBuy: this.luxCapBuy,
            },
            sell: {
              conSell: this.conSell,
              durSell: this.durSell,
              luxSell: this.luxSell,
              conCapSell: this.conCapSell,
              durCapSell: this.durCapSell,
              luxCapSell: this.luxCapSell,
            },
          });

          //visually acknowledge trade submission
          scene.stageText
            .setFontSize(72)
            .setCenterAlign()
            .setText("trade order\nsent");
        });
//respond to trade requests
        scene.events.on("trade", function (data) {
          this.trading == true;
          scene.time.addEvent({
            delay: 2000,
            callback: () => {
              console.log(data);
              let buy = {
                con: data.sell.conSell,
                dur: data.sell.durSell,
                lux: data.sell.luxSell,
                conCap: data.sell.conCapSell,
                durCap: data.sell.durCapSell,
                luxCap: data.sell.luxCapSell,
              };
              let sell = {
                con: data.buy.conBuy,
                dur: data.buy.durBuy,
                lux: data.buy.luxBuy,
                conCap: data.buy.conCapBuy,
                durCap: data.buy.durCapBuy,
                luxCap: data.buy.luxCapBuy,
              };
              //create a random trade and display on screen
           

              let buyAmount = 0;
              let sellAmount = 0;
              let buying = " ";
              let selling = " ";
              let buyKeys = Object.keys(buy);
              let sellKeys = Object.keys(sell);
              let buyIndex = Math.floor(Math.random() * buyKeys.length);
              let sellIndex = Math.floor(Math.random() * sellKeys.length);
              buying = buyKeys[buyIndex];
              selling = sellKeys[sellIndex];
             
             //eliminate trades of 0 units
              while (buy[buying] == 0) {
                buyIndex = Math.floor(Math.random() * buyKeys.length);
                buying = buyKeys[buyIndex];
              }
        

              while (sell[selling] == 0) {
                sellIndex = Math.floor(Math.random() * sellKeys.length);
                selling = sellKeys[sellIndex];
              }

              //eliminate some edge cases
              buyAmount = Math.floor(Math.random() * buy[buying]);
              sellAmount = Math.floor(Math.random() * sell[selling]);
              if (buyAmount == 0) {
                buyAmount = 1;
              }
              if (sellAmount == 0) {
                sellAmount = 1;
              }
              if (buyAmount > sellAmount) {
                buyAmount = sellAmount;
              }
              if (buyAmount < sellAmount) {
                sellAmount = buyAmount;
              }
              //display trade in stage.Text

              let buyString =
                "Trade " +
                buyAmount +
                " \n" +
                buying +
                " for \n" +
                sellAmount +
                " " +
                selling +
                "?";
              scene.stageText.setText(buyString);
              scene.yesButton.visible = true;
              scene.yesButtonText.visible = true;
              scene.noButton.visible = true;
              scene.noButtonText.visible = true;

              //respond to trades, this is not finished
              scene.yesButton.setInteractive().on("pointerdown", () => {
                scene.events.emit("trade confirm", {
                  buyAmount: buyAmount,
                  buy: buy,
                  sellAmount: sellAmount,
                  sell: sell,
                });
                scene.stageText
                  .setFontSize(72)
                  .setCenterAlign()
                  .setText(buyString);
              });
            },
          });
        });
      },
      this
    );
  }
}
