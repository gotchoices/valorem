import {trade} from "../classes/trade.js";
export class tradeHandler {
  constructor(scene, room) {
    this.trades=[];
    const handler=this;
    this.canceledTrade={};
    this.selectedTrade=null;
    this.selected = " ";
    this.quantityBuy=0;
    this.quantitySell=0;
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
      "Buy:\n" +
      this.quantityBuy+" "+
      this.selected
    this.sellString =
      "\nSell:\n" +
      this.quantitySell+ " "+
      this.selected

    this.action = " ";
   
   room.onMessage(
     "begin trading",
     (data) => {
      // scene.marketButton.visible = true;
      // scene.marketButtonText.visible = true;
      // scene.marketButton.setInteractive().on("pointerdown", () => {
    

        
      // });

      scene.timeBox = scene.rectangle_7;
    scene.timeBox.setFillStyle(0xffff00);
    scene.timeBox.setStrokeStyle(4, 0xffffff);
    scene.timeValText.setText("M");
    scene.timeText.setText("Market");
    
       scene.stageText.setFontSize(72).setLeftAlign();
       scene.stageText.setPosition(scene.stage.x+15, scene.stage.y +15);

      scene.tradeSubmitButton.visible = true;
      scene.tradeSubmitButtonText.visible = true;
       
       scene.yesButton.visible = true;
       scene.yesButtonText.visible = true;
       scene.yesButtonText.setFontSize(50).setText("Buy");
      
       scene.noButton.visible = true;
       scene.noButtonText.visible = true;
        scene.noButtonText.setFontSize(50).setText("Sell");
       
       scene.stageText.setText(
         "trade holdings\nclick buy/sell\nclick a resource\nclick + -"
       );
       scene.yesButton.setInteractive().on("pointerdown", () => {
         this.action = "Buy";
         this.resetBuy();
       });
       scene.noButton.setInteractive().on("pointerdown", () => {
         if(this.selectedTrade!=null){
          room.send("trade canceled", {id:this.selectedTrade})
          this.selectedTrade=null;
        }
        else{ this.action = "Sell";
         this.resetSell();}
       },this);
       scene.luxCapSquare.setInteractive().on("pointerdown", () => {
         this.selected = "luxCap";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });

       scene.durCapSquare.setInteractive().on("pointerdown", () => {
         this.selected = "durCap";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });
       scene.conCapSquare.setInteractive().on("pointerdown", () => {
         this.selected = "conCap";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });
       scene.luxSquare.setInteractive().on("pointerdown", () => {
         this.selected = "lux";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });
       scene.durSquare.setInteractive().on("pointerdown", () => {
         this.selected = "dur";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });
       scene.conSquare.setInteractive().on("pointerdown", () => {
         this.selected = "con";
         if (this.action == "Buy") {
           this.resetBuy();
         } else {
           this.resetSell();
         }
       });

       scene.plus.setInteractive().on("pointerdown", () => {
         if (this.action == "Buy") {
           if (this.selected == "con") {
             this.conBuy++;
             this.quantityBuy = this.conBuy;
           }
           if (this.selected == "dur") {
             this.durBuy++;
             this.quantityBuy = this.durBuy;
           }
           if (this.selected == "lux") {
             this.luxBuy++;
             this.quantityBuy = this.luxBuy;
           }
           if (this.selected == "conCap") {
             this.conCapBuy++;
             this.quantityBuy = this.conCapBuy;
           }
           if (this.selected == "durCap") {
             this.durCapBuy++;
             this.quantityBuy = this.durCapBuy;
           }
           if (this.selected == "luxCap") {
             this.luxCapBuy++;
             this.quantityBuy = this.luxCapBuy;
           }
           this.buyString = "Buy:\n" + this.quantityBuy + " " + this.selected;
           scene.stageText
             .setCenterAlign()
             .setFontSize(150)
             .setText(this.buyString + this.sellString)
             .setPosition(scene.stage.x+15, scene.stage.y +15);
         }
         if (this.action == "Sell") {
           if (this.selected == "con") {
             this.conSell++;
             this.quantitySell = this.conSell;
           }
           if (this.selected == "dur") {
             this.durSell++;
             this.quantitySell = this.durSell;
           }
           if (this.selected == "lux") {
             this.luxSell++;
             this.quantitySell = this.luxSell;
           }
           if (this.selected == "conCap") {
             this.conCapSell++;
             this.quantitySell = this.conCapSell;
           }
           if (this.selected == "durCap") {
             this.durCapSell++;
             this.quantitySell = this.durCapSell;
           }
           if (this.selected == "luxCap") {
             this.luxCapSell++;
             this.quantitySell = this.luxCapSell;
           }
           this.sellString =
             "\nSell:\n" + this.quantitySell + " " + this.selected;
           scene.stageText
             .setCenterAlign()
             .setFontSize(150)
             .setText(this.buyString + this.sellString);
         }
       });
       scene.minus.setInteractive().on("pointerdown", () => {
         if (this.action == "Buy") {
           if (this.selected == "con") {
             this.conBuy--;
             this.quantityBuy = this.conBuy;
           }
           if (this.selected == "dur") {
             this.durBuy--;
             this.quantityBuy = this.durBuy;
           }
           if (this.selected == "lux") {
             this.luxBuy--;
             this.quantityBuy = this.luxBuy;
           }
           if (this.selected == "conCap") {
             this.conCapBuy--;
             this.quantityBuy = this.conCapBuy;
           }
           if (this.selected == "durCap") {
             this.durCapBuy--;
             this.quantityBuy = this.durCapBuy;
           }
           if (this.selected == "luxCap") {
             this.luxCapBuy--;
             this.quantityBuy = this.luxCapBuy;
           }
           this.buyString = "Buy:\n" + this.quantityBuy + " " + this.selected;
           scene.stageText
             .setCenterAlign()
             .setFontSize(150)
             .setText(this.buyString + this.sellString);
         }
         if (this.action == "Sell") {
           if (this.selected == "con") {
             this.conSell--;
             this.quantitySell = this.conSell;
           }
           if (this.selected == "dur") {
             this.durSell--;
             this.quantitySell = this.durSell;
           }
           if (this.selected == "lux") {
             this.luxSell--;
             this.quantitySell = this.luxSell;
           }
           if (this.selected == "conCap") {
             this.conCapSell--;
             this.quantitySell = this.conCapSell;
           }
           if (this.selected == "durCap") {
             this.durCapSell--;
             this.quantitySell = this.durCapSell;
           }
           if (this.selected == "luxCap") {
             this.luxCapSell--;
             this.quantitySell = this.luxCapSell;
           }
           this.sellString =
             "\nSell:\n" + this.quantitySell + " " + this.selected;

           scene.stageText
             .setCenterAlign()
             .setFontSize(150)
             .setText(this.buyString + this.sellString);
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

       scene.timeBox.setInteractive().on("pointerdown", () => {
        this.trades.forEach((item)=>{
          if(item.container.visible==false){
            item.container.visible=true;
          }else{
            item.container.visible=false;
          }
        })

       })
     

       scene.input.on("pointerdown", (pointer) => {
         let rec = new Phaser.Geom.Rectangle(
           scene.tradeSubmitButton.x,
           scene.tradeSubmitButton.y,
           scene.tradeSubmitButton.width,
           scene.tradeSubmitButton.height
         );
         if (!rec.contains(pointer.x, pointer.y)) {
           scene.yesButton.setStrokeStyle(4, 0xffffff);
           scene.noButton.setStrokeStyle(4, 0xffffff);
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
             scene.yesButton.setStrokeStyle(4, 0x00ff00);
             this.buyString = "Buy:\n" + this.quantityBuy + " " + this.selected;
             scene.stageText
               .setCenterAlign()
               .setFontSize(150)
               .setPosition(scene.stage.x+15, scene.stage.y -300)
               .setText(this.buyString + this.sellString);
           }
           if (this.action == "Sell") {
             this.sellString =
               "\nSell:\n" + this.quantitySell + " " + this.selected;

             scene.noButton.setStrokeStyle(4, 0x00ff00);
             scene.stageText
               .setCenterAlign()
               .setFontSize(150)
               .setPosition(scene.stage.x+15, scene.stage.y -300)
               .setText(this.buyString + this.sellString);
           }
         }
       });

       scene.tradeSubmitButton.setInteractive().on("pointerdown", () => {
        scene.stageText
        .setFontSize(72)
        .setCenterAlign()
        .setText("trade order\nsent");
    

                  room.send("trade submitted", {
          buy: {
            con: this.conBuy,
            dur: this.durBuy,
            lux: this.luxBuy,
            conCap: this.conCapBuy,
            durCap: this.durCapBuy,
            luxCap: this.luxCapBuy,
          },
          sell: {
            con: this.conSell,
            dur: this.durSell,
            lux: this.luxSell,
            conCap: this.conCapSell,
            durCap: this.durCapSell,
            luxCap: this.luxCapSell,
          },
        });
      });
        

       room.onMessage(
         "eligible trades",
         function (data) {
          console.log(data);
        
let trades =handler.trades
trades.forEach((item)=>{
item.container.destroy();
item=null;

})

trades.filter(trade=>trade!=null);

    

          let x=scene.stage.getTopLeft().x;
          let y=scene.stage.getTopLeft().y;
          scene.durValText.setText(data.playerHoldings.held.dur);
          scene.conValText.setText(data.playerHoldings.held.con);
          scene.luxValText.setText(data.playerHoldings.held.lux);
          scene.durCapValText.setText(data.playerHoldings.held.durCap);
          scene.conCapValText.setText(data.playerHoldings.held.conCap);
          scene.luxCapValText.setText(data.playerHoldings.held.luxCap);
          
console.log(data)
          data.trades.forEach((item) => {
            console.log(item)
          
            let id=item.trade.id;
            let player=item.trade.player;
            let buy=item.trade.buy;
            let sell=item.trade.sell;
            let string="";
            for (const [key, value] of Object.entries(buy)) {
              string = value + ' ' + key;
              buy=string;
            }
            for (const [key, value] of Object.entries(sell)) {
              string = value + ' ' + key;
              sell=string;
            }

        let currentTrade=  new trade(x,y,id,player,buy,sell,scene,room);
        handler.trades.push(currentTrade);   
        currentTrade.container.setPosition(currentTrade.container.x+currentTrade.rectangle.width/2+10,currentTrade.container.y+currentTrade.rectangle.height/2+10);
            x+=currentTrade.rectangle.width;
            if(currentTrade.rectangle.getTopRight().x>scene.stage.getTopRight().x){
              y+=currentTrade.rectangle.height+10;
              x=scene.stage.getTopLeft().x;
              currentTrade.container.setPosition(x,y);

            
            }
      });
         },
         this
       );



     },
     this
   );
  }
  resetBuy(){
    this.quantityBuy=0;
    this.luxCapBuy=0;
   
    this.conCapBuy=0;
    
    this.durCapBuy=0;
  
    this.conBuy=0;
 
    this.durBuy=0;
   
    this.luxBuy=0;
  
  }
  resetSell(){
this.quantitySell=0;

this.luxCapSell=0;
this.conCapSell=0;
this.durCapSell=0;
this.conSell=0;
this.durSell=0;
this.luxSell=0;


  }
}
