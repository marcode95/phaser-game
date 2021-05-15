import APIHandler from './api';

import sky from '../assets/png/sky.png';
import stones from '../assets/png/stones.png';
import trees1 from '../assets/png/trees1.png';
import trees2 from '../assets/png/trees2.png';
import trees3 from '../assets/png/trees3.png';
import trees4 from '../assets/png/trees4.png';
import glowworm1 from '../assets/png/glowworm1.png';
import glowworm2 from '../assets/png/glowworm2.png';
import glowworm3 from '../assets/png/glowworm3.png';
import glowworm4 from '../assets/png/glowworm4.png';

import ground from '../assets/png/ground.png';
import longGround from '../assets/png/longGround.png';
import lavaTile from '../assets/png/lava.png';

import heart from '../assets/png/heart.png';
import bullet from '../assets/png/bullet.png';
import jumpItem from '../assets/png/jumpItem.png';
import heartItem from '../assets/png/heartItem.png';
import starItem from '../assets/png/starItem.png';
import coin from '../assets/png/coin.png';

import wolfStanding from '../assets/png/wolfStanding.png';
import wolfRunningRight from '../assets/png/wolfRunningRight.png';
import wolfRunningLeft from '../assets/png/wolfRunningLeft.png';

import golemStanding from '../assets/png/golemStanding.png';
import golemRunningRight from '../assets/png/golemRunningRight.png';
import golemRunningLeft from '../assets/png/golemRunningLeft.png';
import golemDying from '../assets/png/golemDying.png';

import knightRunningRight0 from '../assets/png/Walk_01.png';
import knightRunningRight1 from '../assets/png/Walk_02.png';
import knightRunningRight2 from '../assets/png/Walk_03.png';
import knightRunningRight3 from '../assets/png/Walk_04.png';
import knightRunningRight4 from '../assets/png/Walk_05.png';
import knightRunningRight5 from '../assets/png/Walk_06.png';

import knightRunningLeft0 from '../assets/png/Walkleft_01.png';
import knightRunningLeft1 from '../assets/png/Walkleft_02.png';
import knightRunningLeft2 from '../assets/png/Walkleft_03.png';
import knightRunningLeft3 from '../assets/png/Walkleft_04.png';
import knightRunningLeft4 from '../assets/png/Walkleft_05.png';
import knightRunningLeft5 from '../assets/png/Walkleft_06.png';

import knightAttackingRight from '../assets/png/Action_16.png';
import knightAttackingLeft from '../assets/png/Actionleft_16.png';

import monster from '../assets/audio/monster.wav';
import monsterDeath from '../assets/audio/monster-death.wav';
import shot from '../assets/audio/shot.wav';
import footsteps from '../assets/audio/footsteps.wav';
import battleTheme from '../assets/audio/battle-theme.mp3';
import mainTheme from '../assets/audio/main-theme.mp3';

let gameOver = false;
let player;
let wolves;
let golems;
let golemFreeGround;
let golemHealth = 25;
let jumpItems;
let heartItems;
let starItems;
let coins;
let bullets;
let leftBullets;
let platforms;
let lava;
let cursors;
let spaceKey;
let score = 0;
let invincible = false;
let superJump = false;
let readyToShoot = true;
let aKey;
let normalJumpHeight = -370;
let heartSubtracted = false;

let hearts = 1;
const healthBar = document.getElementById('health-bar');
const updateHealthBar = () => {
  healthBar.innerHTML = '';
  for (let i = 0; i < hearts; i += 1) {
    const singleHeart = document.createElement('img');
    singleHeart.setAttribute('src', heart);
    healthBar.appendChild(singleHeart);
  }
};

updateHealthBar();

const createLoop = (scene, count, texture, scrollFactor) => {
  let x = 0;
  for (let i = 0; i < count; i += 1) {
    const m = scene.add.image(x, 337.5, texture).setScrollFactor(scrollFactor);
    x += m.width;
  }
};

