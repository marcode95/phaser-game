const time = document.getElementById('time');
const healthBar = document.getElementById('health-bar');
const scoreField = document.getElementById('score-field');

const hideStatuses = () => {
  scoreField.classList.remove('display-flex');
  healthBar.classList.remove('display-flex');
  time.classList.remove('display-block');
  scoreField.classList.add('display-none');
  healthBar.classList.add('display-none');
  time.classList.add('display-none');
};

export default class SceneMainMenu extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  create() {
    hideStatuses();
    this.welcomeText = this.add.text(
      this.cameras.main.width / 2,
      120,
      'WALD',
      {
        fontSize: '100px',
        fill: '#FFFFFF',
      },
    );
    this.welcomeText.setOrigin(0.5, 0.5);

    this.play = this.add.text(554, 237.5, 'PLAY',
      {
        fontSize: '40px',
        fill: '#FFFFFF',
      })
      .setInteractive();
    this.play.on('pointerdown', () => {
      this.scene.start('SceneNameInput');
    });

    this.leaderboard = this.add.text(475, 327.5, 'LEADERBOARD',
      {
        fontSize: '40px',
        fill: '#FFFFFF',
      })
      .setInteractive();
    this.leaderboard.on('pointerdown', () => {
      this.scene.start('SceneLeaderboard');
    });
  }
}