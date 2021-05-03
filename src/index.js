import './style.css';

import sky from './assets/sky.png';
import stones from './assets/stones.png';
import trees1 from './assets/trees1.png';
import trees2 from './assets/trees2.png';
import trees3 from './assets/trees3.png';
import trees4 from './assets/trees4.png';
import glowworm1 from './assets/glowworm1.png';
import glowworm2 from './assets/glowworm2.png';
import glowworm3 from './assets/glowworm3.png';
import glowworm4 from './assets/glowworm4.png';
import ground from './assets/ground.png';
import heart from './assets/heart.png';
import knightStanding from './assets/knightStanding.png';
import knightRunningRight from './assets/knightRunningRight.png';
import knightRunningLeft from './assets/knightRunningLeft.png';
import wolfStanding from './assets/wolfStanding.png';
import wolfRunningRight from './assets/wolfRunningRight.png';
import wolfRunningLeft from './assets/wolfRunningLeft.png';
import jumpItem from './assets/jumpItem.png';
import heartItem from './assets/heartItem.png';
import dude from './assets/dude.png';
import bomb from './assets/bomb.png';
import star from './assets/star.png';

let hearts = 3;
const healthBar = document.getElementById('health-bar');
const updateHealthBar = () => {
  healthBar.innerHTML = ''
  for (let i=0; i < hearts; i++) {
    const singleHeart = document.createElement('img');
    singleHeart.setAttribute('src', heart);
    healthBar.appendChild(singleHeart);
  }
}

updateHealthBar();


var config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 675,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var player;
var wolves;
var jumpItems;
var heartItems;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
let invincible = false;
let superJump = false;


var game = new Phaser.Game(config);

const createLoop = (scene, count, texture, scrollFactor) => {
  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = scene.add.image(x, 337.5, texture).setScrollFactor(scrollFactor);
    x += m.width;
  }
}

