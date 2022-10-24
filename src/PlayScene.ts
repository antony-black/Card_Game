import Phaser from "phaser";
import GameName from "./index";
import BootScene from "./BootScene";

export default class PlayScene extends Phaser.Scene {
  background: any;
  bear: any;
  black_bear: any;
  deer: any;
  elefant: any;
  giraff: any;
  hipo: any;
  koala: any;
  lamb: any;
  monkey: any;
  panda: any;
  bear2: any;
  black_bear2: any;
  deer2: any;
  elefant2: any;
  giraff2: any;
  hipo2: any;
  koala2: any;
  lamb2: any;
  monkey2: any;
  panda2: any;
  pictures: any;
  constructor() {
    super('PlayScene');
  }
  create(): void {
   this.add.text(20, 20, 'Playing game ...', {font: '85 Arial', color: 'yellow'});

   this.background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')
   this.background.setScale(1.7, 1.1);
   this.background.setOrigin(0.5, 0.5);

   const WIDTH = this.cameras.main.centerX;
   const HEIGHT = this.cameras.main.centerY;

   this.bear = this.add.image(WIDTH, HEIGHT, 'bear');
   this.black_bear = this.add.image(WIDTH - 70, HEIGHT, 'black_bear');
   this.deer = this.add.image(WIDTH + 70, HEIGHT, 'deer');
   this.elefant = this.add.image(WIDTH - 138, HEIGHT, 'elefant');
   this.giraff = this.add.image(WIDTH + 138, HEIGHT, 'giraff');
   this.hipo = this.add.image(WIDTH, HEIGHT + 70, 'hipo');
   this.koala = this.add.image(WIDTH - 70, HEIGHT + 70, 'koala');
   this.lamb = this.add.image(WIDTH + 70, HEIGHT + 70, 'lamb');
   this.monkey = this.add.image(WIDTH - 138, HEIGHT + 70, 'monkey');
   this.panda = this.add.image(WIDTH + 138, HEIGHT + 70, 'panda');
   this.bear2 = this.add.image(WIDTH, HEIGHT + 140, 'bear');
   this.black_bear2 = this.add.image(WIDTH - 70, HEIGHT - 70, 'black_bear');
   this.deer2 = this.add.image(WIDTH + 70, HEIGHT - 70, 'deer');
   this.elefant2 = this.add.image(WIDTH - 138, HEIGHT - 70, 'elefant');
   this.giraff2 = this.add.image(WIDTH + 138, HEIGHT - 70, 'giraff');
   this.hipo2 = this.add.image(WIDTH, HEIGHT - 70, 'hipo');
   this.koala2 = this.add.image(WIDTH - 70, HEIGHT + 140, 'koala');
   this.lamb2 = this.add.image(WIDTH + 70, HEIGHT + 140, 'lamb');
   this.monkey2 = this.add.image(WIDTH - 138, HEIGHT + 140, 'monkey');
   this.panda2 = this.add.image(WIDTH + 138, HEIGHT + 140, 'panda');
  }

  update(): void {
    // this.input.on('gameobjectdown', this.hideImage, this);
  }

  // hideImage(pointer: any, gameObject: any) {
  //   // gameObject.setTexture('explosion');
  //   // gameObject.play('explode');
  //  }
}