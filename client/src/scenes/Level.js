
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("preloadpack", "client/assets/preloadpack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(456, 802, 900, 1600);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4408131;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(440, 1497, 128, 128);
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 0;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(758, 1179, 128, 128);
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 0;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(440, 1179, 128, 128);
		rectangle_5.visible = false;
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 0;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(758, 1497, 128, 128);
		rectangle_4.visible = false;
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 0;

		// rectangle_6
		const rectangle_6 = this.add.rectangle(122, 1179, 128, 128);
		rectangle_6.visible = false;
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 0;

		// rectangle_7
		const rectangle_7 = this.add.rectangle(122, 968, 128, 128);
		rectangle_7.visible = false;
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;

		// rectangle_8
		const rectangle_8 = this.add.rectangle(122, 1497, 128, 128);
		rectangle_8.visible = false;
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 0;

		// commoditiesText
		const commoditiesText = this.add.bitmapText(33, 1052, "spaceCrusaders", "Consumables Durables Luxuries");
		commoditiesText.name = "commoditiesText";
		commoditiesText.visible = false;
		commoditiesText.tintFill = true;
		commoditiesText.tintTopLeft = 3436738;
		commoditiesText.tintTopRight = 3436738;
		commoditiesText.tintBottomLeft = 3436738;
		commoditiesText.text = "Consumables Durables Luxuries";
		commoditiesText.fontSize = 44;

		// consVal
		const consVal = this.add.bitmapText(728, 1144, "spaceCrusaders", "0");
		consVal.name = "consVal";
		consVal.visible = false;
		consVal.tintFill = true;
		consVal.text = "0";
		consVal.fontSize = 44;

		// durVal
		const durVal = this.add.bitmapText(114, 1145, "spaceCrusaders", "0");
		durVal.name = "durVal";
		durVal.visible = false;
		durVal.tintFill = true;
		durVal.text = "0";
		durVal.fontSize = 44;

		// luxVal
		const luxVal = this.add.bitmapText(421, 1145, "spaceCrusaders", "0");
		luxVal.name = "luxVal";
		luxVal.visible = false;
		luxVal.tintFill = true;
		luxVal.text = "0";
		luxVal.fontSize = 44;

		// submitButton   
		const submitButton___ = this.add.rectangle(394, 965.3333333333333, 350, 128);
		submitButton___.name = "submitButton   ";
		submitButton___.visible = false;
		submitButton___.isFilled = true;
		submitButton___.fillColor = 3436738;

		// Time
		const time = this.add.bitmapText(60, 836, "spaceCrusaders", "Time");
		time.name = "Time";
		time.visible = false;
		time.tintFill = true;
		time.tintTopLeft = 3436738;
		time.tintTopRight = 3436738;
		time.tintBottomLeft = 3436738;
		time.text = "Time";
		time.fontSize = 44;

		// capitalText
		const capitalText = this.add.bitmapText(26, 1361, "spaceCrusaders", "CONCAP      DURCAP       LUXCAP   ");
		capitalText.name = "capitalText";
		capitalText.visible = false;
		capitalText.tintFill = true;
		capitalText.tintTopLeft = 3436738;
		capitalText.tintTopRight = 3436738;
		capitalText.tintBottomLeft = 3436738;
		capitalText.text = "CONCAP      DURCAP       LUXCAP   ";
		capitalText.fontSize = 48;

		// timeVal
		const timeVal = this.add.bitmapText(102, 936, "spaceCrusaders", "0");
		timeVal.name = "timeVal";
		timeVal.visible = false;
		timeVal.tintFill = true;
		timeVal.text = "0";
		timeVal.fontSize = 48;

		// concapVal
		const concapVal = this.add.bitmapText(83, 1467, "spaceCrusaders", "0");
		concapVal.visible = false;
		concapVal.tintFill = true;
		concapVal.text = "0";
		concapVal.fontSize = 48;

		// durcapVal
		const durcapVal = this.add.bitmapText(417, 1454, "spaceCrusaders", "0");
		durcapVal.name = "durcapVal";
		durcapVal.visible = false;
		durcapVal.tintFill = true;
		durcapVal.text = "0";
		durcapVal.fontSize = 48;

		// luxcapVal
		const luxcapVal = this.add.bitmapText(736, 1473, "spaceCrusaders", "0");
		luxcapVal.name = "luxcapVal";
		luxcapVal.visible = false;
		luxcapVal.tintFill = true;
		luxcapVal.text = "0";
		luxcapVal.fontSize = 48;

		// plus
		const plus = this.add.bitmapText(604, 883.6666666666666, "spaceCrusaders", "+");
		plus.name = "plus";
		plus.visible = false;
		plus.tintFill = true;
		plus.tintTopLeft = 3436738;
		plus.tintTopRight = 3436738;
		plus.tintBottomLeft = 3436738;
		plus.text = "+";
		plus.fontSize = 128;

		// minus
		const minus = this.add.bitmapText(749, 883.6666666666666, "spaceCrusaders", "-");
		minus.name = "minus";
		minus.visible = false;
		minus.tintFill = true;
		minus.tintTopLeft = 3436738;
		minus.tintTopRight = 3436738;
		minus.tintBottomLeft = 3436738;
		minus.text = "-";
		minus.fontSize = 128;

		// submitButtonText
		const submitButtonText = this.add.bitmapText(254, 929.3333333333333, "spaceCrusaders", "submit");
		submitButtonText.name = "submitButtonText";
		submitButtonText.visible = false;
		submitButtonText.tintFill = true;
		submitButtonText.text = "submit";
		submitButtonText.fontSize = 72;

		// startButton
		const startButton = this.add.rectangle(458, 817, 350, 128);
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

		this.rectangle_2 = rectangle_2;
		this.rectangle_3 = rectangle_3;
		this.rectangle_5 = rectangle_5;
		this.rectangle_4 = rectangle_4;
		this.rectangle_6 = rectangle_6;
		this.rectangle_7 = rectangle_7;
		this.rectangle_8 = rectangle_8;
		this.consVal = consVal;
		this.durVal = durVal;
		this.luxVal = luxVal;
		this.submitButton___ = submitButton___;
		this.time = time;
		this.capitalText = capitalText;
		this.timeVal = timeVal;
		this.durcapVal = durcapVal;
		this.luxcapVal = luxcapVal;
		this.plus = plus;
		this.minus = minus;
		this.submitButtonText = submitButtonText;
		this.startButton = startButton;
		this.startButtonText = startButtonText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_3;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_5;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_7;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_8;
	/** @type {Phaser.GameObjects.BitmapText} */
	consVal;
	/** @type {Phaser.GameObjects.BitmapText} */
	durVal;
	/** @type {Phaser.GameObjects.BitmapText} */
	luxVal;
	/** @type {Phaser.GameObjects.Rectangle} */
	submitButton___;
	/** @type {Phaser.GameObjects.BitmapText} */
	time;
	/** @type {Phaser.GameObjects.BitmapText} */
	capitalText;
	/** @type {Phaser.GameObjects.BitmapText} */
	timeVal;
	/** @type {Phaser.GameObjects.BitmapText} */
	durcapVal;
	/** @type {Phaser.GameObjects.BitmapText} */
	luxcapVal;
	/** @type {Phaser.GameObjects.BitmapText} */
	plus;
	/** @type {Phaser.GameObjects.BitmapText} */
	minus;
	/** @type {Phaser.GameObjects.BitmapText} */
	submitButtonText;
	/** @type {Phaser.GameObjects.Rectangle} */
	startButton;
	/** @type {Phaser.GameObjects.BitmapText} */
	startButtonText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
