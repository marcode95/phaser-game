import './assets/style.css';
import SceneMainMenu from './components/sceneMainMenu';
import SceneNameInput from './components/sceneNameInput';
import SceneLeaderboard from './components/sceneLeaderboard';
import SceneMain from './components/sceneMain';

const config = {
  type: Phaser.AUTO, // eslint-disable-line
  width: 1200,
  height: 675,
  dom: { createContainer: true },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [
    SceneMainMenu,
    SceneLeaderboard,
    SceneNameInput,
    SceneMain
  ],
  pixelArt: true,
  roundPixels: true,
};

const game = new Phaser.Game(config); // eslint-disable-line