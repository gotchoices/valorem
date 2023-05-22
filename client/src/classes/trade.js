export class trade{

constructor(x,y,id,name,buy, sell,scene,room) {

console.log(x,y,id,name,buy, sell,)
    this.id=id;

this.container=scene.add.container(0,0);
this.rectangle=scene.add.rectangle(x,y,scene.stage.width*scene.stage.scaleX/3-5,scene.stage.height*scene.stage.scaleY/3).setFillStyle(0x000000).setStrokeStyle(3,0x3436738,1);
this.name=scene.add.bitmapText(this.rectangle.x,this.rectangle.y-100,'spaceCrusaders',name,28).setCenterAlign().setOrigin(.5);
this.name.tintFill=true;
this.name.tintTopLeft = 3436738;
		this.name.tintTopRight = 3436738;
		this.name.tintBottomLeft = 3436738;
        this.name.setText(name)
this.buy=scene.add.bitmapText(this.rectangle.x-90,this.rectangle.y-50,'spaceCrusaders','Buy',28).setCenterAlign().setOrigin(.5);
this.buy.tintFill=true;
this.buy.tintTopLeft = 3436738;
        this.buy.tintTopRight = 3436738;
        this.buy.tintBottomLeft = 3436738;
        this.buy.setText('Buy')
this.sell=scene.add.bitmapText(this.rectangle.x+90,this.rectangle.y-50,'spaceCrusaders','Sell',28).setCenterAlign().setOrigin(.5);
this.sell.tintFill=true;
this.sell.tintTopLeft = 3436738;
        this.sell.tintTopRight = 3436738;
        this.sell.tintBottomLeft = 3436738;
        this.sell.setText('Sell')

        this.buyTrade=scene.add.bitmapText(this.rectangle.x-90,this.rectangle.y,'spaceCrusaders',buy,28).setCenterAlign().setOrigin(.5);
        this.buyTrade.tintFill=true;
        this.buyTrade.tintTopLeft = 3436738;
        this.buyTrade.tintTopRight = 3436738;
        this.buyTrade.tintBottomLeft = 3436738;
        this.buyTrade.setText(buy)
        this.sellTrade=scene.add.bitmapText(this.rectangle.x+90,this.rectangle.y,'spaceCrusaders',sell,28).setCenterAlign().setOrigin(.5);
        this.sellTrade.tintFill=true;
        this.sellTrade.tintTopLeft = 3436738;
        this.sellTrade.tintTopRight = 3436738;
        this.sellTrade.tintBottomLeft = 3436738;
        this.sellTrade.setText(sell)
        this.acceptBox=scene.add.rectangle(this.rectangle.x,this.rectangle.y+75,110,50).setFillStyle(0x000000).setStrokeStyle(4,0x3436738,1);
        this.accept=scene.add.bitmapText(this.acceptBox.x,this.acceptBox.y,'spaceCrusaders','Accept',28).setCenterAlign().setOrigin(.5);
        this.accept.tintFill=true;
        this.accept.tintTopLeft = 3436738;
        this.accept.tintTopRight = 3436738;
        this.accept.tintBottomLeft = 3436738;
        this.accept.setText('Accept')
this.container.add([this.rectangle,this.name,this.buy,this.sell,this.buyTrade,this.sellTrade,this.acceptBox,this.accept]);

this.acceptBox.setInteractive();
this.acceptBox.on('pointerdown',()=>{

room.send("trade accepted",this.id)

},this)
this.rectangle.setInteractive();
this.rectangle.on('pointerdown',()=>{
scene.tradeHandler.selectedTrade=this.id;

})

}


}