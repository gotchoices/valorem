export class tradeHandler {
  constructor(scene, room) {
    this.selected = " ";
    this.quantity = 0;

    this.action = " ";
    scene.events.on("begin trading", function () {
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
      scene.stageText.setText("trade \n holdings");
      scene.buyButton.setInteractive().on("pointerdown", () => {
        this.action = "Buy";
      });
      scene.sellButton.setInteractive().on("pointerdown", () => {
        scene.stageText.setText("Sell");
        this.action = "Sell";
      });
      scene.luxCapSquare.setInteractive().on(
        "pointerdown",
        () => {
          this.selected = "luxCap";
          scene.luxCapSquare.setStrokeStyle(4, 0x00ff00);
        },
        this
      );
      scene.conCapSquare.setInteractive().on("pointerdown", () => {
        this.selected = "conCap";
        scene.conCapSquare.setStrokeStyle(4, 0x00ff00);
      });
      scene.durCapSquare.setInteractive().on("pointerdown", () => {
        this.selected = "durCap";
        scene.durCapSquare.setStrokeStyle(4, 0x00ff00);
      });
      scene.durSquare.setInteractive().on("pointerdown", () => {
        this.selected = "dur";
        scene.durSquare.setStrokeStyle(4, 0x00ff00);
      });
      scene.luxSquare.setInteractive().on("pointerdown", () => {
        this.selected = "lux";
        scene.luxSquare.setStrokeStyle(4, 0x00ff00);
      });
      scene.conSquare.setInteractive().on("pointerdown", () => {
        this.selected = "con";
        scene.conSquare.setStrokeStyle(4, 0x00ff00);
      });
      scene.plus.setInteractive().on("pointerdown", () => {
        this.quantity++;
        console.log(this.quantity);
      });
      scene.minus.setInteractive().on("pointerdown", () => {
        this.quantity--;
      });
      scene.input.on("pointerdown", () => {
        console.log(this.action, this.quantity, this.selected);
        scene.stageText.setText(
          this.action + " " + this.quantity + "\n  " + this.selected
        );
      });
    });
  }
}