const createGround = (start, height, texture, scale, count) => {
  let x = 0;
  for (let i = 0; i < count; i += 1) {
    const m = platforms.create(start + x * 1.5, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
};

const createLava = (start, height, texture, scale, count) => {
  let x = 0;
  for (let i = 0; i < count; i += 1) {
    const m = lava.create(start + x * 1.5, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
};

const jumpItemField = document.getElementById('jump-item-field');

const activateSuperJump = (player, jumpItem) => {
  superJump = true;
  setTimeout(() => { superJump = false; }, 8000);
  jumpItem.disableBody(true, true);
  jumpItemField.innerHTML = '<div id="superjump-text">Superjump!</div><div id="progress"><div class="bar"></div></div>';
  setTimeout(() => { jumpItemField.innerHTML = ''; }, 8000);
};

const activateInvincibility = (time) => {
  invincible = true;
  setTimeout(() => { invincible = false; }, time);
};

const looseHeart = () => {
  if (invincible === false) {
    activateInvincibility(1000);
    hearts -= 1;
    updateHealthBar();
  }
};

const addHeart = (player, heartItem) => {
  hearts += 1;
  updateHealthBar();
  heartItem.disableBody(true, true);
};

const starItemField = document.getElementById('star-item-field');
starItemField.setAttribute('style', 'position: absolute; top: 223px; left: 20px;');
const activateInvincibilityItem = (player, starItem) => {
  activateInvincibility(8000);
  starItem.disableBody(true, true);
  starItemField.innerHTML = '<div id="star-text">Invincible!</div><div id="star-progress"><div class="star-bar"></div></div>';
  setTimeout(() => { starItemField.innerHTML = ''; }, 8000);
};

const scoreField = document.getElementById('score-field');
const updateScore = () => {
  scoreField.innerHTML = `Score: ${score}`;
};

const killWolf = (bullet, wolf) => {
  wolf.disableBody(true, true);
  bullet.disableBody(true, true);
  score += 50;
  updateScore();
};

const addCoins = (player, coin) => {
  score += 50;
  updateScore();
  coin.disableBody(true, true);
};

const golemHealthBar = document.getElementById('golem-health-bar');
golemHealthBar.setAttribute('style', 'position: absolute; top: 30px; left: 750px; width: 400px; height: 15px; background-color: red;');

const golemText = document.getElementById('golem-text');
golemText.setAttribute('style', 'position: absolute; top: 30px; left: 680px; color: white; font-family: "Courier New", Courier, monospace;');

const hurtGolem = (bullet, golem) => { // eslint-disable-line
  bullet.disableBody(true, true);
  golemHealth -= 1;
  const golemHealthBarLength = 400 * (golemHealth / 25);
  golemHealthBar.style.width = `${golemHealthBarLength}px`;
};

const time = document.getElementById('time');
let timeCount = 0;
const clock = () => {
  timeCount += 1;
  time.innerHTML = `Time:  ${timeCount}`;
};

const showStatuses = () => {
  scoreField.classList.remove('display-none');
  healthBar.classList.remove('display-none');
  time.classList.remove('display-none');
  scoreField.classList.add('display-flex');
  healthBar.classList.add('display-flex');
  time.classList.add('display-block');
};

const patrolPlatform = (wolf, platform) => {
  if (wolf.body.velocity.x > 0 && wolf.x + wolf.width > platform.x + platform.width) {
    wolf.body.velocity.x *= -1;
  } else if (wolf.body.velocity.x < 0 && wolf.x - wolf.width < platform.x - platform.width) {
    wolf.body.velocity.x *= -1;
  }
};

export default class SceneMain extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super({ key: 'SceneMain' });
  }

  preload() {
    this.load.image('sky', sky);
    this.load.image('stones', stones);
    this.load.image('trees1', trees1);
    this.load.image('trees2', trees2);
    this.load.image('trees3', trees3);
    this.load.image('trees4', trees4);
    this.load.image('glowworm1', glowworm1);
    this.load.image('glowworm2', glowworm2);
    this.load.image('glowworm3', glowworm3);
    this.load.image('glowworm4', glowworm4);
    this.load.image('ground', ground);
    this.load.image('longGround', longGround);
    this.load.image('lavaTile', lavaTile);
    this.load.image('jumpItem', jumpItem);
    this.load.image('heartItem', heartItem);
    this.load.image('starItem', starItem);
    this.load.image('bullet', bullet);
    this.load.image('coin', coin);
    this.load.image('heart', heart);

    this.load.image('krr0', knightRunningRight0);
    this.load.image('krr1', knightRunningRight1);
    this.load.image('krr2', knightRunningRight2);
    this.load.image('krr3', knightRunningRight3);
    this.load.image('krr4', knightRunningRight4);
    this.load.image('krr5', knightRunningRight5);

    this.load.image('krl0', knightRunningLeft0);
    this.load.image('krl1', knightRunningLeft1);
    this.load.image('krl2', knightRunningLeft2);
    this.load.image('krl3', knightRunningLeft3);
    this.load.image('krl4', knightRunningLeft4);
    this.load.image('krl5', knightRunningLeft5);

    this.load.image('kar', knightAttackingRight);
    this.load.image('kal', knightAttackingLeft);

    this.load.spritesheet('wolfStanding', wolfStanding, { frameWidth: 80, frameHeight: 85 });
    this.load.spritesheet('wolfRunningRight', wolfRunningRight, { frameWidth: 128, frameHeight: 90 });
    this.load.spritesheet('wolfRunningLeft', wolfRunningLeft, { frameWidth: 128, frameHeight: 90 });

    this.load.image('golemStanding', golemStanding, { frameWidth: 64, frameHeight: 90 });
    this.load.spritesheet('golemRunningRight', golemRunningRight, { frameWidth: 192, frameHeight: 130 });
    this.load.spritesheet('golemRunningLeft', golemRunningLeft, { frameWidth: 192, frameHeight: 130 });
    this.load.spritesheet('golemDying', golemDying, { frameWidth: 192, frameHeight: 140 });

    this.load.audio('monster', monster);
    this.load.audio('monsterDeath', monsterDeath);
    this.load.audio('battleTheme', battleTheme);
    this.load.audio('mainTheme', mainTheme);
    this.load.audio('footsteps', footsteps);
    this.load.audio('shot', shot);
  }

  create() {
    showStatuses();
    timeCount = 0;
    setInterval(clock, 1000);
    this.shot = this.sound.add('shot', { volume: 0.05 });
    this.mainTheme = this.sound.add('mainTheme', { volume: 0.2 });
    this.battleTheme = this.sound.add('battleTheme', { volume: 0.1 });
    this.monster = this.sound.add('monster', { volume: 0.1 });
    this.monsterDeath = this.sound.add('monsterDeath', { volume: 0.15 });
    this.footsteps = this.sound.add('footsteps', { volume: 0.25 });
    this.mainTheme.play();

    this.add.image(600, 337.5, 'sky').setScrollFactor(0);
    createLoop(this, 9, 'trees4', 0.2);
    createLoop(this, 9, 'trees2', 0.4);
    createLoop(this, 9, 'trees1', 0.8);
    createLoop(this, 9, 'trees3', 0.8);
    createLoop(this, 9, 'stones', 1);
    createLoop(this, 9, 'glowworm4', 1);

    platforms = this.physics.add.staticGroup();
    lava = this.physics.add.staticGroup();
    golemFreeGround = this.physics.add.staticGroup();

    createGround(-50, 620, 'ground', 1.5, 1);
    createGround(-50, 570, 'ground', 1.5, 1);
    createGround(-50, 520, 'ground', 1.5, 1);
    createGround(-50, 470, 'ground', 1.5, 1);
    createGround(-50, 420, 'ground', 1.5, 1);
    createGround(-50, 370, 'ground', 1.5, 1);
    createGround(-50, 320, 'ground', 1.5, 1);
    createGround(-50, 270, 'ground', 1.5, 1);
    createGround(-50, 220, 'ground', 1.5, 1);
    createGround(-50, 170, 'ground', 1.5, 1);
    createGround(-50, 120, 'ground', 1.5, 1);
    createGround(-50, 70, 'ground', 1.5, 1);
    createGround(-50, 20, 'ground', 1.5, 1);
    createGround(32, 670, 'ground', 1.5, 3);
    createLava(322, 680, 'lavaTile', 1.5, 100);
    createGround(450, 570, 'ground', 1.5, 1);
    createGround(400, 230, 'longGround', 1.5, 1);
    createGround(650, 470, 'ground', 1.5, 1);
    createGround(650, 470, 'ground', 1.5, 1);
    createGround(1080, 230, 'ground', 1.5, 4);
    createGround(1700, 330, 'longGround', 1.5, 1);
    createGround(2000, 600, 'ground', 1.5, 1);
    createGround(2100, 220, 'ground', 1.5, 7);
    createGround(2350, 600, 'ground', 1.5, 1);
    createGround(2675, 600, 'ground', 1.5, 1);
    createGround(2780, 400, 'ground', 1.5, 1);
    createGround(3080, 230, 'longGround', 1.5, 1);
    createGround(3670, 390, 'ground', 1, 1);
    createGround(3800, 280, 'ground', 1, 1);
    createGround(3930, 390, 'ground', 1, 1);
    createGround(4250, 440, 'ground', 1, 1);
    createGround(4570, 390, 'ground', 1, 1);
    createGround(4700, 280, 'ground', 1, 1);
    createGround(4830, 390, 'ground', 1, 1);
    createGround(5200, 450, 'ground', 1, 1);
    createGround(5570, 355, 'longGround', 1.5, 1);
    createGround(5955, 355, 'ground', 1.5, 6);
    createGround(6450, 277, 'ground', 1.5, 3);
    createGround(6650, 200, 'ground', 1.5, 3);
    createGround(5860, 600, 'ground', 1.5, 1);
    createGround(7150, 600, 'ground', 1.5, 10);

    golemFreeGround.create(7300, 470, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7870, 470, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7200, 380, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7970, 380, 'ground').setScale(1.5).refreshBody();

    const movingPlattformOne = this.physics.add.image(850, 390, 'ground')
      .setImmovable(true)
      .setVelocity(100, -100);
    movingPlattformOne.body.setAllowGravity(false);
    this.tweens.timeline({
      targets: movingPlattformOne.body.velocity,
      loop: -1,
      tweens: [
        {
          x: 0, y: -120, duration: 900, ease: 'Stepped',
        },
        {
          x: 0, y: -80, duration: 300, ease: 'Stepped',
        },
        {
          x: 0, y: -40, duration: 300, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 800, ease: 'Stepped',
        },
        {
          x: 0, y: 120, duration: 900, ease: 'Stepped',
        },
        {
          x: 0, y: 80, duration: 300, ease: 'Stepped',
        },
        {
          x: 0, y: 40, duration: 300, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 800, ease: 'Stepped',
        },
      ],
    });

    const movingPlattformTwo = this.physics.add.image(3500, 500, 'ground')
      .setImmovable(true)
      .setVelocity(100, -100);
    movingPlattformTwo.body.setAllowGravity(false);
    this.tweens.timeline({
      targets: movingPlattformTwo.body.velocity,
      loop: -1,
      tweens: [
        {
          x: 150, y: 0, duration: 4200, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 2300, ease: 'Stepped',
        },
        {
          x: -150, y: 0, duration: 4200, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 2300, ease: 'Stepped',
        },
      ],
    });

    const movingPlattformThree = this.physics.add.image(5000, 500, 'ground')
      .setImmovable(true)
      .setVelocity(100, -100);
    movingPlattformThree.body.setAllowGravity(false);
    this.tweens.timeline({
      targets: movingPlattformThree.body.velocity,
      loop: -1,
      tweens: [
        {
          x: -150, y: 0, duration: 4200, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 2300, ease: 'Stepped',
        },
        {
          x: 150, y: 0, duration: 4200, ease: 'Stepped',
        },
        {
          x: 0, y: 0, duration: 2300, ease: 'Stepped',
        },
      ],
    });

    player = this.physics.add.sprite(100, 600, 'krr0');
    player.setCollideWorldBounds(false);
    player.setGravityY(300);

    cursors = this.input.keyboard.createCursorKeys();
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // eslint-disable-line
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); // eslint-disable-line

    wolves = this.physics.add.group({
      key: 'wolfStanding',
      repeat: 2,
      setXY: { x: 200, y: 120, stepX: 1400 },
    });
    wolves.setVelocityX(150);

    golems = this.physics.add.group({
      key: 'golemStanding',
      setXY: { x: 7900, y: 0 },
    });
    golems.setVelocityX(0.00000001);

    jumpItems = this.physics.add.group({
      key: 'jumpItem',
      setXY: { x: 1900, y: 0 },
    });
    jumpItems.add(this.physics.add.image(5860, 500, 'jumpItem'));

    heartItems = this.physics.add.group({
      key: 'heartItem',
      setXY: { x: 2675, y: 400 },
    });

    starItems = this.physics.add.group({
      key: 'starItem',
      setXY: { x: 5400, y: 250 },
    });

    bullets = this.physics.add.group({});

    leftBullets = this.physics.add.group({
      key: 'bullet',
    });

    coins = this.physics.add.group({
      key: 'coin',
      setXY: { x: 200, y: 160 },
    });

    coins.add(this.physics.add.image(850, 220, 'coin'));
    coins.add(this.physics.add.image(1230, 0, 'coin'));
    coins.add(this.physics.add.image(2000, 0, 'coin'));
    coins.add(this.physics.add.image(2350, 400, 'coin'));
    coins.add(this.physics.add.image(3670, 300, 'coin'));
    coins.add(this.physics.add.image(3800, 200, 'coin'));
    coins.add(this.physics.add.image(3930, 300, 'coin'));
    coins.add(this.physics.add.image(4570, 300, 'coin'));
    coins.add(this.physics.add.image(4830, 300, 'coin'));
    coins.add(this.physics.add.image(4830, 300, 'coin'));
    coins.add(this.physics.add.image(5400, 500, 'coin'));
    coins.add(this.physics.add.image(5500, 500, 'coin'));
    coins.add(this.physics.add.image(5600, 500, 'coin'));
    coins.add(this.physics.add.image(4700, 200, 'coin'));

    createLoop(this, 4, 'glowworm1', 1.50);
    createLoop(this, 4, 'glowworm2', 1.50);
    createLoop(this, 4, 'glowworm3', 1.50);

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(jumpItems, platforms);
    this.physics.add.collider(heartItems, platforms);
    this.physics.add.collider(starItems, platforms);
    this.physics.add.collider(coins, platforms);
    this.physics.add.collider(player, movingPlattformOne);
    this.physics.add.collider(coins, movingPlattformOne);
    this.physics.add.collider(player, movingPlattformTwo);
    this.physics.add.collider(player, movingPlattformThree);
    this.physics.add.collider(coins, lava);
    this.physics.add.collider(jumpItem, lava);
    this.physics.add.collider(golems, platforms);
    this.physics.add.collider(golems, lava);
    this.physics.add.collider(player, golemFreeGround);

    this.physics.add.collider(player, jumpItems, activateSuperJump, null, this);
    this.physics.add.collider(player, heartItems, addHeart, null, this);
    this.physics.add.collider(player, starItems, activateInvincibilityItem, null, this);
    this.physics.add.collider(player, wolves, looseHeart, null, this);
    this.physics.add.collider(bullets, wolves, killWolf, null, this);
    this.physics.add.collider(leftBullets, wolves, killWolf, null, this);
    this.physics.add.collider(bullets, golems, hurtGolem, null, this);
    this.physics.add.collider(leftBullets, golems, hurtGolem, null, this);
    this.physics.add.collider(player, lava, looseHeart, null, this);
    this.physics.add.collider(player, coins, addCoins, null, this);
    this.physics.add.collider(player, golems, looseHeart, null, this);

    this.cameras.main.setBounds(0, 0, 10000);

    this.anims.create({
      key: 'left',
      frames: [
        { key: 'krl0' },
        { key: 'krl1' },
        { key: 'krl2' },
        { key: 'krl3' },
        { key: 'krl4' },
        { key: 'krl5' },
      ],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'krr0' }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: [
        { key: 'krr0' },
        { key: 'krr1' },
        { key: 'krr2' },
        { key: 'krr3' },
        { key: 'krr4' },
        { key: 'krr5' },
      ],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'attackRight',
      frames: [{ key: 'kar' }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'attackLeft',
      frames: [{ key: 'kal' }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'wolfRight',
      frames: this.anims.generateFrameNumbers('wolfRunningRight', { start: 0, end: 7 }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: 'wolfLeft',
      frames: this.anims.generateFrameNumbers('wolfRunningLeft', { start: 0, end: 7 }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: 'golemRight',
      frames: this.anims.generateFrameNumbers('golemRunningRight', { start: 0, end: 6 }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: 'golemLeft',
      frames: this.anims.generateFrameNumbers('golemRunningLeft', { start: 0, end: 6 }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: 'golemDeath',
      frames: this.anims.generateFrameNumbers('golemDying', { start: 0, end: 27 }),
      frameRate: 10,
    });
  }

  update() {
    const cam = this.cameras.main;
    cam.startFollow(player);
    cam.setFollowOffset(0, 600);

    if (gameOver) {
      return;
    }

    if (hearts === 0) {
      gameOver = true;
      const name = JSON.parse(localStorage.getItem('username:'));
      const object = {
        user: name,
        score,
      };
      APIHandler.postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cJOPOhMbh0xzmA7V3fdX/scores', object);
      const gameLost = document.getElementById('game-lost');
      gameLost.classList.remove('display-none');
      gameLost.classList.add('display-block');
      setTimeout(() => { location.reload(); }, 4000); // eslint-disable-line
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    if (spaceKey.isDown) {
      player.anims.play('attackRight', false);
      if (readyToShoot) {
        this.shot.play();
        bullets.add(this.physics.add.image(player.x + 28, player.y - 5, 'bullet'));
        readyToShoot = false;
        setTimeout(() => { readyToShoot = true; }, 500);
      }
    }

    if (aKey.isDown) {
      player.anims.play('attackLeft', false);
      if (readyToShoot) {
        this.shot.play();
        leftBullets.add(this.physics.add.image(player.x - 28, player.y - 5, 'bullet'));
        readyToShoot = false;
        setTimeout(() => { readyToShoot = true; }, 500);
      }
    }

    if (cursors.up.isDown && player.body.touching.down) {
      if (superJump === false) {
        player.setVelocityY(normalJumpHeight);
      } else if (superJump === true) {
        player.setVelocityY(-550);
      }
    }

    wolves.children.iterate((wolf) => {
      if (wolf.body.velocity.x > 0) {
        wolf.anims.play('wolfRight', true);
      }
      if (wolf.body.velocity.x < 0) {
        wolf.anims.play('wolfLeft', true);
      }
    });

    golems.children.iterate((golem) => {
      if (golem.body.velocity.x > 0) {
        golem.anims.play('golemRight', true);
      }
      if (golem.body.velocity.x < 0) {
        golem.anims.play('golemLeft', true);
      }
      if (golem.body.velocity.x === 0) {
        golem.anims.play('golemStanding', true);
      }
      if ((Math.abs(golem.x - player.x)) < 800) {
        if ((Math.abs(golem.x - player.x)) < 20) {
          golem.body.velocity.x = 0;
        } else if (player.x < golem.x && golem.body.velocity.x >= 0) {
          golem.body.velocity.x = -100;
        } else if (player.x > golem.x && golem.body.velocity.x <= 0) {
          golem.body.velocity.x = 100;
        }
      }
      if (golemHealth <= 0) {
        golem.body.velocity.x = 0;
        player.body.velocity.x = 0;
        golem.anims.play('golemDeath');
        score = score + (250 - timeCount) + 200;
        updateScore();
        gameOver = true;
        const name = JSON.parse(localStorage.getItem('username:'));
        const object = {
          user: name,
          score,
        };
        APIHandler.postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cJOPOhMbh0xzmA7V3fdX/scores', object);
        const gameWon = document.getElementById('game-won');
        gameWon.classList.remove('display-none');
        gameWon.classList.add('display-block');
        setTimeout(() => { location.reload(); }, 6000); // eslint-disable-line
      }
    });

    bullets.setVelocityX(500);
    bullets.children.iterate((bullet) => {
      bullet.body.allowGravity = false;
      setTimeout(() => { bullet.disableBody(true, true); }, 1500);
    });

    leftBullets.setVelocityX(-500);
    leftBullets.children.iterate((bullet) => {
      bullet.body.allowGravity = false;
      setTimeout(() => { bullet.disableBody(true, true); }, 1500);
    });

    this.physics.add.collider(wolves, platforms, patrolPlatform, null, this);

    if (player.x > 7000) {
      golemHealthBar.classList.remove('display-none');
      golemText.classList.remove('display-none');
      golemHealthBar.classList.add('display-block');
      golemText.classList.add('display-block');
      normalJumpHeight = -410;
      if (heartSubtracted === false) {
        hearts = 1;
        updateHealthBar();
        heartSubtracted = true;
        this.monster.play();
        this.mainTheme.stop();
        this.battleTheme.play();
      }
    }
  }
}

export {
  looseHeart,
  addHeart,
};