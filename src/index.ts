import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";


const config: GameConfig = {
  type: Phaser.AUTO,
  title: 'Card game',
  width: 489,
  height: 489,
  backgroundColor: '#123456',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [BootScene, PlayScene]
}
// access to the game/game config
export default class GameName extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
 const game = new GameName(config);
};

