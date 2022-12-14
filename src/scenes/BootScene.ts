import Phaser from "phaser";
import SceneKeys from "../enums/SceneKeys";
export default class BootScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.BootScene);
  }

  preload(): void {
    this.load.setPath('assets');
    this.load.image('background');
    this.load.image('bear');
    this.load.image('black_bear');
    this.load.image('deer');
    this.load.image('elefant');
    this.load.image('giraff');
    this.load.image('hipo');
    this.load.image('koala');
    this.load.image('lamb');
    this.load.image('monkey');
    this.load.image('panda');
  }

  create(): void {
    this.add.text(20, 20, 'Loading game ...');
    this.scene.start('PlayScene');
  }
}






