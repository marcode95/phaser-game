import APIHandler from './api';

export default class SceneLeaderboard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderboard' });
  }

  create() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cJOPOhMbh0xzmA7V3fdX/scores';
    const score = JSON.parse(localStorage.getItem('score:'));
    const username = JSON.parse(localStorage.getItem('username:'));
    const obj = { // eslint-disable-line
      user: username,
      score,
    };

    APIHandler.getData(url)
      .then((data) => {
        this.space = 0;

        data.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach((userObj, index) => {
          this.add.text(
            150,
            170 + this.space,
            `${index + 1}. ${userObj.user} | ${userObj.score}`,
            {
              font: '19px monospace',
              fill: '#0000ff',
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