import APIHandler from './api';

export default class SceneLeaderboard extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super({ key: 'SceneLeaderboard' });
  }

  create() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gItM6Hzq8nx6aBQXukrl/scores';

    APIHandler.getData(url)
      .then((data) => {
        this.space = 0;

        data.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach((object, index) => {
          this.add.text(
            500,
            100 + this.space,
            `${index + 1}. ${object.user} ${object.score}`,
            {
              font: '30px courier',
              fill: '#ffffff',
            },
          );
          this.space += 30;
        });
      });

    this.back = this.add.text(554, 537.5, 'BACK',
      {
        fontSize: '40px',
        fill: '#FFFFFF',
      })
      .setInteractive();
    this.back.on('pointerdown', () => {
      this.scene.start('SceneMainMenu');
    });
  }
}