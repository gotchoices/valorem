// You can write more code here
import { allocationHandler } from "./allocation.js";
import { tradeHandler } from "./trading.js";
import {trade} from "../classes/trade.js";
/* START OF COMPILED CODE */

export default class UI extends Phaser.Scene {
  constructor() {
    super("UI");

    /* START-USER-CTR-CODE */
    // Write your code here.
    this.consVal = 0;
    this.durVal = 0;
    this.luxVal = 0;
    this.durCapVal = 0;
    this.luxCapVal = 0;
    this.conCapVal = 0;
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
	
 
  /** @type {Phaser.GameObjects.Text} */
  consValText;
  /** @type {Phaser.GameObjects.Text} */
  durValText;
  /** @type {Phaser.GameObjects.Text} */
  luxValText;
  /** @type {Phaser.GameObjects.Ellipse} */
  ellipse_1;
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 900, 1600).setOrigin(0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4408131;

		// startButton
		const startButton = this.add.rectangle(457.75, 816, 350, 128);
		startButton.name = "startButton";
		startButton.scaleX = 2.393893045909517;
		startButton.scaleY = 2.521037251429433;
		startButton.isFilled = true;
		startButton.fillColor = 3436738;

		// startButtonText
		const startButtonText = this.add.bitmapText(46.25, 773, "spaceCrusaders", "click here to start");
		startButtonText.name = "startButtonText";
		startButtonText.tintFill = true;
		startButtonText.text = "click here to start";
		startButtonText.fontSize = 72;

		// ui
		const ui = this.add.layer();
		ui.name = "ui";
		ui.visible = false;

		// durCapSquare
		const durCapSquare = this.add.rectangle(475, 1489, 128, 128);
		durCapSquare.name = "durCapSquare";
		durCapSquare.isFilled = true;
		durCapSquare.fillColor = 0;
		durCapSquare.isStroked = true;
		durCapSquare.lineWidth = 4;
		ui.add(durCapSquare);

		// luxSquare
		const luxSquare = this.add.rectangle(703, 1261, 128, 128);
		luxSquare.name = "luxSquare";
		luxSquare.isFilled = true;
		luxSquare.fillColor = 0;
		luxSquare.isStroked = true;
		luxSquare.lineWidth = 4;
		ui.add(luxSquare);

		// durSquare
		const durSquare = this.add.rectangle(475, 1261, 128, 128);
		durSquare.name = "durSquare";
		durSquare.isFilled = true;
		durSquare.fillColor = 0;
		durSquare.isStroked = true;
		durSquare.lineWidth = 4;
		ui.add(durSquare);

		// luxCapSquare
		const luxCapSquare = this.add.rectangle(703, 1489, 128, 128);
		luxCapSquare.name = "luxCapSquare";
		luxCapSquare.isFilled = true;
		luxCapSquare.fillColor = 0;
		luxCapSquare.isStroked = true;
		luxCapSquare.lineWidth = 4;
		ui.add(luxCapSquare);

		// conSquare
		const conSquare = this.add.rectangle(247, 1261, 128, 128);
		conSquare.name = "conSquare";
		conSquare.isFilled = true;
		conSquare.fillColor = 0;
		conSquare.isStroked = true;
		conSquare.lineWidth = 4;
		ui.add(conSquare);

		// conCapSquare
		const conCapSquare = this.add.rectangle(247, 1489, 128, 128);
		conCapSquare.name = "conCapSquare";
		conCapSquare.isFilled = true;
		conCapSquare.fillColor = 0;
		conCapSquare.isStroked = true;
		conCapSquare.lineWidth = 4;
		ui.add(conCapSquare);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(118, 970, 128, 128);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;
		rectangle_7.isStroked = true;
		rectangle_7.lineWidth = 4;
		ui.add(rectangle_7);

		// commoditiesText
		const commoditiesText = this.add.bitmapText(35, 1122, "spaceCrusaders", "Consumables Durables Luxuries");
		commoditiesText.name = "commoditiesText";
		commoditiesText.tintFill = true;
		commoditiesText.tintTopLeft = 3436738;
		commoditiesText.tintTopRight = 3436738;
		commoditiesText.tintBottomLeft = 3436738;
		commoditiesText.text = "Consumables Durables Luxuries";
		commoditiesText.fontSize = 44;
		ui.add(commoditiesText);

		// luxValText
		const luxValText = this.add.bitmapText(694, 1227, "spaceCrusaders", "0");
		luxValText.name = "luxValText";
		luxValText.tintFill = true;
		luxValText.text = "0";
		luxValText.fontSize = 44;
		ui.add(luxValText);

		// conValText
		const conValText = this.add.bitmapText(224, 1227, "spaceCrusaders", "0");
		conValText.name = "conValText";
		conValText.tintFill = true;
		conValText.text = "0";
		conValText.fontSize = 44;
		ui.add(conValText);

		// durValText
		const durValText = this.add.bitmapText(460, 1227, "spaceCrusaders", "0");
		durValText.name = "durValText";
		durValText.tintFill = true;
		durValText.text = "0";
		durValText.fontSize = 44;
		ui.add(durValText);

		// timeText
		const timeText = this.add.bitmapText(60, 836, "spaceCrusaders", "Time");
		timeText.name = "timeText";
		timeText.tintFill = true;
		timeText.tintTopLeft = 3436738;
		timeText.tintTopRight = 3436738;
		timeText.tintBottomLeft = 3436738;
		timeText.text = "Time";
		timeText.fontSize = 44;
		ui.add(timeText);

		// timeValText
		const timeValText = this.add.bitmapText(94, 947, "spaceCrusaders", "0");
		timeValText.name = "timeValText";
		timeValText.tintFill = true;
		timeValText.text = "0";
		timeValText.fontSize = 48;
		ui.add(timeValText);

		// conCapValText
		const conCapValText = this.add.bitmapText(224, 1466, "spaceCrusaders", "0");
		conCapValText.name = "conCapValText";
		conCapValText.tintFill = true;
		conCapValText.text = "0";
		conCapValText.fontSize = 48;
		ui.add(conCapValText);

		// durCapValText
		const durCapValText = this.add.bitmapText(460, 1466, "spaceCrusaders", "0");
		durCapValText.name = "durCapValText";
		durCapValText.tintFill = true;
		durCapValText.text = "0";
		durCapValText.fontSize = 48;
		ui.add(durCapValText);

		// luxCapValText
		const luxCapValText = this.add.bitmapText(696, 1468, "spaceCrusaders", "0");
		luxCapValText.name = "luxCapValText";
		luxCapValText.tintFill = true;
		luxCapValText.text = "0";
		luxCapValText.fontSize = 48;
		ui.add(luxCapValText);

		// plus
		const plus = this.add.bitmapText(655, 906, "spaceCrusaders", "+");
		plus.name = "plus";
		plus.tintFill = true;
		plus.tintTopLeft = 3436738;
		plus.tintTopRight = 3436738;
		plus.tintBottomLeft = 3436738;
		plus.text = "+";
		plus.fontSize = 128;
		ui.add(plus);

		// minus
		const minus = this.add.bitmapText(799, 906, "spaceCrusaders", "-");
		minus.name = "minus";
		minus.tintFill = true;
		minus.tintTopLeft = 3436738;
		minus.tintTopRight = 3436738;
		minus.tintBottomLeft = 3436738;
		minus.text = "-";
		minus.fontSize = 128;
		ui.add(minus);

		// stage
		const stage = this.add.rectangle(455, 409, 850, 800);
		stage.name = "stage";
		//stage.scaleX = 5.827964926609718;
		//stage.scaleY = 5.295269907558686;
		stage.isFilled = true;
		stage.fillColor = 0;
		stage.isStroked = true;
		stage.strokeColor = 10329501;
		stage.lineWidth = 4;
		ui.add(stage);

		// stageText
		const stageText = this.add.bitmapText(475, 258, "spaceCrusaders", "Allocate \nTime");
		stageText.name = "stageText";
		stageText.setOrigin(0.5, 0);
		stageText.tintFill = true;
		stageText.tintTopLeft = 3436738;
		stageText.tintTopRight = 3436738;
		stageText.tintBottomLeft = 3436738;
		stageText.text = "Allocate \nTime";
		stageText.fontSize = 150;
		stageText.align = 1;
		ui.add(stageText);

		// heldText
		const heldText = this.add.bitmapText(93, 1318, "spaceCrusaders", "HELD");
		heldText.name = "heldText";
		heldText.angle = -90;
		heldText.tintFill = true;
		heldText.tintTopLeft = 3436738;
		heldText.tintTopRight = 3436738;
		heldText.tintBottomLeft = 3436738;
		heldText.text = "HELD";
		heldText.fontSize = 48;
		ui.add(heldText);

		// capitalText
		const capitalText = this.add.bitmapText(93, 1593, "spaceCrusaders", "capital");
		capitalText.name = "capitalText";
		capitalText.angle = -90;
		capitalText.tintFill = true;
		capitalText.tintTopLeft = 3436738;
		capitalText.tintTopRight = 3436738;
		capitalText.tintBottomLeft = 3436738;
		capitalText.text = "capital";
		capitalText.fontSize = 48;
		ui.add(capitalText);

		// buyButton
		const buyButton = this.add.rectangle(139, 1044, 124, 128);
		buyButton.name = "buyButton";
		buyButton.visible = false;
		buyButton.isFilled = true;
		buyButton.fillColor = 12457024;
		buyButton.isStroked = true;
		buyButton.lineWidth = 4;
		ui.add(buyButton);

		// buyButtonText
		const buyButtonText = this.add.bitmapText(88, 1018, "spaceCrusaders", "Buy");
		buyButtonText.name = "buyButtonText";
		buyButtonText.visible = false;
		buyButtonText.tintFill = true;
		buyButtonText.tintTopLeft = 3436738;
		buyButtonText.tintBottomRight = 3436738;
		buyButtonText.text = "Buy";
		buyButtonText.fontSize = 48;
		ui.add(buyButtonText);

		// sellButton
		const sellButton = this.add.rectangle(297, 1045, 124, 128);
		sellButton.name = "sellButton";
		sellButton.visible = false;
		sellButton.isFilled = true;
		sellButton.fillColor = 12457024;
		sellButton.isStroked = true;
		sellButton.lineWidth = 4;
		ui.add(sellButton);

		// sellButtonText
		const sellButtonText = this.add.bitmapText(240, 1020, "spaceCrusaders", "Sell");
		sellButtonText.name = "sellButtonText";
		sellButtonText.visible = false;
		sellButtonText.tintFill = true;
		sellButtonText.tintTopLeft = 3436738;
		sellButtonText.tintBottomRight = 3436738;
		sellButtonText.text = "Sell";
		sellButtonText.fontSize = 48;
		ui.add(sellButtonText);

		// noButton
		const noButton = this.add.rectangle(520, 972, 124, 128);
		noButton.name = "noButton";
		noButton.isFilled = true;
		noButton.fillColor = 16725558;
		noButton.isStroked = true;
		noButton.lineWidth = 4;
		ui.add(noButton);

		// noButtonText
		const noButtonText = this.add.bitmapText(473, 950, "spaceCrusaders", "reset");
		noButtonText.name = "noButtonText";
		noButtonText.tintFill = true;
		noButtonText.tintTopLeft = 3436738;
		noButtonText.tintBottomRight = 3436738;
		noButtonText.text = "reset";
		noButtonText.fontSize = 30;
		ui.add(noButtonText);

		// yesButton
		const yesButton = this.add.rectangle(318, 970, 124, 128);
		yesButton.name = "yesButton";
		yesButton.isFilled = true;
		yesButton.fillColor = 4127806;
		yesButton.isStroked = true;
		yesButton.lineWidth = 4;
		ui.add(yesButton);

		// yesButtonText
		const yesButtonText = this.add.bitmapText(260, 953, "spaceCrusaders", "submit");
		yesButtonText.name = "yesButtonText";
		yesButtonText.tintFill = true;
		yesButtonText.tintTopLeft = 3436738;
		yesButtonText.tintBottomRight = 3436738;
		yesButtonText.text = "submit";
		yesButtonText.fontSize = 30;
		ui.add(yesButtonText);

		this.startButton = startButton;
		this.startButtonText = startButtonText;
		this.durCapSquare = durCapSquare;
		this.luxSquare = luxSquare;
		this.durSquare = durSquare;
		this.luxCapSquare = luxCapSquare;
		this.conSquare = conSquare;
		this.conCapSquare = conCapSquare;
		this.rectangle_7 = rectangle_7;
		this.commoditiesText = commoditiesText;
		this.luxValText = luxValText;
		this.conValText = conValText;
		this.durValText = durValText;
		this.timeText = timeText;
		this.timeValText = timeValText;
		this.conCapValText = conCapValText;
		this.durCapValText = durCapValText;
		this.luxCapValText = luxCapValText;
		this.plus = plus;
		this.minus = minus;
		this.stage = stage;
		this.stageText = stageText;
		this.buyButton = buyButton;
		this.buyButtonText = buyButtonText;
		this.sellButton = sellButton;
		this.sellButtonText = sellButtonText;
		this.noButton = noButton;
		this.noButtonText = noButtonText;
		this.yesButton = yesButton;
		this.yesButtonText = yesButtonText;
		this.ui = ui;

		this.events.emit("scene-awake");
	}
  /* START-USER-CODE */