const createGround = (start, height, texture, scale, count) => {
  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = platforms.create(start + x, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
}

function preload ()
{
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
  this.load.image('jumpItem', jumpItem);
  this.load.image('heartItem', heartItem);
  this.load.image('star', star);
  this.load.image('bomb', bomb);
  this.load.image('heart', heart);
  this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  this.load.spritesheet('knightStanding', knightStanding, { frameWidth: 64, frameHeight: 45 });
  this.load.spritesheet('knightRunningRight', knightRunningRight, { frameWidth: 96, frameHeight: 45 });
  this.load.spritesheet('knightRunningLeft', knightRunningLeft, { frameWidth: 96, frameHeight: 45 });
  this.load.spritesheet('wolfStanding', wolfStanding, { frameWidth: 64, frameHeight: 45 });
  this.load.spritesheet('wolfRunningRight', wolfRunningRight, { frameWidth: 64, frameHeight: 45 });
  this.load.spritesheet('wolfRunningLeft', wolfRunningLeft, { frameWidth: 64, frameHeight: 45 });
}


function create ()
{
  //  A simple background for our game
  this.add.image(600, 337.5, 'sky').setScrollFactor(0);
  createLoop(this, 4, 'trees4', 0.2);
  createLoop(this, 4, 'trees2', 0.4);
  createLoop(this, 4, 'trees1', 0.6);
  createLoop(this, 4, 'trees3', 0.8);
  createLoop(this, 4, 'stones', 1);
  createLoop(this, 4, 'glowworm4', 1);
  createLoop(this, 4, 'glowworm1', 1.25);
  createLoop(this, 4, 'glowworm2', 1.25);
  createLoop(this, 4, 'glowworm3', 1.25);



  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();

  //  Here we create the ground.
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  // platforms.create(32, 670, 'ground').setScale(1.5).refreshBody();
  // platforms.create(96, 670, 'ground').setScale(1.5).refreshBody();
  createGround(32, 670, 'ground', 1.5, 15);

  //  Now let's create some ledges
//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');

  // The player and its settings
  player = this.physics.add.sprite(100, 450, 'knightStanding');

  //  Player physics properties. Give the little guy a slight bounce.
  player.setCollideWorldBounds(true);
  player.setGravityY(200);

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('knightRunningLeft', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: this.anims.generateFrameNumbers('knightStanding', { start: 0, end: 14 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('knightRunningRight', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
    key: 'wolfRight',
    frames: this.anims.generateFrameNumbers('wolfRunningRight', { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'wolfLeft',
    frames: this.anims.generateFrameNumbers('wolfRunningLeft', { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1
  });

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();
  //  WOLVES
  wolves = this.physics.add.group({
    key: 'wolfStanding',
    setXY: { x: 300, y: 0 }
  })
  wolves.setVelocityX(0);

  //  JUMP ITEM
  jumpItems = this.physics.add.group({
    key: 'jumpItem',
    setXY: { x: 500, y: 0}
  });  

  //  HEART ITEM
  heartItems = this.physics.add.group({
    key: 'heartItem',
    setXY: { x: 400, y: 0}
  });  


  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  stars = this.physics.add.group({
      key: 'star',
      repeat: 2,
      setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function (child) {

      //  Give each star a slightly different bounce
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

  });

  bombs = this.physics.add.group();

  //  The score
  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(wolves, platforms);
  this.physics.add.collider(jumpItems, platforms);
  this.physics.add.collider(heartItems, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.collider(bombs, platforms);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, stars, collectStar, null, this);

  this.physics.add.collider(player, bombs, hitBomb, null, this);

  this.physics.add.collider(player, jumpItems, activateSuperJump, null, this);

  this.physics.add.collider(player, heartItems, addHeart, null, this);

  this.physics.add.collider(player, wolves, looseHeart, null, this);

  this.cameras.main.setBounds(0, 0, 3000);
}

function update () {
  const cam = this.cameras.main;

  if (gameOver)
  {
      return;
  }

  // if (player.body.velocity.x === 0) {
  //   player.anims.play('turn');
  // }

  if (cursors.left.isDown)
  {  
      player.setVelocityX(-160);
      player.anims.play('left', true);

      cam.scrollX -= 2;
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);
      player.anims.play('right', true);

      cam.scrollX += 2;
  }
  else
  {      
    player.setVelocityX(0);
    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) { 
    if (superJump === false) {
      player.setVelocityY(-270);
    }
    else if (superJump === true) {
      player.setVelocityY(-470);      
    }
  }

  wolves.children.iterate(function (wolf) {
    if (wolf.body.velocity.x > 0) {
      wolf.anims.play('wolfRight', true);
    }
    if (wolf.body.velocity.x < 0) {
      wolf.anims.play('wolfLeft', true);
    }
  });
}

const activateSuperJump = (player, jumpItem) => {
  superJump = true;
  setTimeout(function(){ superJump = false; }, 8000);
  jumpItem.disableBody(true, true);
}

const activateInvincibility = () => {
  invincible = true;
  setTimeout(function(){ invincible = false; }, 3000);
}

const looseHeart = () => {
  if (invincible === false) {
    activateInvincibility();
    hearts = hearts - 1;
    updateHealthBar();
  }
}

const addHeart = (player, heartItem) => {
  hearts = hearts + 1;
  updateHealthBar();
  heartItem.disableBody(true, true);
}




function collectStar (player, star)
{
  star.disableBody(true, true);

  //  Add and update the score
  score += 10;
  scoreText.setText('Score: ' + score);

  if (stars.countActive(true) === 0)
  {
      //  A new batch of stars to collect
      stars.children.iterate(function (child) {

          child.enableBody(true, child.x, 0, true, true);

      });

      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

      var bomb = bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      bomb.allowGravity = false;

  }
}

function hitBomb (player, bomb)
{
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play('turn');

  gameOver = true;
}
