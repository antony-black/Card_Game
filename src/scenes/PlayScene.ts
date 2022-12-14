import Phaser from "phaser";
import SceneKeys from "../enums/SceneKeys";

export default class PlayScene extends Phaser.Scene {
  private background!: Phaser.GameObjects.Image;
  constructor() {
    super(SceneKeys.PlayScene);
  }
  create(): void {
    const WIDTH = this.cameras.main.centerX;
    const HEIGHT = this.cameras.main.centerY;

   this.background = this.add.image(WIDTH, HEIGHT, 'background');
   this.background.setOrigin(0.5, 0.5);

   const cardNames = [
    'bear', 'black_bear', 'deer', 'elefant', 'giraff',
    'hipo', 'koala', 'lamb', 'monkey', 'panda'
  ]

  const cards = [];

  for (let name of cardNames) {

    const cardA = this.add.image(0, 0, name).setData('symbol', name);
    // console.log(cardA.getData('symbol'));
    
    const cardB = this.add.image(0, 0, name).setData('symbol', name);
    // console.log(cardB.getData('symbol'));

    cards.push(cardA, cardB);   
  }

  Phaser.Utils.Array.Shuffle(cards);
  Phaser.Actions.GridAlign(cards, {
    width: 5, height: 4, cellWidth: 80, cellHeight: 80, x: 100, y: 150
  });
// Creates rectangle
  // let rect = this.add.rectangle(400, 300, 68, 68, 0xf0f0f0);

  // for (let x = 0; x < 5; x++) {
  //   for (let y = 0; y < 4; y++) {
  //   cards[y*5+x].setPosition(x*70 + 100, y*70 + 150);
  //   }
  // }
  }

  update(): void {

  }
}