  // Write more your code here

  preload() {
    this.load.pack("preloadpack", "assets/preloadpack.json");
  }
  async create() {
    const proto = 'wss'
    const host = 'tempusvalorem.net'
    const port = 8000
    const client = new Colyseus.Client(`${proto}://${host}:${port}`);

    const room=  await client.joinOrCreate('my_room');

    const scene=this;
   

    this.editorCreate();
  
      //lights
 new LightContainer(this, 671, 1369, "luxlight");
 new LightContainer(this, 441, 1369, "durlight");
 new LightContainer(this, 210, 1369, "conlight");
 new LightContainer(this, 671, 1578, "luxCapLight");
 new LightContainer(this, 441, 1578, "durCapLight");
 new LightContainer(this, 210, 1578, "conCapLight");
 this.tradeSubmitButton=this.add.rectangle(this.minus.x+30,this.plus.y-30,124,128,0xd3cf50).setStrokeStyle(4,0xffffff).setVisible(false);
this.tradeSubmitButtonText=this.add.bitmapText(this.minus.x+30,this.plus.y-30,"spaceCrusaders","submit\ntrade").setOrigin(0.5).setTint(0x3436738).setFontSize(30).setVisible(false);
this.endTradesButton=this.add.rectangle(this.tradeSubmitButton.x-this.tradeSubmitButton.width,this.plus.y-30, 124,128,0xd3cf50).setStrokeStyle(4,0xffffff).setVisible(false); 
this.endTradesButtonText=this.add.bitmapText(this.endTradesButton.x,this.plus.y-30,"spaceCrusaders","end\ntrades").setOrigin(0.5).setTint(0x3436738).setCenterAlign().setFontSize(30).setVisible(false);
this.startButton.visible=true;
this.startButtonText.visible=true;
this.ui.visible=false;
    this.startButton.setInteractive();
    this.startButton.on(
      "pointerdown",
      () => {
    
        console.log("button pressed");
        this.startButton.visible = false;
        this.startButtonText.visible = false;
        this.startButton.disableInteractive();
        this.startButtonText.disableInteractive();
           room.send('player ready');
      },
      this
    );
    this.tweens.add({
      targets: this.startButtonText,
      alpha: 0,
      duration: 1000,
      yoyo: true,
      loop: -1,
    });
    //group game objects

    this.allocationHandler = new allocationHandler(this, room);
    this.tradeHandler = new tradeHandler(this, room);
 
    room.onMessage('update', (data) => {
     this.updateText(this,data)
    },this)
  }
updateText(scene,data){

  scene.durValText.setText(data.dur)
  scene.conValText.setText(data.con)
  scene.luxValText.setText(data.lux)
  scene.durCapValText.setText(data.durCap)
  scene.conCapValText.setText(data.conCap)
  scene.luxCapValText.setText(data.luxCap)
  scene.timeValText.setText(data.time)
  scene.durVal=data.dur;
  scene.conVal=data.con;
  scene.luxVal=data.lux;
  scene.durCapVal=data.durCap;
  scene.conCapVal=data.conCap;
  scene.luxCapVal=data.luxCap;

 

}
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
