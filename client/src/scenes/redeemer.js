export class redeemer {

constructor(scene,room){


    room.onMessage('legacy',(client,legacy)=>{

        scene.stageText.setFontSize(128).setCenterAlign().setText("Legacy:\n"+legacy).setVisible(true);



    })


}



}