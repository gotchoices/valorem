
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
		const rectangle_1 = this.add.rectangle(456, 806, 900, 1600);
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
		const luxCapSquare = this.add.rectangle(758, 1497, 128, 128);
		luxCapSquare.name = "luxCapSquare";
		luxCapSquare.isFilled = true;
		luxCapSquare.fillColor = 0;
		luxCapSquare.isStroked = true;
		luxCapSquare.lineWidth = 4;
		ui.add(luxCapSquare);

		// conSquare
		const conSquare = this.add.rectangle(122, 1179, 128, 128);
		conSquare.name = "conSquare";
		conSquare.isFilled = true;
		conSquare.fillColor = 0;
		conSquare.isStroked = true;
		conSquare.lineWidth = 4;
		ui.add(conSquare);

		// conCapSquare
		const conCapSquare = this.add.rectangle(122, 1496, 128, 128);
		conCapSquare.name = "conCapSquare";
		conCapSquare.isFilled = true;
		conCapSquare.fillColor = 0;
		conCapSquare.isStroked = true;
		conCapSquare.lineWidth = 4;
		ui.add(conCapSquare);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(122, 966, 128, 128);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;
		rectangle_7.isStroked = true;
		rectangle_7.lineWidth = 4;
		ui.add(rectangle_7);

		// commoditiesText
		const commoditiesText = this.add.bitmapText(33, 1051, "spaceCrusaders", "Consumables Durables Luxuries");
		commoditiesText.name = "commoditiesText";
		commoditiesText.tintFill = true;
		commoditiesText.tintTopLeft = 3436738;
		commoditiesText.tintTopRight = 3436738;
		commoditiesText.tintBottomLeft = 3436738;
		commoditiesText.text = "Consumables Durables Luxuries";
		commoditiesText.fontSize = 44;
		ui.add(commoditiesText);

		// luxValText
		const luxValText = this.add.bitmapText(728, 1143, "spaceCrusaders", "0");
		luxValText.name = "luxValText";
		luxValText.tintFill = true;
		luxValText.text = "0";
		luxValText.fontSize = 44;
		ui.add(luxValText);

		// conValText
		const conValText = this.add.bitmapText(114, 1144, "spaceCrusaders", "0");
		conValText.name = "conValText";
		conValText.tintFill = true;
		conValText.text = "0";
		conValText.fontSize = 44;
		ui.add(conValText);

		// durValText
		const durValText = this.add.bitmapText(421, 1144, "spaceCrusaders", "0");
		durValText.name = "durValText";
		durValText.tintFill = true;
		durValText.text = "0";
		durValText.fontSize = 44;
		ui.add(durValText);

		// submitButton
		const submitButton = this.add.rectangle(394, 964.3333129882812, 350, 128);
		submitButton.name = "submitButton";
		submitButton.isFilled = true;
		submitButton.fillColor = 3436738;
		ui.add(submitButton);

		// timeText
		const timeText = this.add.bitmapText(60, 835, "spaceCrusaders", "Time");
		timeText.name = "timeText";
		timeText.tintFill = true;
		timeText.tintTopLeft = 3436738;
		timeText.tintTopRight = 3436738;
		timeText.tintBottomLeft = 3436738;
		timeText.text = "Time";
		timeText.fontSize = 44;
		ui.add(timeText);

		// capitalText
		const capitalText = this.add.bitmapText(26, 1360, "spaceCrusaders", "CONCAP      DURCAP       LUXCAP   ");
		capitalText.name = "capitalText";
		capitalText.tintFill = true;
		capitalText.tintTopLeft = 3436738;
		capitalText.tintTopRight = 3436738;
		capitalText.tintBottomLeft = 3436738;
		capitalText.text = "CONCAP      DURCAP       LUXCAP   ";
		capitalText.fontSize = 48;
		ui.add(capitalText);

		// timeValText
		const timeValText = this.add.bitmapText(102, 935, "spaceCrusaders", "0");
		timeValText.name = "timeValText";
		timeValText.tintFill = true;
		timeValText.text = "0";
		timeValText.fontSize = 48;
		ui.add(timeValText);

		// conCapValText
		const conCapValText = this.add.bitmapText(83, 1466, "spaceCrusaders", "0");
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
		const minus = this.add.bitmapText(750, 882.6666870117188, "spaceCrusaders", "-");
		minus.name = "minus";
		minus.tintFill = true;
		minus.tintTopLeft = 3436738;
		minus.tintTopRight = 3436738;
		minus.tintBottomLeft = 3436738;
		minus.text = "-";
		minus.fontSize = 128;
		ui.add(minus);

		// submitButtonText
		const submitButtonText = this.add.bitmapText(255, 927.3333129882812, "spaceCrusaders", "submit");
		submitButtonText.name = "submitButtonText";
		submitButtonText.tintFill = true;
		submitButtonText.text = "submit";
		submitButtonText.fontSize = 72;
		ui.add(submitButtonText);

		// stage
		const stage = this.add.rectangle(455, 409, 145, 145);
		stage.name = "stage";
		stage.scaleX = 5.827964926609718;
		stage.scaleY = 5.295269907558686;
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

		// luxlights
		const luxlights = this.add.container(721, 1277);
		luxlights.name = "luxlights";
		luxlights.visible = false;

		// luxlight5
		const luxlight5 = this.add.ellipse(80, 0, 10, 10);
		luxlight5.name = "luxlight5";
		luxlight5.isFilled = true;
		luxlight5.fillColor = 16711680;
		luxlights.add(luxlight5);

		// luxlight4
		const luxlight4 = this.add.ellipse(60, 0, 10, 10);
		luxlight4.name = "luxlight4";
		luxlight4.isFilled = true;
		luxlight4.fillColor = 16711680;
		luxlights.add(luxlight4);

		// luxlight3
		const luxlight3 = this.add.ellipse(40, 0, 10, 10);
		luxlight3.name = "luxlight3";
		luxlight3.isFilled = true;
		luxlight3.fillColor = 16711680;
		luxlights.add(luxlight3);

		// luxlight2
		const luxlight2 = this.add.ellipse(20, 0, 10, 10);
		luxlight2.name = "luxlight2";
		luxlight2.isFilled = true;
		luxlight2.fillColor = 16711680;
		luxlights.add(luxlight2);

		// luxlight1
		const luxlight1 = this.add.ellipse(0, 0, 10, 10);
		luxlight1.name = "luxlight1";
		luxlight1.isFilled = true;
		luxlight1.fillColor = 16711680;
		luxlights.add(luxlight1);

		// durlights
		const durlights = this.add.container(406, 1277);
		durlights.name = "durlights";
		durlights.visible = false;

		// durlight5
		const durlight5 = this.add.ellipse(80, 0, 10, 10);
		durlight5.name = "durlight5";
		durlight5.isFilled = true;
		durlight5.fillColor = 16711680;
		durlights.add(durlight5);

		// durlight4
		const durlight4 = this.add.ellipse(60, 0, 10, 10);
		durlight4.name = "durlight4";
		durlight4.isFilled = true;
		durlight4.fillColor = 16711680;
		durlights.add(durlight4);

		// durlight3
		const durlight3 = this.add.ellipse(40, 0, 10, 10);
		durlight3.name = "durlight3";
		durlight3.isFilled = true;
		durlight3.fillColor = 16711680;
		durlights.add(durlight3);

		// durlight2
		const durlight2 = this.add.ellipse(20, 0, 10, 10);
		durlight2.name = "durlight2";
		durlight2.isFilled = true;
		durlight2.fillColor = 16711680;
		durlights.add(durlight2);

		// durlight1
		const durlight1 = this.add.ellipse(0, 0, 10, 10);
		durlight1.name = "durlight1";
		durlight1.isFilled = true;
		durlight1.fillColor = 16711680;
		durlights.add(durlight1);

		// conlights
		const conlights = this.add.container(91, 1277);
		conlights.name = "conlights";
		conlights.visible = false;

		// conlight5
		const conlight5 = this.add.ellipse(80, 0, 10, 10);
		conlight5.name = "conlight5";
		conlight5.isFilled = true;
		conlight5.fillColor = 16711680;
		conlights.add(conlight5);

		// conlight4
		const conlight4 = this.add.ellipse(60, 0, 10, 10);
		conlight4.name = "conlight4";
		conlight4.isFilled = true;
		conlight4.fillColor = 16711680;
		conlights.add(conlight4);

		// conlight3
		const conlight3 = this.add.ellipse(40, 0, 10, 10);
		conlight3.name = "conlight3";
		conlight3.isFilled = true;
		conlight3.fillColor = 16711680;
		conlights.add(conlight3);

		// conlight2
		const conlight2 = this.add.ellipse(20, 0, 10, 10);
		conlight2.name = "conlight2";
		conlight2.isFilled = true;
		conlight2.fillColor = 16711680;
		conlights.add(conlight2);

		// conlight1
		const conlight1 = this.add.ellipse(0, 0, 10, 10);
		conlight1.name = "conlight1";
		conlight1.isFilled = true;
		conlight1.fillColor = 16711680;
		conlights.add(conlight1);

		// luxCapLights
		const luxCapLights = this.add.container(713, 1577);
		luxCapLights.name = "luxCapLights";
		luxCapLights.visible = false;

		// luxCapLight5
		const luxCapLight5 = this.add.ellipse(80, 0, 10, 10);
		luxCapLight5.name = "luxCapLight5";
		luxCapLight5.isFilled = true;
		luxCapLight5.fillColor = 16711680;
		luxCapLights.add(luxCapLight5);

		// luxCapLight4
		const luxCapLight4 = this.add.ellipse(60, 0, 10, 10);
		luxCapLight4.name = "luxCapLight4";
		luxCapLight4.isFilled = true;
		luxCapLight4.fillColor = 16711680;
		luxCapLights.add(luxCapLight4);

		// luxCapLight3
		const luxCapLight3 = this.add.ellipse(40, 0, 10, 10);
		luxCapLight3.name = "luxCapLight3";
		luxCapLight3.isFilled = true;
		luxCapLight3.fillColor = 16711680;
		luxCapLights.add(luxCapLight3);

		// luxCapLight2
		const luxCapLight2 = this.add.ellipse(20, 0, 10, 10);
		luxCapLight2.name = "luxCapLight2";
		luxCapLight2.isFilled = true;
		luxCapLight2.fillColor = 16711680;
		luxCapLights.add(luxCapLight2);

		// luxCapLight1
		const luxCapLight1 = this.add.ellipse(0, 0, 10, 10);
		luxCapLight1.name = "luxCapLight1";
		luxCapLight1.isFilled = true;
		luxCapLight1.fillColor = 16711680;
		luxCapLights.add(luxCapLight1);

		// durCapLights
		const durCapLights = this.add.container(398, 1577);
		durCapLights.name = "durCapLights";
		durCapLights.visible = false;

		// durCapLight5
		const durCapLight5 = this.add.ellipse(80, 0, 10, 10);
		durCapLight5.name = "durCapLight5";
		durCapLight5.isFilled = true;
		durCapLight5.fillColor = 16711680;
		durCapLights.add(durCapLight5);

		// durCapLight4
		const durCapLight4 = this.add.ellipse(60, 0, 10, 10);
		durCapLight4.name = "durCapLight4";
		durCapLight4.isFilled = true;
		durCapLight4.fillColor = 16711680;
		durCapLights.add(durCapLight4);

		// durCapLight3
		const durCapLight3 = this.add.ellipse(40, 0, 10, 10);
		durCapLight3.name = "durCapLight3";
		durCapLight3.isFilled = true;
		durCapLight3.fillColor = 16711680;
		durCapLights.add(durCapLight3);

		// durCapLight2
		const durCapLight2 = this.add.ellipse(20, 0, 10, 10);
		durCapLight2.name = "durCapLight2";
		durCapLight2.isFilled = true;
		durCapLight2.fillColor = 16711680;
		durCapLights.add(durCapLight2);

		// durCapLight1
		const durCapLight1 = this.add.ellipse(0, 0, 10, 10);
		durCapLight1.name = "durCapLight1";
		durCapLight1.isFilled = true;
		durCapLight1.fillColor = 16711680;
		durCapLights.add(durCapLight1);

		// conCapLights
		const conCapLights = this.add.container(83, 1577);
		conCapLights.name = "conCapLights";
		conCapLights.visible = false;

		// conCapLight5
		const conCapLight5 = this.add.ellipse(80, 0, 10, 10);
		conCapLight5.name = "conCapLight5";
		conCapLight5.isFilled = true;
		conCapLight5.fillColor = 16711680;
		conCapLights.add(conCapLight5);

		// conCapLight4
		const conCapLight4 = this.add.ellipse(60, 0, 10, 10);
		conCapLight4.name = "conCapLight4";
		conCapLight4.isFilled = true;
		conCapLight4.fillColor = 16711680;
		conCapLights.add(conCapLight4);

		// conCapLight3
		const conCapLight3 = this.add.ellipse(40, 0, 10, 10);
		conCapLight3.name = "conCapLight3";
		conCapLight3.isFilled = true;
		conCapLight3.fillColor = 16711680;
		conCapLights.add(conCapLight3);

		// conCapLight2
		const conCapLight2 = this.add.ellipse(20, 0, 10, 10);
		conCapLight2.name = "conCapLight2";
		conCapLight2.isFilled = true;
		conCapLight2.fillColor = 16711680;
		conCapLights.add(conCapLight2);

		// conCapLight1
		const conCapLight1 = this.add.ellipse(0, 0, 10, 10);
		conCapLight1.name = "conCapLight1";
		conCapLight1.isFilled = true;
		conCapLight1.fillColor = 16711680;
		conCapLights.add(conCapLight1);

		// tradeUI
		const tradeUI = this.add.layer();
		tradeUI.name = "tradeUI";
		tradeUI.visible = false;

		// tradeStage
		const tradeStage = this.add.rectangle(455, 409, 145, 145);
		tradeStage.name = "tradeStage";
		tradeStage.scaleX = 5.827964926609718;
		tradeStage.scaleY = 5.295269907558686;
		tradeStage.isFilled = true;
		tradeStage.fillColor = 0;
		tradeStage.isStroked = true;
		tradeStage.strokeColor = 10329501;
		tradeStage.lineWidth = 4;
		tradeUI.add(tradeStage);

		// tradeStageText
		const tradeStageText = this.add.bitmapText(475, 259, "spaceCrusaders", "TRADE\nHOLDINGS");
		tradeStageText.name = "tradeStageText";
		tradeStageText.setOrigin(0.5, 0);
		tradeStageText.tintFill = true;
		tradeStageText.tintTopLeft = 3436738;
		tradeStageText.tintTopRight = 3436738;
		tradeStageText.tintBottomLeft = 3436738;
		tradeStageText.text = "TRADE\nHOLDINGS";
		tradeStageText.fontSize = 150;
		tradeStageText.align = 1;
		tradeUI.add(tradeStageText);

		// capitalText_1
		const capitalText_1 = this.add.bitmapText(26, 1360, "spaceCrusaders", "CONCAP      DURCAP       LUXCAP   ");
		capitalText_1.name = "capitalText_1";
		capitalText_1.tintFill = true;
		capitalText_1.tintTopLeft = 3436738;
		capitalText_1.tintTopRight = 3436738;
		capitalText_1.tintBottomLeft = 3436738;
		capitalText_1.text = "CONCAP      DURCAP       LUXCAP   ";
		capitalText_1.fontSize = 48;
		tradeUI.add(capitalText_1);

		// Time_1
		const time_1 = this.add.bitmapText(60, 835, "spaceCrusaders", "Time");
		time_1.name = "Time_1";
		time_1.tintFill = true;
		time_1.tintTopLeft = 3436738;
		time_1.tintTopRight = 3436738;
		time_1.tintBottomLeft = 3436738;
		time_1.text = "Time";
		time_1.fontSize = 44;
		tradeUI.add(time_1);

		// submitButton_1
		const submitButton_1 = this.add.rectangle(394, 964, 350, 128);
		submitButton_1.name = "submitButton_1";
		submitButton_1.isFilled = true;
		submitButton_1.fillColor = 3436738;
		tradeUI.add(submitButton_1);

		// rectangle
		const rectangle = this.add.rectangle(122, 966, 128, 128);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.isStroked = true;
		rectangle.lineWidth = 4;
		tradeUI.add(rectangle);

		// conCapSquare_1
		const conCapSquare_1 = this.add.rectangle(122, 1496, 128, 128);
		conCapSquare_1.name = "conCapSquare_1";
		conCapSquare_1.isFilled = true;
		conCapSquare_1.fillColor = 0;
		conCapSquare_1.isStroked = true;
		conCapSquare_1.lineWidth = 4;
		tradeUI.add(conCapSquare_1);

		// conSquare_1
		const conSquare_1 = this.add.rectangle(122, 1179, 128, 128);
		conSquare_1.name = "conSquare_1";
		conSquare_1.isFilled = true;
		conSquare_1.fillColor = 0;
		conSquare_1.isStroked = true;
		conSquare_1.lineWidth = 4;
		tradeUI.add(conSquare_1);

		// luxCapSquare_1
		const luxCapSquare_1 = this.add.rectangle(758, 1497, 128, 128);
		luxCapSquare_1.name = "luxCapSquare_1";
		luxCapSquare_1.isFilled = true;
		luxCapSquare_1.fillColor = 0;
		luxCapSquare_1.isStroked = true;
		luxCapSquare_1.lineWidth = 4;
		tradeUI.add(luxCapSquare_1);

		// durSquare_1
		const durSquare_1 = this.add.rectangle(440, 1180, 128, 128);
		durSquare_1.name = "durSquare_1";
		durSquare_1.isFilled = true;
		durSquare_1.fillColor = 0;
		durSquare_1.isStroked = true;
		durSquare_1.lineWidth = 4;
		tradeUI.add(durSquare_1);

		// luxSquare_1
		const luxSquare_1 = this.add.rectangle(758, 1181, 128, 128);
		luxSquare_1.name = "luxSquare_1";
		luxSquare_1.isFilled = true;
		luxSquare_1.fillColor = 0;
		luxSquare_1.isStroked = true;
		luxSquare_1.lineWidth = 4;
		tradeUI.add(luxSquare_1);

		// durCapSquare_1
		const durCapSquare_1 = this.add.rectangle(440, 1498, 128, 128);
		durCapSquare_1.name = "durCapSquare_1";
		durCapSquare_1.isFilled = true;
		durCapSquare_1.fillColor = 0;
		durCapSquare_1.isStroked = true;
		durCapSquare_1.lineWidth = 4;
		tradeUI.add(durCapSquare_1);

		// tradeMinus
		const tradeMinus = this.add.bitmapText(751, 883, "spaceCrusaders", "-");
		tradeMinus.name = "tradeMinus";
		tradeMinus.tintFill = true;
		tradeMinus.tintTopLeft = 3436738;
		tradeMinus.tintTopRight = 3436738;
		tradeMinus.tintBottomLeft = 3436738;
		tradeMinus.text = "-";
		tradeMinus.fontSize = 128;
		tradeUI.add(tradeMinus);

		// tradePlus
		const tradePlus = this.add.bitmapText(605, 884, "spaceCrusaders", "+");
		tradePlus.name = "tradePlus";
		tradePlus.tintFill = true;
		tradePlus.tintTopLeft = 3436738;
		tradePlus.tintTopRight = 3436738;
		tradePlus.tintBottomLeft = 3436738;
		tradePlus.text = "+";
		tradePlus.fontSize = 128;
		tradeUI.add(tradePlus);

		// tradeLuxCapValText
		const tradeLuxCapValText = this.add.bitmapText(736, 1473, "spaceCrusaders", "0");
		tradeLuxCapValText.name = "tradeLuxCapValText";
		tradeLuxCapValText.tintFill = true;
		tradeLuxCapValText.text = "0";
		tradeLuxCapValText.fontSize = 48;
		tradeUI.add(tradeLuxCapValText);

		// tradeDurCapValText
		const tradeDurCapValText = this.add.bitmapText(417, 1454, "spaceCrusaders", "0");
		tradeDurCapValText.name = "tradeDurCapValText";
		tradeDurCapValText.tintFill = true;
		tradeDurCapValText.text = "0";
		tradeDurCapValText.fontSize = 48;
		tradeUI.add(tradeDurCapValText);

		// tradeConCapValText
		const tradeConCapValText = this.add.bitmapText(83, 1466, "spaceCrusaders", "0");
		tradeConCapValText.name = "tradeConCapValText";
		tradeConCapValText.tintFill = true;
		tradeConCapValText.text = "0";
		tradeConCapValText.fontSize = 48;
		tradeUI.add(tradeConCapValText);

		// tradeTime ValText
		const tradeTime_ValText = this.add.bitmapText(102, 935, "spaceCrusaders", "0");
		tradeTime_ValText.name = "tradeTime ValText";
		tradeTime_ValText.tintFill = true;
		tradeTime_ValText.text = "0";
		tradeTime_ValText.fontSize = 48;
		tradeUI.add(tradeTime_ValText);

		// tradeDurValText
		const tradeDurValText = this.add.bitmapText(421, 1144, "spaceCrusaders", "0");
		tradeDurValText.name = "tradeDurValText";
		tradeDurValText.tintFill = true;
		tradeDurValText.text = "0";
		tradeDurValText.fontSize = 44;
		tradeUI.add(tradeDurValText);

		// tradeConValText
		const tradeConValText = this.add.bitmapText(114, 1144, "spaceCrusaders", "0");
		tradeConValText.name = "tradeConValText";
		tradeConValText.tintFill = true;
		tradeConValText.text = "0";
		tradeConValText.fontSize = 44;
		tradeUI.add(tradeConValText);

		// tradeLuxValText
		const tradeLuxValText = this.add.bitmapText(728, 1143, "spaceCrusaders", "0");
		tradeLuxValText.name = "tradeLuxValText";
		tradeLuxValText.tintFill = true;
		tradeLuxValText.text = "0";
		tradeLuxValText.fontSize = 44;
		tradeUI.add(tradeLuxValText);

		// commoditiesText_1
		const commoditiesText_1 = this.add.bitmapText(33, 1051, "spaceCrusaders", "Consumables Durables Luxuries");
		commoditiesText_1.name = "commoditiesText_1";
		commoditiesText_1.tintFill = true;
		commoditiesText_1.tintTopLeft = 3436738;
		commoditiesText_1.tintTopRight = 3436738;
		commoditiesText_1.tintBottomLeft = 3436738;
		commoditiesText_1.text = "Consumables Durables Luxuries";
		commoditiesText_1.fontSize = 44;
		tradeUI.add(commoditiesText_1);

		this.startButton = startButton;
		this.startButtonText = startButtonText;
		this.ui = ui;
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
		this.submitButton = submitButton;
		this.timeText = timeText;
		this.capitalText = capitalText;
		this.timeValText = timeValText;
		this.conCapValText = conCapValText;
		this.durCapValText = durCapValText;
		this.luxCapValText = luxCapValText;
		this.plus = plus;
		this.minus = minus;
		this.submitButtonText = submitButtonText;
		this.stage = stage;
		this.stageText = stageText;
		this.luxlights = luxlights;
		this.luxlight5 = luxlight5;
		this.luxlight4 = luxlight4;
		this.luxlight3 = luxlight3;
		this.luxlight2 = luxlight2;
		this.luxlight1 = luxlight1;
		this.durlights = durlights;
		this.durlight5 = durlight5;
		this.durlight4 = durlight4;
		this.durlight3 = durlight3;
		this.durlight2 = durlight2;
		this.durlight1 = durlight1;
		this.conlights = conlights;
		this.conlight5 = conlight5;
		this.conlight4 = conlight4;
		this.conlight3 = conlight3;
		this.conlight2 = conlight2;
		this.conlight1 = conlight1;
		this.luxCapLights = luxCapLights;
		this.luxCapLight5 = luxCapLight5;
		this.luxCapLight4 = luxCapLight4;
		this.luxCapLight3 = luxCapLight3;
		this.luxCapLight2 = luxCapLight2;
		this.luxCapLight1 = luxCapLight1;
		this.durCapLights = durCapLights;
		this.durCapLight5 = durCapLight5;
		this.durCapLight4 = durCapLight4;
		this.durCapLight3 = durCapLight3;
		this.durCapLight2 = durCapLight2;
		this.durCapLight1 = durCapLight1;
		this.conCapLights = conCapLights;
		this.conCapLight5 = conCapLight5;
		this.conCapLight4 = conCapLight4;
		this.conCapLight3 = conCapLight3;
		this.conCapLight2 = conCapLight2;
		this.conCapLight1 = conCapLight1;
		this.tradeUI = tradeUI;
		this.tradeStage = tradeStage;
		this.tradeStageText = tradeStageText;
		this.capitalText_1 = capitalText_1;
		this.time_1 = time_1;
		this.submitButton_1 = submitButton_1;
		this.rectangle = rectangle;
		this.conCapSquare_1 = conCapSquare_1;
		this.conSquare_1 = conSquare_1;
		this.luxCapSquare_1 = luxCapSquare_1;
		this.durSquare_1 = durSquare_1;
		this.luxSquare_1 = luxSquare_1;
		this.durCapSquare_1 = durCapSquare_1;
		this.tradeMinus = tradeMinus;
		this.tradePlus = tradePlus;
		this.tradeLuxCapValText = tradeLuxCapValText;
		this.tradeDurCapValText = tradeDurCapValText;
		this.tradeConCapValText = tradeConCapValText;
		this.tradeTime_ValText = tradeTime_ValText;
		this.tradeDurValText = tradeDurValText;
		this.tradeConValText = tradeConValText;
		this.tradeLuxValText = tradeLuxValText;
		this.commoditiesText_1 = commoditiesText_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	startButton;
	/** @type {Phaser.GameObjects.BitmapText} */
	startButtonText;
	/** @type {Phaser.GameObjects.Layer} */
	ui;
	/** @type {Phaser.GameObjects.Rectangle} */
	durCapSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	luxSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	durSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	luxCapSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	conSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	conCapSquare;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_7;
	/** @type {Phaser.GameObjects.BitmapText} */
	commoditiesText;
	/** @type {Phaser.GameObjects.BitmapText} */
	luxValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	conValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	durValText;
	/** @type {Phaser.GameObjects.Rectangle} */
	submitButton;
	/** @type {Phaser.GameObjects.BitmapText} */
	timeText;
	/** @type {Phaser.GameObjects.BitmapText} */
	capitalText;
	/** @type {Phaser.GameObjects.BitmapText} */
	timeValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	conCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	durCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	luxCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	plus;
	/** @type {Phaser.GameObjects.BitmapText} */
	minus;
	/** @type {Phaser.GameObjects.BitmapText} */
	submitButtonText;
	/** @type {Phaser.GameObjects.Rectangle} */
	stage;
	/** @type {Phaser.GameObjects.BitmapText} */
	stageText;
	/** @type {Phaser.GameObjects.Container} */
	luxlights;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxlight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxlight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxlight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxlight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxlight1;
	/** @type {Phaser.GameObjects.Container} */
	durlights;
	/** @type {Phaser.GameObjects.Ellipse} */
	durlight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	durlight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	durlight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	durlight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	durlight1;
	/** @type {Phaser.GameObjects.Container} */
	conlights;
	/** @type {Phaser.GameObjects.Ellipse} */
	conlight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	conlight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	conlight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	conlight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	conlight1;
	/** @type {Phaser.GameObjects.Container} */
	luxCapLights;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxCapLight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxCapLight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxCapLight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxCapLight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	luxCapLight1;
	/** @type {Phaser.GameObjects.Container} */
	durCapLights;
	/** @type {Phaser.GameObjects.Ellipse} */
	durCapLight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	durCapLight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	durCapLight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	durCapLight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	durCapLight1;
	/** @type {Phaser.GameObjects.Container} */
	conCapLights;
	/** @type {Phaser.GameObjects.Ellipse} */
	conCapLight5;
	/** @type {Phaser.GameObjects.Ellipse} */
	conCapLight4;
	/** @type {Phaser.GameObjects.Ellipse} */
	conCapLight3;
	/** @type {Phaser.GameObjects.Ellipse} */
	conCapLight2;
	/** @type {Phaser.GameObjects.Ellipse} */
	conCapLight1;
	/** @type {Phaser.GameObjects.Layer} */
	tradeUI;
	/** @type {Phaser.GameObjects.Rectangle} */
	tradeStage;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeStageText;
	/** @type {Phaser.GameObjects.BitmapText} */
	capitalText_1;
	/** @type {Phaser.GameObjects.BitmapText} */
	time_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	submitButton_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Rectangle} */
	conCapSquare_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	conSquare_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	luxCapSquare_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	durSquare_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	luxSquare_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	durCapSquare_1;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeMinus;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradePlus;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeLuxCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeDurCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeConCapValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeTime_ValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeDurValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeConValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	tradeLuxValText;
	/** @type {Phaser.GameObjects.BitmapText} */
	commoditiesText_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
