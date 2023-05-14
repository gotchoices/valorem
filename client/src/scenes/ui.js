// You can write more code here
import { allocationHandler } from "./allocation.js";
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
this.timeVal = 5;
this.concapVal=0;


    /* END-USER-CTR-CODE */
  }
 
  /** @returns {void} */
  editorCreate() {
	

		// rectangle_1
		const rectangle_1 = this.add.rectangle(456, 806, 900, 1600);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4408131;

		// startButton
		const startButton = this.add.rectangle(458, 816, 350, 128);
		startButton.name = "startButton";
		startButton.scaleX = 2.393893045909517;
		startButton.scaleY = 2.521037251429433;
		startButton.isFilled = true;
		startButton.fillColor = 3436738;

		// startButtonText
		const startButtonText = this.add.bitmapText(70, 773, "spaceCrusaders", "click here to start");
		startButtonText.name = "startButtonText";
		startButtonText.tintFill = true;
		startButtonText.text = "click here to start";
		startButtonText.fontSize = 72;

		// ui
		const ui = this.add.layer();
		ui.name = "ui";
		ui.visible = false;

		// durCapSquare
		const durCapSquare = this.add.rectangle(440, 1498, 128, 128);
		durCapSquare.name = "durCapSquare";
		durCapSquare.isFilled = true;
		durCapSquare.fillColor = 0;
		durCapSquare.isStroked = true;
		durCapSquare.lineWidth = 4;
		ui.add(durCapSquare);

		// luxSquare
		const luxSquare = this.add.rectangle(758, 1181, 128, 128);
		luxSquare.name = "luxSquare";
		luxSquare.isFilled = true;
		luxSquare.fillColor = 0;
		luxSquare.isStroked = true;
		luxSquare.lineWidth = 4;
		ui.add(luxSquare);

		// durSquare
		const durSquare = this.add.rectangle(440, 1180, 128, 128);
		durSquare.name = "durSquare";
		durSquare.isFilled = true;
		durSquare.fillColor = 0;
		durSquare.isStroked = true;
		durSquare.lineWidth = 4;
		ui.add(durSquare);

		// luxCapSquare
		const luxCapSquare = this.add.rectangle(758, 1498, 128, 128);
		luxCapSquare.name = "luxCapSquare";
		luxCapSquare.isFilled = true;
		luxCapSquare.fillColor = 0;
		luxCapSquare.isStroked = true;
		luxCapSquare.lineWidth = 4;
		ui.add(luxCapSquare);

		// conSquare
		const conSquare = this.add.rectangle(122, 1180, 128, 128);
		conSquare.name = "conSquare";
		conSquare.isFilled = true;
		conSquare.fillColor = 0;
		conSquare.isStroked = true;
		conSquare.lineWidth = 4;
		ui.add(conSquare);

		// conCapSquare
		const conCapSquare = this.add.rectangle(122, 1497, 128, 128);
		conCapSquare.name = "conCapSquare";
		conCapSquare.isFilled = true;
		conCapSquare.fillColor = 0;
		conCapSquare.isStroked = true;
		conCapSquare.lineWidth = 4;
		ui.add(conCapSquare);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(122, 967, 128, 128);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;
		rectangle_7.isStroked = true;
		rectangle_7.lineWidth = 4;
		ui.add(rectangle_7);

		// commoditiesText
		const commoditiesText = this.add.bitmapText(33, 1052, "spaceCrusaders", "Consumables Durables Luxuries");
		commoditiesText.name = "commoditiesText";
		commoditiesText.tintFill = true;
		commoditiesText.tintTopLeft = 3436738;
		commoditiesText.tintTopRight = 3436738;
		commoditiesText.tintBottomLeft = 3436738;
		commoditiesText.text = "Consumables Durables Luxuries";
		commoditiesText.fontSize = 44;
		ui.add(commoditiesText);

		// consValText
		const consValText = this.add.bitmapText(728, 1144, "spaceCrusaders", "0");
		consValText.name = "consValText";
		consValText.tintFill = true;
		consValText.text = "0";
		consValText.fontSize = 44;
		ui.add(consValText);

		// durValText
		const durValText = this.add.bitmapText(114, 1145, "spaceCrusaders", "0");
		durValText.name = "durValText";
		durValText.tintFill = true;
		durValText.text = "0";
		durValText.fontSize = 44;
		ui.add(durValText);

		// luxValText
		const luxValText = this.add.bitmapText(421, 1145, "spaceCrusaders", "0");
		luxValText.name = "luxValText";
		luxValText.tintFill = true;
		luxValText.text = "0";
		luxValText.fontSize = 44;
		ui.add(luxValText);

		// submitButton
		const submitButton = this.add.rectangle(394, 965.3333129882812, 350, 128);
		submitButton.name = "submitButton";
		submitButton.isFilled = true;
		submitButton.fillColor = 3436738;
		ui.add(submitButton);

		// Time
		const time = this.add.bitmapText(60, 836, "spaceCrusaders", "Time");
		time.name = "Time";
		time.tintFill = true;
		time.tintTopLeft = 3436738;
		time.tintTopRight = 3436738;
		time.tintBottomLeft = 3436738;
		time.text = "Time";
		time.fontSize = 44;
		ui.add(time);

		// capitalText
		const capitalText = this.add.bitmapText(26, 1361, "spaceCrusaders", "CONCAP      DURCAP       LUXCAP   ");
		capitalText.name = "capitalText";
		capitalText.tintFill = true;
		capitalText.tintTopLeft = 3436738;
		capitalText.tintTopRight = 3436738;
		capitalText.tintBottomLeft = 3436738;
		capitalText.text = "CONCAP      DURCAP       LUXCAP   ";
		capitalText.fontSize = 48;
		ui.add(capitalText);

		// timeValText
		const timeValText = this.add.bitmapText(102, 936, "spaceCrusaders", "0");
		timeValText.name = "timeValText";
		timeValText.tintFill = true;
		timeValText.text = "0";
		timeValText.fontSize = 48;
		ui.add(timeValText);

		// conCapValText
		const conCapValText = this.add.bitmapText(83, 1467, "spaceCrusaders", "0");
		conCapValText.name = "conCapValText";
		conCapValText.tintFill = true;
		conCapValText.text = "0";
		conCapValText.fontSize = 48;
		ui.add(conCapValText);

		// durCapValText
		const durCapValText = this.add.bitmapText(417, 1454, "spaceCrusaders", "0");
		durCapValText.name = "durCapValText";
		durCapValText.tintFill = true;
		durCapValText.text = "0";
		durCapValText.fontSize = 48;
		ui.add(durCapValText);

		// luxCapValText
		const luxCapValText = this.add.bitmapText(736, 1473, "spaceCrusaders", "0");
		luxCapValText.name = "luxCapValText";
		luxCapValText.tintFill = true;
		luxCapValText.text = "0";
		luxCapValText.fontSize = 48;
		ui.add(luxCapValText);

		// plus
		const plus = this.add.bitmapText(604, 883.6666870117188, "spaceCrusaders", "+");
		plus.name = "plus";
		plus.tintFill = true;
		plus.tintTopLeft = 3436738;
		plus.tintTopRight = 3436738;
		plus.tintBottomLeft = 3436738;
		plus.text = "+";
		plus.fontSize = 128;
		ui.add(plus);

		// minus
		const minus = this.add.bitmapText(749, 883.6666870117188, "spaceCrusaders", "-");
		minus.name = "minus";
		minus.tintFill = true;
		minus.tintTopLeft = 3436738;
		minus.tintTopRight = 3436738;
		minus.tintBottomLeft = 3436738;
		minus.text = "-";
		minus.fontSize = 128;
		ui.add(minus);

		// submitButtonText
		const submitButtonText = this.add.bitmapText(254, 928.3333129882812, "spaceCrusaders", "submit");
		submitButtonText.name = "submitButtonText";
		submitButtonText.scaleX = 0;
		submitButtonText.scaleY = 0;
		submitButtonText.tintFill = true;
		submitButtonText.text = "submit";
		submitButtonText.fontSize = 72;
		ui.add(submitButtonText);

		// luxlights
		const luxlights = this.add.container(721, 1277);
		luxlights.name = "luxlights";
		luxlights.visible = false;

		// luxlight5
		const luxlight5 = this.add.ellipse(80, 0, 10, 10);
		luxlight5.name = "luxlight5";
		luxlight5.isFilled = true;
		luxlights.add(luxlight5);

		// luxlight4
		const luxlight4 = this.add.ellipse(60, 0, 10, 10);
		luxlight4.name = "luxlight4";
		luxlight4.isFilled = true;
		luxlights.add(luxlight4);

		// luxlight3
		const luxlight3 = this.add.ellipse(40, 0, 10, 10);
		luxlight3.name = "luxlight3";
		luxlight3.isFilled = true;
		luxlights.add(luxlight3);

		// luxlight2
		const luxlight2 = this.add.ellipse(20, 0, 10, 10);
		luxlight2.name = "luxlight2";
		luxlight2.isFilled = true;
		luxlights.add(luxlight2);

		// luxlight1
		const luxlight1 = this.add.ellipse(0, 0, 10, 10);
		luxlight1.name = "luxlight1";
		luxlight1.isFilled = true;
		luxlights.add(luxlight1);

		// durlights
		const durlights = this.add.container(406, 1277);
		durlights.name = "durlights";
		durlights.visible = false;

		// durlight5
		const durlight5 = this.add.ellipse(80, 0, 10, 10);
		durlight5.name = "durlight5";
		durlight5.isFilled = true;
		durlights.add(durlight5);

		// durlight4
		const durlight4 = this.add.ellipse(60, 0, 10, 10);
		durlight4.name = "durlight4";
		durlight4.isFilled = true;
		durlights.add(durlight4);

		// durlight3
		const durlight3 = this.add.ellipse(40, 0, 10, 10);
		durlight3.name = "durlight3";
		durlight3.isFilled = true;
		durlights.add(durlight3);

		// durlight2
		const durlight2 = this.add.ellipse(20, 0, 10, 10);
		durlight2.name = "durlight2";
		durlight2.isFilled = true;
		durlights.add(durlight2);

		// durlight1
		const durlight1 = this.add.ellipse(0, 0, 10, 10);
		durlight1.name = "durlight1";
		durlight1.isFilled = true;
		durlights.add(durlight1);

		// conlights
		const conlights = this.add.container(91, 1277);
		conlights.name = "conlights";
		conlights.visible = false;

		// conlight5
		const conlight5 = this.add.ellipse(80, 0, 10, 10);
		conlight5.name = "conlight5";
		conlight5.isFilled = true;
		conlights.add(conlight5);

		// conlight4
		const conlight4 = this.add.ellipse(60, 0, 10, 10);
		conlight4.name = "conlight4";
		conlight4.isFilled = true;
		conlights.add(conlight4);

		// conlight3
		const conlight3 = this.add.ellipse(40, 0, 10, 10);
		conlight3.name = "conlight3";
		conlight3.isFilled = true;
		conlights.add(conlight3);

		// conlight2
		const conlight2 = this.add.ellipse(20, 0, 10, 10);
		conlight2.name = "conlight2";
		conlight2.isFilled = true;
		conlights.add(conlight2);

		// conlight1
		const conlight1 = this.add.ellipse(0, 0, 10, 10);
		conlight1.name = "conlight1";
		conlight1.isFilled = true;
		conlights.add(conlight1);

		// luxCapLights
		const luxCapLights = this.add.container(713, 1577);
		luxCapLights.name = "luxCapLights";
		luxCapLights.visible = false;

		// luxCapLight5
		const luxCapLight5 = this.add.ellipse(80, 0, 10, 10);
		luxCapLight5.name = "luxCapLight5";
		luxCapLight5.isFilled = true;
		luxCapLights.add(luxCapLight5);

		// luxCapLight4
		const luxCapLight4 = this.add.ellipse(60, 0, 10, 10);
		luxCapLight4.name = "luxCapLight4";
		luxCapLight4.isFilled = true;
		luxCapLights.add(luxCapLight4);

		// luxCapLight3
		const luxCapLight3 = this.add.ellipse(40, 0, 10, 10);
		luxCapLight3.name = "luxCapLight3";
		luxCapLight3.isFilled = true;
		luxCapLights.add(luxCapLight3);

		// luxCapLight2
		const luxCapLight2 = this.add.ellipse(20, 0, 10, 10);
		luxCapLight2.name = "luxCapLight2";
		luxCapLight2.isFilled = true;
		luxCapLights.add(luxCapLight2);

		// luxCapLight1
		const luxCapLight1 = this.add.ellipse(0, 0, 10, 10);
		luxCapLight1.name = "luxCapLight1";
		luxCapLight1.isFilled = true;
		luxCapLights.add(luxCapLight1);

		// durCapLights
		const durCapLights = this.add.container(398, 1577);
		durCapLights.name = "durCapLights";
		durCapLights.visible = false;

		// durCapLight5
		const durCapLight5 = this.add.ellipse(80, 0, 10, 10);
		durCapLight5.name = "durCapLight5";
		durCapLight5.isFilled = true;
		durCapLights.add(durCapLight5);

		// durCapLight4
		const durCapLight4 = this.add.ellipse(60, 0, 10, 10);
		durCapLight4.name = "durCapLight4";
		durCapLight4.isFilled = true;
		durCapLights.add(durCapLight4);

		// durCapLight3
		const durCapLight3 = this.add.ellipse(40, 0, 10, 10);
		durCapLight3.name = "durCapLight3";
		durCapLight3.isFilled = true;
		durCapLights.add(durCapLight3);

		// durCapLight2
		const durCapLight2 = this.add.ellipse(20, 0, 10, 10);
		durCapLight2.name = "durCapLight2";
		durCapLight2.isFilled = true;
		durCapLights.add(durCapLight2);

		// durCapLight1
		const durCapLight1 = this.add.ellipse(0, 0, 10, 10);
		durCapLight1.name = "durCapLight1";
		durCapLight1.isFilled = true;
		durCapLights.add(durCapLight1);

		// conCapLights
		const conCapLights = this.add.container(83, 1577);
		conCapLights.name = "conCapLights";
		conCapLights.visible = false;

		// conCapLight5
		const conCapLight5 = this.add.ellipse(80, 0, 10, 10);
		conCapLight5.name = "conCapLight5";
		conCapLight5.isFilled = true;
		conCapLights.add(conCapLight5);

		// conCapLight4
		const conCapLight4 = this.add.ellipse(60, 0, 10, 10);
		conCapLight4.name = "conCapLight4";
		conCapLight4.isFilled = true;
		conCapLights.add(conCapLight4);

		// conCapLight3
		const conCapLight3 = this.add.ellipse(40, 0, 10, 10);
		conCapLight3.name = "conCapLight3";
		conCapLight3.isFilled = true;
		conCapLights.add(conCapLight3);

		// conCapLight2
		const conCapLight2 = this.add.ellipse(20, 0, 10, 10);
		conCapLight2.name = "conCapLight2";
		conCapLight2.isFilled = true;
		conCapLights.add(conCapLight2);

		// conCapLight1
		const conCapLight1 = this.add.ellipse(0, 0, 10, 10);
		conCapLight1.name = "conCapLight1";
		conCapLight1.isFilled = true;
		conCapLights.add(conCapLight1);

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
		this.consValText = consValText;
		this.durValText = durValText;
		this.luxValText = luxValText;
		this.submitButton = submitButton;
		this.time = time;
		this.capitalText = capitalText;
		this.timeValText = timeValText;
		this.conCapValText = conCapValText;
		this.durCapValText = durCapValText;
		this.luxCapValText = luxCapValText;
		this.plus = plus;
		this.minus = minus;
		this.submitButtonText = submitButtonText;
		this.ui = ui;
		this.luxlight5 = luxlight5;
		this.luxlight4 = luxlight4;
		this.luxlight3 = luxlight3;
		this.luxlight2 = luxlight2;
		this.luxlight1 = luxlight1;
		this.luxlights = luxlights;
		this.durlight5 = durlight5;
		this.durlight4 = durlight4;
		this.durlight3 = durlight3;
		this.durlight2 = durlight2;
		this.durlight1 = durlight1;
		this.durlights = durlights;
		this.conlight5 = conlight5;
		this.conlight4 = conlight4;
		this.conlight3 = conlight3;
		this.conlight2 = conlight2;
		this.conlight1 = conlight1;
		this.conlights = conlights;
		this.luxCapLight5 = luxCapLight5;
		this.luxCapLight4 = luxCapLight4;
		this.luxCapLight3 = luxCapLight3;
		this.luxCapLight2 = luxCapLight2;
		this.luxCapLight1 = luxCapLight1;
		this.luxCapLights = luxCapLights;
		this.durCapLight5 = durCapLight5;
		this.durCapLight4 = durCapLight4;
		this.durCapLight3 = durCapLight3;
		this.durCapLight2 = durCapLight2;
		this.durCapLight1 = durCapLight1;
		this.durCapLights = durCapLights;
		this.conCapLight5 = conCapLight5;
		this.conCapLight4 = conCapLight4;
		this.conCapLight3 = conCapLight3;
		this.conCapLight2 = conCapLight2;
		this.conCapLight1 = conCapLight1;
		this.conCapLights = conCapLights;

		this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Text} */
  consValText;
  /** @type {Phaser.GameObjects.Text} */
  durValText;
  /** @type {Phaser.GameObjects.Text} */
  luxValText;
  /** @type {Phaser.GameObjects.Ellipse} */
  ellipse_1;

  /* START-USER-CODE */

  // Write more your code here

    preload(){
     

        this.load.pack("preloadpack", "assets/preloadpack.json");
      
    }
  async create() {

   const client = new Colyseus.Client("ws://localhost:8000");
   
   // const room=  await client.joinOrCreate('my_room');
      this.editorCreate();


    this.startButton.setInteractive();
      this.startButton.on('pointerdown', () => {
     //   room.send('player ready');
        console.log("button pressed");
		this.startButton.visible=false;
		this.startButtonText.visible=false;
		this.startButton.disableInteractive();
		this.startButtonText.disableInteractive();
		this.events.emit("begin allocation");
      },this);
      this.tweens.add({
        targets: this.startButtonText,
        alpha: 0,
        duration: 1000,
        yoyo: true,
        loop: -1


      })
  //group game objects
 
//run setText() on all text objects and set them to their corresponding values
this.timeValText.setText(this.timeVal);
this.consValText.setText(this.consVal);
this.durValText.setText(this.durVal);
this.luxValText.setText(this.luxVal);
this.durCapValText.setText(this.durCapVal);
this.luxCapValText.setText(this.luxCapVal);
this.conCapValText.setText(this.concapVal);




this.allocationHandler=new allocationHandler(this,null);

  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
