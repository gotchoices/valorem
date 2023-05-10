// You can write more code here

/* START OF COMPILED CODE */

export default class UI extends Phaser.Scene {
  constructor() {
    super("UI");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // rectangle_1
    const rectangle_1 = this.add.rectangle(456, 802, 900, 1600);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 4408131;

    // commoditiesText
    const commoditiesText = this.add.text(30, 1307, "", {});
    commoditiesText.name = "commoditiesText";
    commoditiesText.text = "Consumables Durables Luxuries";
    commoditiesText.setStyle({ color: "#000000ff", fontSize: "48px" });

    // consVal
    const consVal = this.add.text(123, 1459, "", {});
    consVal.name = "consVal";
    consVal.text = "0";
    consVal.setStyle({ color: "#000000ff", fontSize: "48px" });

    // durVal
    const durVal = this.add.text(455, 1459, "", {});
    durVal.name = "durVal";
    durVal.text = "0";
    durVal.setStyle({ color: "#000000ff", fontSize: "48px" });

    // luxVal
    const luxVal = this.add.text(738, 1459, "", {});
    luxVal.name = "luxVal";
    luxVal.text = "0";
    luxVal.setStyle({ color: "#000000ff", fontSize: "48px" });

    // ellipse_1
    const ellipse_1 = this.add.ellipse(529.75, 621, 128, 128);
    ellipse_1.isFilled = true;
    ellipse_1.fillColor = 903173;

    // buttonText
    const buttonText = this.add.text(443.25, 802, "", {});
    buttonText.name = "buttonText";
    buttonText.text = "Button";
    buttonText.setStyle({ color: "#000000ff", fontSize: "48px" });

    this.consVal = consVal;
    this.durVal = durVal;
    this.luxVal = luxVal;
    this.ellipse_1 = ellipse_1;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Text} */
  consVal;
  /** @type {Phaser.GameObjects.Text} */
  durVal;
  /** @type {Phaser.GameObjects.Text} */
  luxVal;
  /** @type {Phaser.GameObjects.Ellipse} */
  ellipse_1;

  /* START-USER-CODE */

  // Write more your code here

     client = new Colyseus.Client("ws://localhost:8000");
     room;
     // await client.joinOrCreate('my_room').then(() => {
     // console.log("joined successfully")})
  async create() {
    this.editorCreate();
      await this.client.joinOrCreate('my_room').then(() => {
      console.log("joined successfully")})
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
