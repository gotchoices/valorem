import UI from "./scenes/ui.js";

var game = new Phaser.Game({
  width: 900,
  height: 1600,
  type: Phaser.AUTO,
  backgroundColor: "#242424",
  scene: [UI],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  debug: true,
});
