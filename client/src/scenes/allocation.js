export class allocationHandler {
  constructor(scene, room) {
    //set variables to control UI
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
    scene.timeBox = scene.rectangle_7;
    scene.timeBox.setFillStyle(0x000000);
    scene.timeBox.setStrokeStyle(4, 0xffffff);
    scene.timeText.setText("TIME");
    //run setText() on all text objects and set them to their corresponding values
    scene.timeValText.setText("5");
    scene.conValText.setText(this.conVal);
    scene.durValText.setText(this.durVal);
    scene.luxValText.setText(this.luxVal);
    scene.durCapValText.setText(this.durCapVal);
    scene.luxCapValText.setText(this.luxCapVal);
    scene.conCapValText.setText(this.conCapVal);
    this.boxes = scene.add.group();
    // add rectangles to group
    this.boxes.addMultiple([
      scene.luxSquare,
      scene.durSquare,
      scene.conSquare,
      scene.luxCapSquare,
      scene.durCapSquare,
      scene.conCapSquare,
      scene.rectangle_7,
    ]);

    room.onMessage("begin allocation", (data) => {
      this.allocated = 0;
      this.selected = null;
      this.conAllocated = 0;
      this.durAllocated = 0;
      this.luxAllocated = 0;
      this.conCapAllocated = 0;
      this.durCapAllocated = 0;
      this.luxCapAllocated = 0;
      scene.conSquare.setStrokeStyle(4, 0xffffff);
      scene.durSquare.setStrokeStyle(4, 0xffffff);
      scene.luxSquare.setStrokeStyle(4, 0xffffff);
      scene.conCapSquare.setStrokeStyle(4, 0xffffff);
      scene.durCapSquare.setStrokeStyle(4, 0xffffff);
      scene.luxCapSquare.setStrokeStyle(4, 0xffffff);
      scene.timeValText.setText("5");
      scene.stageText
        .setPosition(475, 258)
        .setFontSize(150)
        .setCenterAlign()
        .setText("Allocate \nTime");
   
      scene.ui.visible = true;
      scene.luxlights.visible = true;
      scene.durlights.visible = true;
      scene.conlights.visible = true;
      scene.conCapLights.visible = true;
      scene.durCapLights.visible = true;
      scene.luxCapLights.visible = true;
    
      //determine which box is selected
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
      //manage click on + and - buttons
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
      //display selected holding
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
        //manage lights
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
      //send submission to "server" for processing
     
    
        scene.yesButton.setInteractive().on(
          "pointerdown",
          () => {
            this.submitAllocation(scene,room);
          },
          this
        );
      
      room.onMessage('allocation accepted', (data) => {
        console.log(data);
        
         
         scene.conValText.setText(data.con);
            scene.durValText.setText(data.dur);
            scene.luxValText.setText(data.lux);
            scene.conCapValText.setText(data.conCap);
            scene.durCapValText.setText(data.durCap);
            scene.luxCapValText.setText(data.luxCap);
            scene.timeValText.setText("0");

        
       
      

scene.stageText.setText("waiting\non\nplayers");

  
    
      


      })
      scene.noButton.setInteractive().on("pointerdown", () => {

        this.reset(scene);

      })
    });
  }
  reset(scene){

    this.durAllocated = 0;
    this.luxAllocated = 0;
    this.conAllocated = 0;
    this.durCapAllocated = 0;
    this.luxCapAllocated = 0;
    this.conCapAllocated = 0;
      this.allocated = 0;
      scene.timeValText.setText("5");
      scene.conValText.setText(0);
      scene.durValText.setText(0);
      scene.luxValText.setText(0);
      scene.durCapValText.setText(0);
      scene.luxCapValText.setText(0);
      scene.conCapValText.setText(0);

  }
  submitAllocation(scene,room) {
    
            //disable all interactive elements
            scene.yesButton.removeListener("pointerdown").disableInteractive();
            scene.noButton.removeListener("pointerdown").disableInteractive();

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
        
            scene.input.removeListener("pointerdown");
            scene.stageText.setText("allocation\nsent");

            room.send("allocation", {
              timeLeft: 5 - this.allocated,
              con: this.conAllocated,
              dur: this.durAllocated,
              lux: this.luxAllocated,
              conCap: this.conCapAllocated,
              durCap: this.durCapAllocated,
              luxCap: this.luxCapAllocated,
            })
            //flash boxes to indicate end of allocation phase
            scene.tweens.add({
              targets: this.boxes.getChildren(),
              strokeColor: 0xffffff,
              duration: 2000,
          
              
            
              
            });}
}
