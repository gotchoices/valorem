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
    const rectangle_1 = this.add.rectangle(460, 820, 900, 1600);
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
    const rectangle_7 = this.add.rectangle(118, 970, 128, 128);
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
    const buyButtonText = this.add.bitmapText(
      88,
      1018,
      "spaceCrusaders",
      "Buy"
    );
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
    const sellButtonText = this.add.bitmapText(
      240,
      1020,
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
    const noButton = this.add.rectangle(520, 972, 124, 128);
    noButton.name = "noButton";
    noButton.isFilled = true;
    noButton.fillColor = 16725558;
    noButton.isStroked = true;
    noButton.lineWidth = 4;
    ui.add(noButton);

    // noButtonText
    const noButtonText = this.add.bitmapText(
      473,
      950,
      "spaceCrusaders",
      "reset"
    );
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
    const yesButtonText = this.add.bitmapText(
      260,
      953,
      "spaceCrusaders",
      "submit"
    );
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

  /** @type {Phaser.GameObjects.Rectangle} */
  startButton;
  /** @type {Phaser.GameObjects.BitmapText} */
  startButtonText;
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
  /** @type {Phaser.GameObjects.BitmapText} */
  timeText;
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
  /** @type {Phaser.GameObjects.Rectangle} */
  stage;
  /** @type {Phaser.GameObjects.BitmapText} */
  stageText;
  /** @type {Phaser.GameObjects.Rectangle} */
  buyButton;
  /** @type {Phaser.GameObjects.BitmapText} */
  buyButtonText;
  /** @type {Phaser.GameObjects.Rectangle} */
  sellButton;
  /** @type {Phaser.GameObjects.BitmapText} */
  sellButtonText;
  /** @type {Phaser.GameObjects.Rectangle} */
  noButton;
  /** @type {Phaser.GameObjects.BitmapText} */
  noButtonText;
  /** @type {Phaser.GameObjects.Rectangle} */
  yesButton;
  /** @type {Phaser.GameObjects.BitmapText} */
  yesButtonText;
  /** @type {Phaser.GameObjects.Layer} */
  ui;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
