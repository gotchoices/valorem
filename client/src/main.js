
import UI from "./scenes/ui.js";
let client = new Colyseus.Client("ws://localhost:80");
 await client.joinOrCreate('my_room').then(() => {
        console.log("joined successfully")})
	var game = new Phaser.Game({
		width: 900,
		height: 1600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scene:[UI],
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	
