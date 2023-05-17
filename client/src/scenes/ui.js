// You can write more code here
import { allocationHandler } from "./allocation.js";
import { tradeHandler } from "./trading.js";
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
    const startButtonText = this.add.bitmapText(
      46.25,
      773,
      "spaceCrusaders",
      "click here to start"
    );
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
    const rectangle_7 = this.add.rectangle(122, 966, 128, 128);
    rectangle_7.isFilled = true;
    rectangle_7.fillColor = 0;
    rectangle_7.isStroked = true;
    rectangle_7.lineWidth = 4;
    ui.add(rectangle_7);

    // commoditiesText
    const commoditiesText = this.add.bitmapText(
      35,
      1122,
      "spaceCrusaders",
      "Consumables Durables Luxuries"
    );
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
    const durValText = this.add.bitmapText(460, 1468, "spaceCrusaders", "0");
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
    const timeValText = this.add.bitmapText(102, 935, "spaceCrusaders", "0");
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
    const durCapValText = this.add.bitmapText(460, 1227, "spaceCrusaders", "0");
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
    const plus = this.add.bitmapText(
      644,
      884.6666870117188,
      "spaceCrusaders",
      "+"
    );
    plus.name = "plus";
    plus.tintFill = true;
    plus.tintTopLeft = 3436738;
    plus.tintTopRight = 3436738;
    plus.tintBottomLeft = 3436738;
    plus.text = "+";
    plus.fontSize = 128;
    ui.add(plus);

    // minus
    const minus = this.add.bitmapText(
      790,
      882.6666870117188,
      "spaceCrusaders",
      "-"
    );
    minus.name = "minus";
    minus.tintFill = true;
    minus.tintTopLeft = 3436738;
    minus.tintTopRight = 3436738;
    minus.tintBottomLeft = 3436738;
    minus.text = "-";
    minus.fontSize = 128;
    ui.add(minus);

    // submitButtonText
    const submitButtonText = this.add.bitmapText(
      255,
      927.3333129882812,
      "spaceCrusaders",
      "submit"
    );
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
    const stageText = this.add.bitmapText(
      475,
      258,
      "spaceCrusaders",
      "Allocate \nTime"
    );
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

    // buyButton
    const buyButton = this.add.rectangle(79, 951, 124, 128);
    buyButton.name = "buyButton";
    buyButton.visible = false;
    buyButton.isFilled = true;
    buyButton.fillColor = 12457024;
    buyButton.isStroked = true;
    buyButton.lineWidth = 4;
    ui.add(buyButton);

    // buyButtonText
    const buyButtonText = this.add.bitmapText(31, 927, "spaceCrusaders", "Buy");
    buyButtonText.name = "buyButtonText";
    buyButtonText.visible = false;
    buyButtonText.tintFill = true;
    buyButtonText.tintTopLeft = 3436738;
    buyButtonText.tintBottomRight = 3436738;
    buyButtonText.text = "Buy";
    buyButtonText.fontSize = 48;
    ui.add(buyButtonText);

    // sellButton
    const sellButton = this.add.rectangle(237, 951, 124, 128);
    sellButton.name = "sellButton";
    sellButton.visible = false;
    sellButton.isFilled = true;
    sellButton.fillColor = 12457024;
    sellButton.isStroked = true;
    sellButton.lineWidth = 4;
    ui.add(sellButton);

    // sellButtonText
    const sellButtonText = this.add.bitmapText(
      189,
      927,
      "spaceCrusaders",
      "Sell"
    );
    sellButtonText.name = "sellButtonText";
    sellButtonText.visible = false;
    sellButtonText.tintFill = true;
    sellButtonText.tintTopLeft = 3436738;
    sellButtonText.tintBottomRight = 3436738;
    sellButtonText.text = "Sell";
    sellButtonText.fontSize = 48;
    ui.add(sellButtonText);

    // noButton
    const noButton = this.add.rectangle(540, 951, 124, 128);
    noButton.name = "noButton";
    noButton.visible = false;
    noButton.isFilled = true;
    noButton.fillColor = 16725558;
    noButton.isStroked = true;
    noButton.lineWidth = 4;
    ui.add(noButton);

    // noButtonText
    const noButtonText = this.add.bitmapText(492, 927, "spaceCrusaders", "no");
    noButtonText.name = "noButtonText";
    noButtonText.visible = false;
    noButtonText.tintFill = true;
    noButtonText.tintTopLeft = 3436738;
    noButtonText.tintBottomRight = 3436738;
    noButtonText.text = "no";
    noButtonText.fontSize = 48;
    ui.add(noButtonText);

    // yesButton
    const yesButton = this.add.rectangle(382, 951, 124, 128);
    yesButton.name = "yesButton";
    yesButton.visible = false;
    yesButton.isFilled = true;
    yesButton.fillColor = 4127806;
    yesButton.isStroked = true;
    yesButton.lineWidth = 4;
    ui.add(yesButton);

    // yesButtonText
    const yesButtonText = this.add.bitmapText(
      334,
      927,
      "spaceCrusaders",
      "yes"
    );
    yesButtonText.name = "yesButtonText";
    yesButtonText.visible = false;
    yesButtonText.tintFill = true;
    yesButtonText.tintTopLeft = 3436738;
    yesButtonText.tintBottomRight = 3436738;
    yesButtonText.text = "yes";
    yesButtonText.fontSize = 48;
    ui.add(yesButtonText);

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
    const capitalText = this.add.bitmapText(
      93,
      1593,
      "spaceCrusaders",
      "capital"
    );
    capitalText.name = "capitalText";
    capitalText.angle = -90;
    capitalText.tintFill = true;
    capitalText.tintTopLeft = 3436738;
    capitalText.tintTopRight = 3436738;
    capitalText.tintBottomLeft = 3436738;
    capitalText.text = "capital";
    capitalText.fontSize = 48;
    ui.add(capitalText);

    // luxlights
    const luxlights = this.add.container(671, 1369);
    luxlights.name = "luxlights";
    luxlights.visible = false;

    // luxlight5
    const luxlight5 = this.add.ellipse(80, 0, 10, 10);
    luxlight5.name = "luxlight5";
    luxlight5.isFilled = true;
    luxlight5.fillColor = 16711680;
    luxlights.add(luxlight5);

    // luxlight4
    const luxlight4 = this.add.ellipse(60, -1, 10, 10);
    luxlight4.name = "luxlight4";
    luxlight4.isFilled = true;
    luxlight4.fillColor = 16711680;
    luxlights.add(luxlight4);

    // luxlight3
    const luxlight3 = this.add.ellipse(40, -1, 10, 10);
    luxlight3.name = "luxlight3";
    luxlight3.isFilled = true;
    luxlight3.fillColor = 16711680;
    luxlights.add(luxlight3);

    // luxlight2
    const luxlight2 = this.add.ellipse(20, -1, 10, 10);
    luxlight2.name = "luxlight2";
    luxlight2.isFilled = true;
    luxlight2.fillColor = 16711680;
    luxlights.add(luxlight2);

    // luxlight1
    const luxlight1 = this.add.ellipse(0, -1, 10, 10);
    luxlight1.name = "luxlight1";
    luxlight1.isFilled = true;
    luxlight1.fillColor = 16711680;
    luxlights.add(luxlight1);

    // durlights
    const durlights = this.add.container(441, 1369);
    durlights.name = "durlights";
    durlights.visible = false;

    // durlight5
    const durlight5 = this.add.ellipse(80, 0, 10, 10);
    durlight5.name = "durlight5";
    durlight5.isFilled = true;
    durlight5.fillColor = 16711680;
    durlights.add(durlight5);

    // durlight4
    const durlight4 = this.add.ellipse(60, -1, 10, 10);
    durlight4.name = "durlight4";
    durlight4.isFilled = true;
    durlight4.fillColor = 16711680;
    durlights.add(durlight4);

    // durlight3
    const durlight3 = this.add.ellipse(40, -1, 10, 10);
    durlight3.name = "durlight3";
    durlight3.isFilled = true;
    durlight3.fillColor = 16711680;
    durlights.add(durlight3);

    // durlight2
    const durlight2 = this.add.ellipse(20, -1, 10, 10);
    durlight2.name = "durlight2";
    durlight2.isFilled = true;
    durlight2.fillColor = 16711680;
    durlights.add(durlight2);

    // durlight1
    const durlight1 = this.add.ellipse(0, -1, 10, 10);
    durlight1.name = "durlight1";
    durlight1.isFilled = true;
    durlight1.fillColor = 16711680;
    durlights.add(durlight1);

    // conlights
    const conlights = this.add.container(210, 1369);
    conlights.name = "conlights";
    conlights.visible = false;

    // conlight5
    const conlight5 = this.add.ellipse(80, 0, 10, 10);
    conlight5.name = "conlight5";
    conlight5.isFilled = true;
    conlight5.fillColor = 16711680;
    conlights.add(conlight5);

    // conlight4
    const conlight4 = this.add.ellipse(60, -1, 10, 10);
    conlight4.name = "conlight4";
    conlight4.isFilled = true;
    conlight4.fillColor = 16711680;
    conlights.add(conlight4);

    // conlight3
    const conlight3 = this.add.ellipse(40, -1, 10, 10);
    conlight3.name = "conlight3";
    conlight3.isFilled = true;
    conlight3.fillColor = 16711680;
    conlights.add(conlight3);

    // conlight2
    const conlight2 = this.add.ellipse(20, -1, 10, 10);
    conlight2.name = "conlight2";
    conlight2.isFilled = true;
    conlight2.fillColor = 16711680;
    conlights.add(conlight2);

    // conlight1
    const conlight1 = this.add.ellipse(0, -1, 10, 10);
    conlight1.name = "conlight1";
    conlight1.isFilled = true;
    conlight1.fillColor = 16711680;
    conlights.add(conlight1);

    // luxCapLights
    const luxCapLights = this.add.container(671, 1578);
    luxCapLights.name = "luxCapLights";
    luxCapLights.visible = false;

    // luxCapLight5
    const luxCapLight5 = this.add.ellipse(80, 0, 10, 10);
    luxCapLight5.name = "luxCapLight5";
    luxCapLight5.isFilled = true;
    luxCapLight5.fillColor = 16711680;
    luxCapLights.add(luxCapLight5);

    // luxCapLight4
    const luxCapLight4 = this.add.ellipse(60, -1, 10, 10);
    luxCapLight4.name = "luxCapLight4";
    luxCapLight4.isFilled = true;
    luxCapLight4.fillColor = 16711680;
    luxCapLights.add(luxCapLight4);

    // luxCapLight3
    const luxCapLight3 = this.add.ellipse(40, -1, 10, 10);
    luxCapLight3.name = "luxCapLight3";
    luxCapLight3.isFilled = true;
    luxCapLight3.fillColor = 16711680;
    luxCapLights.add(luxCapLight3);

    // luxCapLight2
    const luxCapLight2 = this.add.ellipse(20, -1, 10, 10);
    luxCapLight2.name = "luxCapLight2";
    luxCapLight2.isFilled = true;
    luxCapLight2.fillColor = 16711680;
    luxCapLights.add(luxCapLight2);

    // luxCapLight1
    const luxCapLight1 = this.add.ellipse(0, -1, 10, 10);
    luxCapLight1.name = "luxCapLight1";
    luxCapLight1.isFilled = true;
    luxCapLight1.fillColor = 16711680;
    luxCapLights.add(luxCapLight1);

    // durCapLights
    const durCapLights = this.add.container(441, 1578);
    durCapLights.name = "durCapLights";
    durCapLights.visible = false;

    // durCapLight5
    const durCapLight5 = this.add.ellipse(80, 0, 10, 10);
    durCapLight5.name = "durCapLight5";
    durCapLight5.isFilled = true;
    durCapLight5.fillColor = 16711680;
    durCapLights.add(durCapLight5);

    // durCapLight4
    const durCapLight4 = this.add.ellipse(60, -1, 10, 10);
    durCapLight4.name = "durCapLight4";
    durCapLight4.isFilled = true;
    durCapLight4.fillColor = 16711680;
    durCapLights.add(durCapLight4);

    // durCapLight3
    const durCapLight3 = this.add.ellipse(40, -1, 10, 10);
    durCapLight3.name = "durCapLight3";
    durCapLight3.isFilled = true;
    durCapLight3.fillColor = 16711680;
    durCapLights.add(durCapLight3);

    // durCapLight2
    const durCapLight2 = this.add.ellipse(20, -1, 10, 10);
    durCapLight2.name = "durCapLight2";
    durCapLight2.isFilled = true;
    durCapLight2.fillColor = 16711680;
    durCapLights.add(durCapLight2);

    // durCapLight1
    const durCapLight1 = this.add.ellipse(0, -1, 10, 10);
    durCapLight1.name = "durCapLight1";
    durCapLight1.isFilled = true;
    durCapLight1.fillColor = 16711680;
    durCapLights.add(durCapLight1);

    // conCapLights
    const conCapLights = this.add.container(210, 1577);
    conCapLights.name = "conCapLights";
    conCapLights.visible = false;

    // conCapLight5
    const conCapLight5 = this.add.ellipse(80, 1, 10, 10);
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
    const conCapLight1 = this.add.ellipse(0, -1, 10, 10);
    conCapLight1.name = "conCapLight1";
    conCapLight1.isFilled = true;
    conCapLight1.fillColor = 16711680;
    conCapLights.add(conCapLight1);

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
    this.timeValText = timeValText;
    this.conCapValText = conCapValText;
    this.durCapValText = durCapValText;
    this.luxCapValText = luxCapValText;
    this.plus = plus;
    this.minus = minus;
    this.submitButtonText = submitButtonText;
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

  preload() {
    this.load.pack("preloadpack", "assets/preloadpack.json");
  }
  async create() {
    const client = new Colyseus.Client("ws://localhost:8000");

     const room=  await client.joinOrCreate('my_room');
    this.editorCreate();

    this.startButton.setInteractive();
    this.startButton.on(
      "pointerdown",
      () => {
         room.send('player ready');
        console.log("button pressed");
        this.startButton.visible = false;
        this.startButtonText.visible = false;
        this.startButton.disableInteractive();
        this.startButtonText.disableInteractive();
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
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
