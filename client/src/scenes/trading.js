export class tradeHandler {
  constructor(scene, room) {
    scene.events.on(
      "begin trading",
      function () {
        console.log(scene);
        scene.tradeUI.visible = true;
        scene.time.addEvent({
          delay: 4000,
          callbackScopre: this,
          callback: function () {
            scene.events.emit("begin allocation");
          },
        });
      },
      this
    );
  }
}
