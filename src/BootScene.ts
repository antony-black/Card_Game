import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
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
    this.load.setPath('assets');
    this.load.image('bear-2');
    this.load.image('black_bear-2');
    this.load.image('deer-2');
    this.load.image('elefant-2');
    this.load.image('giraff-2');
    this.load.image('hipo-2');
    this.load.image('koala-2');
    this.load.image('lamb-2');
    this.load.image('monkey-2');
    this.load.image('panda-2');
  }

  create(): void {
    this.add.text(20, 20, 'Loading game ...');
    this.scene.start('PlayScene');
  }
}






