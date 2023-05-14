export class allocationHandler{

constructor(scene,room){
    
this.allocated=0;
this.selected=null;
this.conAllocated=0;
this.durAllocated=0;
this.luxAllocated=0;
this.conCapAllocated=0;
this.durCapAllocated=0;
this.luxCapAllocated=0;
this.timeBox= scene.rectangle_7
this.boxes=scene.add.group();
// add rectangles 8 6 4 5 3 2 to group
this.boxes.addMultiple([scene.luxSquare,scene.durSquare,scene.conSquare,scene.luxCapSquare, scene.durCapSquare,scene.conCapSquare]);
scene.events.on("begin allocation", (data) => {
   
scene.ui.visible=true;
    scene.luxlights.visible=true;
    scene.durlights.visible=true;
    scene.conlights.visible=true;
    scene.conCapLights.visible=true;
    scene.durCapLights.visible=true;
    scene.luxCapLights.visible=true;
    scene.submitButtonText.setDepth(99)
    });
   
  scene.conSquare.setInteractive().on('pointerdown', () => {

    this.selected='con';
  


  });
    scene.durSquare.setInteractive().on('pointerdown', () => {

    this.selected='dur';
    });

    scene.luxSquare.setInteractive().on('pointerdown', () => {
        this.selected='lux';
    });
    scene.conCapSquare
    .setInteractive()
    .on('pointerdown', () => {
        this.selected='conCap';
    });
    scene.durCapSquare
    .setInteractive()
    .on('pointerdown', () => {
        this.selected='durCap';
    });
    scene.luxCapSquare
    .setInteractive()
    .on('pointerdown', () => {
        this.selected='luxCap';
    });


scene.plus.setInteractive().on('pointerdown', () => {
   if(this.allocated<5  ){
   
   if(this.selected=='con' && this.conAllocated<5){
        this.conAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='dur'&& this.durAllocated<5){
        this.durAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='lux'&& this.luxAllocated<5){
        this.luxAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
   if(this.selected=='conCap' && this.conCapAllocated<5){
        this.conCapAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='durCap'&& this.durCapAllocated<5){
        this.durCapAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='luxCap'&& this.luxCapAllocated<5){
        this.luxCapAllocated++;
        this.allocated++;
        scene.timeValText.setText(5-this.allocated);
    }
    


   }

});
scene.minus.setInteractive().on('pointerdown', () => {
    if(this.allocated>0){
    if(this.selected=='con'&& this.conAllocated>0){
        this.conAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='dur'&& this.durAllocated>0){
        this.durAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='lux'&& this.luxAllocated>0){
        this.luxAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='conCap'&& this.conCapAllocated>0){
        this.conCapAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='durCap'&& this.durCapAllocated>0){
        this.durCapAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }
    if(this.selected=='luxCap'&& this.luxCapAllocated>0){
        this.luxCapAllocated--;
        this.allocated--;
        scene.timeValText.setText(5-this.allocated);
    }

}
})

    scene.input.on('pointerdown', () => {
    scene.conSquare.setStrokeStyle(4, 0xffffff);
    scene.durSquare.setStrokeStyle(4, 0xffffff);
    scene.luxSquare.setStrokeStyle(4, 0xffffff);
    scene.conCapSquare.setStrokeStyle(4, 0xffffff);
    scene.durCapSquare.setStrokeStyle(4, 0xffffff);
    scene.luxCapSquare.setStrokeStyle(4, 0xffffff);
    if(this.selected=='conCap'){
        scene.conCapSquare.setStrokeStyle(4, 0x00ff00);
    }
    if(this.selected=='durCap'){
        scene.durCapSquare.setStrokeStyle(4, 0x00ff00);
    }
    if(this.selected=='luxCap'){
        scene.luxCapSquare.setStrokeStyle(4, 0x00ff00);
    }

    if(this.selected=='con'){
        scene.conSquare.setStrokeStyle(4, 0x00ff00);

        }
        if(this.selected=='dur'){
        scene.durSquare.setStrokeStyle(4, 0x00ff00);

        }
        if(this.selected=='lux'){
        scene.luxSquare.setStrokeStyle(4, 0x00ff00);

        }
        let conlights=scene.conlights.getAll();
        let durlights=scene.durlights.getAll();
        let luxlights=scene.luxlights.getAll();
        let conCapLights=scene.conCapLights.getAll();
        let durCapLights=scene.durCapLights.getAll();
        let luxCapLights=scene.luxCapLights.getAll();

        for(let i=0;i<5;i++){
            if(this.conAllocated>=i+1){
                conlights[i].setFillStyle(0x00ff00);
            }
            else{
                conlights[i].setFillStyle(0xff0000);
            }
            if(this.durAllocated>=i+1){
                durlights[i].setFillStyle(0x00ff00);
            }
            else{
                durlights[i].setFillStyle(0xff0000);
            }
            if(this.luxAllocated>=i+1){
                luxlights[i].setFillStyle(0x00ff00);
            }
            else{
                luxlights[i].setFillStyle(0xff0000);
            }
            if(this.conCapAllocated>=i+1){
                conCapLights[i].setFillStyle(0x00ff00);
            }
            else{
                conCapLights[i].setFillStyle(0xff0000);
            }
            if(this.durCapAllocated>=i+1){
                durCapLights[i].setFillStyle(0x00ff00);
            }
            else{
                durCapLights[i].setFillStyle(0xff0000);
            }
            if(this.luxCapAllocated>=i+1){
                luxCapLights[i].setFillStyle(0x00ff00);
            }
            else{
                luxCapLights[i].setFillStyle(0xff0000);
            }

        }
    
      

    });



    }

}



