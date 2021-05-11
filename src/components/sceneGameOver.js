export default class SceneGameOver extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {
    this.welcomeText = this.add.text(
      this.cameras.main.width / 2,
      120,
      'GAME OVER',
      {
        fontSize: '80px',
        fill: '#FFFFFF',
      },
    );
    this.welcomeText.setOrigin(0.5, 0.5);

    this.play = this.add.text(
      490,
      237.5,
      'PLAY AGAIN',
      {
        fontSize: '40px',
        fill: '#FFFFFF',
      },
    ).setInteractive();
    this.play.on('pointerdown', () => {
      this.scene.start('SceneMain');
    });
  }
}