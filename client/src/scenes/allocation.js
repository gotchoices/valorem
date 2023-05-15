export class allocationHandler {
  constructor(scene, room) {
    this.conVal = 0;
    this.durVal = 0;
    this.luxVal = 0;
    this.durCapVal = 0;
    this.luxCapVal = 0;
    this.conCapVal = 0;
    this.allocated = 0;
    this.selected = null;
    this.conAllocated = 0;
    this.durAllocated = 0;
    this.luxAllocated = 0;
    this.conCapAllocated = 0;
    this.durCapAllocated = 0;
    this.luxCapAllocated = 0;
    this.timeBox = scene.rectangle_7;
    //run setText() on all text objects and set them to their corresponding values
    scene.timeValText.setText("5");
    scene.conValText.setText(this.conVal);
    scene.durValText.setText(this.durVal);
    scene.luxValText.setText(this.luxVal);
    scene.durCapValText.setText(this.durCapVal);
    scene.luxCapValText.setText(this.luxCapVal);
    scene.conCapValText.setText(this.conCapVal);
    this.boxes = scene.add.group();
    // add rectangles 8 6 4 5 3 2 to group
    this.boxes.addMultiple([
      scene.luxSquare,
      scene.durSquare,
      scene.conSquare,
      scene.luxCapSquare,
      scene.durCapSquare,
      scene.conCapSquare,
      scene.rectangle_7,
    ]);
    scene.events.on("begin allocation", (data) => {
      scene.tradeUI.visible = false;
      scene.submitButtonText.visible = true;
      scene.ui.visible = true;
      scene.luxlights.visible = true;
      scene.durlights.visible = true;
      scene.conlights.visible = true;
      scene.conCapLights.visible = true;
      scene.durCapLights.visible = true;
      scene.luxCapLights.visible = true;
      scene.submitButtonText.setDepth(99);

      scene.conSquare.setInteractive().on("pointerdown", () => {
        this.selected = "con";
      });
      scene.durSquare.setInteractive().on("pointerdown", () => {
        this.selected = "dur";
      });

      scene.luxSquare.setInteractive().on("pointerdown", () => {
        this.selected = "lux";
      });
      scene.conCapSquare.setInteractive().on("pointerdown", () => {
        this.selected = "conCap";
      });
      scene.durCapSquare.setInteractive().on("pointerdown", () => {
        this.selected = "durCap";
      });
      scene.luxCapSquare.setInteractive().on("pointerdown", () => {
        this.selected = "luxCap";
      });

      scene.plus.setInteractive().on("pointerdown", () => {
        if (this.allocated < 5) {
          if (this.selected == "con" && this.conAllocated < 5) {
            this.conAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "dur" && this.durAllocated < 5) {
            this.durAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "lux" && this.luxAllocated < 5) {
            this.luxAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "conCap" && this.conCapAllocated < 5) {
            this.conCapAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "durCap" && this.durCapAllocated < 5) {
            this.durCapAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "luxCap" && this.luxCapAllocated < 5) {
            this.luxCapAllocated++;
            this.allocated++;
            scene.timeValText.setText(5 - this.allocated);
          }
        }
      });
      scene.minus.setInteractive().on("pointerdown", () => {
        if (this.allocated > 0) {
          if (this.selected == "con" && this.conAllocated > 0) {
            this.conAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "dur" && this.durAllocated > 0) {
            this.durAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "lux" && this.luxAllocated > 0) {
            this.luxAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "conCap" && this.conCapAllocated > 0) {
            this.conCapAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "durCap" && this.durCapAllocated > 0) {
            this.durCapAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
          if (this.selected == "luxCap" && this.luxCapAllocated > 0) {
            this.luxCapAllocated--;
            this.allocated--;
            scene.timeValText.setText(5 - this.allocated);
          }
        }
      });

      scene.input.on("pointerdown", () => {
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
        let conlights = scene.conlights.getAll();
        let durlights = scene.durlights.getAll();
        let luxlights = scene.luxlights.getAll();
        let conCapLights = scene.conCapLights.getAll();
        let durCapLights = scene.durCapLights.getAll();
        let luxCapLights = scene.luxCapLights.getAll();

        for (let i = 0; i < 5; i++) {
          if (this.conAllocated >= i + 1) {
            conlights[i].setFillStyle(0x00ff00);
          } else {
            conlights[i].setFillStyle(0xff0000);
          }
          if (this.durAllocated >= i + 1) {
            durlights[i].setFillStyle(0x00ff00);
          } else {
            durlights[i].setFillStyle(0xff0000);
          }
          if (this.luxAllocated >= i + 1) {
            luxlights[i].setFillStyle(0x00ff00);
          } else {
            luxlights[i].setFillStyle(0xff0000);
          }
          if (this.conCapAllocated >= i + 1) {
            conCapLights[i].setFillStyle(0x00ff00);
          } else {
            conCapLights[i].setFillStyle(0xff0000);
          }
          if (this.durCapAllocated >= i + 1) {
            durCapLights[i].setFillStyle(0x00ff00);
          } else {
            durCapLights[i].setFillStyle(0xff0000);
          }
          if (this.luxCapAllocated >= i + 1) {
            luxCapLights[i].setFillStyle(0x00ff00);
          } else {
            luxCapLights[i].setFillStyle(0xff0000);
          }
        }
      });

      let submission = [scene.submitButton, scene.submitButtonText];
      submission.forEach((item) => {
        item.setInteractive().on(
          "pointerdown",
          () => {
            //adjust all values based on allocation
            this.conCapVal += this.conCapAllocated;
            this.luxCapVal += this.luxCapAllocated;
            this.durCapVal += this.durCapAllocated;
            scene.conCapValText.setText(this.conCapVal);
            scene.luxCapValText.setText(this.luxCapVal);
            scene.durCapValText.setText(this.durCapVal);

            this.luxVal += 1 + (this.luxAllocated * 3 * this.luxCapVal) / 5;
            this.conVal += 1 + (this.conAllocated * 3 * this.conCapVal) / 5;
            this.durVal += 1 + (this.durAllocated * 3 * this.durCapVal) / 5;
            scene.luxValText.setText(this.luxVal);
            scene.conValText.setText(this.conVal);
            scene.durValText.setText(this.durVal);

            scene.conCapVal = this.conCapVal;
            scene.durCapVal = this.durCapVal;
            scene.luxCapVal = this.luxCapVal;
            scene.conVal = this.conVal;
            scene.durVal = this.durVal;
            scene.luxVal = this.luxVal;

            this.allocated = 0;
            this.conAllocated = 0;
            this.durAllocated = 0;
            this.luxAllocated = 0;
            this.conCapAllocated = 0;
            this.durCapAllocated = 0;
            this.luxCapAllocated = 0;
            scene.conSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);
            scene.durSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);
            scene.luxSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);
            scene.conCapSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);
            scene.durCapSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);
            scene.luxCapSquare
              .removeListener("pointerdown")
              .disableInteractive()
              .setStrokeStyle(4, 0xff0000);

            scene.plus.removeListener("pointerdown").disableInteractive();
            scene.minus.removeListener("pointerdown").disableInteractive();
            scene.submitButton
              .removeListener("pointerdown")
              .disableInteractive();
            scene.submitButtonText
              .removeListener("pointerdown")
              .disableInteractive();
            console.log(scene.conSquare);

            scene.input.removeListener("pointerdown");
            scene.tweens.add({
              targets: this.boxes.getChildren(),
              strokeColor: 0xffffff,
              duration: 1000,
              onComplete: function () {
                scene.events.emit("begin trading");
              },
            });
          },
          this
        );
      });
    });
  }
}
