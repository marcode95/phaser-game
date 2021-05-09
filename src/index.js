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
import longGround from './assets/longGround.png';
import lavaTile from './assets/lava.png';

import heart from './assets/heart.png';
import bullet from './assets/bullet.png';
import jumpItem from './assets/jumpItem.png';
import heartItem from './assets/heartItem.png';
import starItem from './assets/starItem.png';
import coin from './assets/coin.png'

import wolfStanding from './assets/wolfStanding.png';
import wolfRunningRight from './assets/wolfRunningRight.png';
import wolfRunningLeft from './assets/wolfRunningLeft.png';

import golemStanding from './assets/golemStanding.png';
import golemRunningRight from './assets/golemRunningRight.png';
import golemRunningLeft from './assets/golemRunningLeft.png';
import golemDying from './assets/golemDying.png';

import knightRunningRight0 from './assets/Walk_01.png';
import knightRunningRight1 from './assets/Walk_02.png';
import knightRunningRight2 from './assets/Walk_03.png';
import knightRunningRight3 from './assets/Walk_04.png';
import knightRunningRight4 from './assets/Walk_05.png';
import knightRunningRight5 from './assets/Walk_06.png';

import knightRunningLeft0 from './assets/Walkleft_01.png';
import knightRunningLeft1 from './assets/Walkleft_02.png';
import knightRunningLeft2 from './assets/Walkleft_03.png';
import knightRunningLeft3 from './assets/Walkleft_04.png';
import knightRunningLeft4 from './assets/Walkleft_05.png';
import knightRunningLeft5 from './assets/Walkleft_06.png';

import knightAttackingRight from './assets/Action_16.png';
import knightAttackingLeft from './assets/Actionleft_16.png';

var player;
var wolves;
var golems;
var golemFreeGround;
var golemHealth = 25;
var jumpItems;
var heartItems;
var starItems;
var coins;
var bullets;
var leftBullets;
var platforms;
var lava;
var cursors;
var spaceKey
var score = 0;
var gameOver = false;
let invincible = false;
let superJump = false;
let readyToShoot = true;
var aKey;
let normalJumpHeight = -370;
let heartSubtracted = false;

class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  create() {
    this.scene.start("SceneMain");
  }
}

class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }

  preload () {
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

    this.load.image('heart', heart);
  }

  create () {
    //  A simple background for our game
    this.add.image(600, 337.5, 'sky').setScrollFactor(0);
    createLoop(this, 9, 'trees4', 0.2);
    createLoop(this, 9, 'trees2', 0.4);
    createLoop(this, 9, 'trees1', 0.8);
    createLoop(this, 9, 'trees3', 0.8);
    createLoop(this, 9, 'stones', 1);
    createLoop(this, 9, 'glowworm4', 1);

  
  
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();
    lava = this.physics.add.staticGroup();
    golemFreeGround = this.physics.add.staticGroup();
    golemFreeGround.create(7300, 470, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7870, 470, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7200, 380, 'ground').setScale(1.5).refreshBody();
    golemFreeGround.create(7970, 380, 'ground').setScale(1.5).refreshBody();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    // platforms.create(32, 670, 'ground').setScale(1.5).refreshBody();
    // platforms.create(96, 670, 'ground').setScale(1.5).refreshBody();
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


    

    var movingPlattformOne = this.physics.add.image(850, 390, 'ground')
    .setImmovable(true)
    .setVelocity(100, -100);

    movingPlattformOne.body.setAllowGravity(false);
    
    this.tweens.timeline({
      targets: movingPlattformOne.body.velocity,
      loop: -1,
      tweens: [
        { x:    0, y: -120, duration: 900, ease: 'Stepped' },
        { x:    0, y: -80, duration: 300, ease: 'Stepped' },
        { x:    0, y: -40, duration: 300, ease: 'Stepped' },
        { x:    0, y:    0, duration: 800, ease: 'Stepped' },
        { x:    0, y:  120, duration: 900, ease: 'Stepped' },
        { x:    0, y:  80, duration: 300, ease: 'Stepped' },
        { x:    0, y:  40, duration: 300, ease: 'Stepped' },
        { x:    0, y:    0, duration: 800, ease: 'Stepped' }
      ]
    });

    var movingPlattformTwo = this.physics.add.image(3500, 500, 'ground')
    .setImmovable(true)
    .setVelocity(100, -100);

    movingPlattformTwo.body.setAllowGravity(false);
    
    this.tweens.timeline({
      targets: movingPlattformTwo.body.velocity,
      loop: -1,
      tweens: [
        { x:    150, y: 0, duration: 4200, ease: 'Stepped' },
        { x:    0, y: 0, duration: 2300, ease: 'Stepped' },
        { x:    -150, y: 0, duration: 4200, ease: 'Stepped' },
        { x:    0, y: 0, duration: 2300, ease: 'Stepped' },
      ]
    });

    var movingPlattformThree = this.physics.add.image(5000, 500, 'ground')
    .setImmovable(true)
    .setVelocity(100, -100);

    movingPlattformThree.body.setAllowGravity(false);
    
    this.tweens.timeline({
      targets: movingPlattformThree.body.velocity,
      loop: -1,
      tweens: [
        { x:    -150, y: 0, duration: 4200, ease: 'Stepped' },
        { x:    0, y: 0, duration: 2300, ease: 'Stepped' },
        { x:    150, y: 0, duration: 4200, ease: 'Stepped' },
        { x:    0, y: 0, duration: 2300, ease: 'Stepped' },
      ]
    });

  
    // The player and its settings
    player = this.physics.add.sprite(6900, 0, 'krr0');
  
    //  Player physics properties. Give the little guy a slight bounce.
    player.setCollideWorldBounds(false);
    player.setGravityY(300);
    
  

  
    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  
    //  WOLVES
    wolves = this.physics.add.group({
      key: 'wolfStanding',
      repeat: 2,
      setXY: { x: 200, y: 120, stepX: 1400 }
    })
    wolves.setVelocityX(150);

    //  golems
    golems = this.physics.add.group({
      key: 'golemStanding',
      setXY: { x: 7900, y: 0 }
    })
    golems.setVelocityX(0.00000001);
  
    //  JUMP ITEM
    jumpItems = this.physics.add.group({
      key: 'jumpItem',
      setXY: { x: 1900, y: 0}
    }); 

    jumpItems.add(this.physics.add.image(5860, 500, "jumpItem"));
  
    //  HEART ITEM
    heartItems = this.physics.add.group({
      key: 'heartItem',
      setXY: { x: 2675, y: 400}
    });
  
    //  STAR ITEM
    starItems = this.physics.add.group({
      key: 'starItem',
      setXY: { x: 5400, y: 250}
    });  
  
    //  BULLET 
    bullets = this.physics.add.group({

    });

    //  LEFTBULLET 
    leftBullets = this.physics.add.group({
      key: 'bullet',
    });


    //  COIN 
    coins = this.physics.add.group({
      key: 'coin',
      setXY: { x: 200, y: 0},
    });

    coins.add(this.physics.add.image(850, 0, "coin"));
    coins.add(this.physics.add.image(1230, 0, "coin"));
    coins.add(this.physics.add.image(2000, 0, "coin"));
    coins.add(this.physics.add.image(2350, 400, "coin"));
    coins.add(this.physics.add.image(3670, 300, "coin"));
    coins.add(this.physics.add.image(3800, 200, "coin"));
    coins.add(this.physics.add.image(3930, 300, "coin"));
    coins.add(this.physics.add.image(4570, 300, "coin"));
    coins.add(this.physics.add.image(4830, 300, "coin"));
    coins.add(this.physics.add.image(4830, 300, "coin"));
    coins.add(this.physics.add.image(5400, 500, "coin"));
    coins.add(this.physics.add.image(5500, 500, "coin"));
    coins.add(this.physics.add.image(5600, 500, "coin"));
    coins.add(this.physics.add.image(4700, 200, "coin"));
    
    createLoop(this, 4, 'glowworm1', 1.50);
    createLoop(this, 4, 'glowworm2', 1.50);
    createLoop(this, 4, 'glowworm3', 1.50);
  

  
    //  Collide the player and the stars with the platforms
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

  
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  
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

        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
          key: 'left',
          frames: [
            { key: 'krl0' },
            { key: 'krl1' },
            { key: 'krl2' },
            { key: 'krl3' },
            { key: 'krl4' },
            { key: 'krl5' }
          ],
          frameRate: 10,
          repeat: -1
      });
    
      this.anims.create({
          key: 'turn',
          frames: [{ key: 'krr0' }],
          frameRate: 10,
          repeat: -1
      });
    
      this.anims.create({
          key: 'right',
          frames: [
            { key: 'krr0' },
            { key: 'krr1' },
            { key: 'krr2' },
            { key: 'krr3' },
            { key: 'krr4' },
            { key: 'krr5' }
        ],
          frameRate: 10,
          repeat: -1
      });
    
      this.anims.create({
        key: 'attackRight',
        frames: [{ key: 'kar' }],
        frameRate: 10,
        repeat: -1
      });  
  
      this.anims.create({
        key: 'attackLeft',
        frames: [{ key: 'kal' }],
        frameRate: 10,
        repeat: -1
      });  
    
      this.anims.create({
        key: 'wolfRight',
        frames: this.anims.generateFrameNumbers('wolfRunningRight', { start: 0, end: 7 }),
        frameRate: 15,
        repeat: -1
      });
    
      this.anims.create({
        key: 'wolfLeft',
        frames: this.anims.generateFrameNumbers('wolfRunningLeft', { start: 0, end: 7 }),
        frameRate: 15,
        repeat: -1
      });

      this.anims.create({
        key: 'golemRight',
        frames: this.anims.generateFrameNumbers('golemRunningRight', { start: 0, end: 6 }),
        frameRate: 15,
        repeat: -1
      });
    
      this.anims.create({
        key: 'golemLeft',
        frames: this.anims.generateFrameNumbers('golemRunningLeft', { start: 0, end: 6 }),
        frameRate: 15,
        repeat: -1
      });


      this.anims.create({
        key: 'golemDeath',
        frames: this.anims.generateFrameNumbers('golemDying', { start: 0, end: 27 }),
        frameRate: 10,
      });
  }

  update () {
    const cam = this.cameras.main;
    cam.startFollow(player);
    cam.setFollowOffset(0, 600);
    
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
  
 
    }
  
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
  
 
    }
  
    else
    {      
      player.setVelocityX(0);
      player.anims.play('turn');
    }
  
    if (spaceKey.isDown) {
      player.anims.play('attackRight', false);
      if (readyToShoot) {
        bullets.add(this.physics.add.image(player.x + 28, player.y - 5, "bullet"));
        readyToShoot = false;
        setTimeout(function(){ readyToShoot = true; }, 500);
      }        
    }

    if (aKey.isDown) {
      player.anims.play('attackLeft', false);
      if (readyToShoot) {
        leftBullets.add(this.physics.add.image(player.x - 28, player.y - 5, "bullet"));
        readyToShoot = false;
        setTimeout(function(){ readyToShoot = true; }, 500);
      }        
    }
  
  
  
    if (cursors.up.isDown && player.body.touching.down) { 
      if (superJump === false) {
        player.setVelocityY(normalJumpHeight);
      }
      else if (superJump === true) {
        player.setVelocityY(-550);      
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

    golems.children.iterate(function (golem) {
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
        }
        else if (player.x < golem.x && golem.body.velocity.x >= 0) {
          golem.body.velocity.x = -100;
        }
        else if (player.x > golem.x && golem.body.velocity.x <= 0) {
          golem.body.velocity.x = 100;
        }
      }
      if (golemHealth <= 0) {
        golem.body.velocity.x = 0;
        player.body.velocity.x = 0;
        golem.anims.play('golemDeath');
        score = score + (250 - timeCount) + 200;
        updateScore();
        clearInterval(timeCounter);
        gameOver = true;
      }
    });

    bullets.setVelocityX(500);
    bullets.children.iterate(function (bullet) {
      bullet.body.allowGravity = false;
      setTimeout(function(){ bullet.disableBody(true, true); }, 1500);
    });

    leftBullets.setVelocityX(-500);
    leftBullets.children.iterate(function (bullet) {
      bullet.body.allowGravity = false;
      setTimeout(function(){ bullet.disableBody(true, true); }, 1500);
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
      }
    }

    if (hearts === 0) {
      gameOver = true;
    }
  }
}

const patrolPlatform = (wolf, platform) => {
  if (wolf.body.velocity.x > 0 && wolf.x + wolf.width > platform.x + platform.width) {
      wolf.body.velocity.x *= -1;
  }
  else if (wolf.body.velocity.x < 0 && wolf.x - wolf.width < platform.x - platform.width) {
      wolf.body.velocity.x *= -1;
  }
}

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

  create() {
    
  }
}

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
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

var game = new Phaser.Game(config);

















let hearts = 1;
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
    const m = platforms.create(start + x*1.5, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
}

const createLava = (start, height, texture, scale, count) => {
  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = lava.create(start + x*1.5, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
}


const jumpItemField = document.getElementById('jump-item-field');

const activateSuperJump = (player, jumpItem) => {
  superJump = true;
  setTimeout(function(){ superJump = false; }, 8000);
  jumpItem.disableBody(true, true);
  jumpItemField.innerHTML = '<div id="superjump-text">Superjump!</div><div id="progress"><div class="bar"></div></div>'
  setTimeout(function(){ jumpItemField.innerHTML = ''; }, 8000);
}

const activateInvincibility = (time) => {
  invincible = true;
  setTimeout(function(){ invincible = false; }, time);
}

const looseHeart = () => {
  if (invincible === false) {
    activateInvincibility(1000);
    hearts = hearts - 1;
    updateHealthBar();
  }
}

const addHeart = (player, heartItem) => {
  hearts = hearts + 1;
  updateHealthBar();
  heartItem.disableBody(true, true);
}

const starItemField = document.getElementById('star-item-field');
starItemField.setAttribute('style','position: absolute; top: 223px; left: 20px;')
console.log(starItemField)
const activateInvincibilityItem = (player, starItem) => {
  activateInvincibility(8000);
  starItem.disableBody(true, true);
  starItemField.innerHTML = '<div id="star-text">Invincible!</div><div id="star-progress"><div class="star-bar"></div></div>'
  setTimeout(function(){ starItemField.innerHTML = ''; }, 8000);
}

const killWolf = (bullet, wolf) => {
  wolf.disableBody(true, true);
  bullet.disableBody(true, true);
  score = score + 50;
  updateScore();
}

const addCoins = (player, coin) => {
  score = score + 50;
  updateScore();
  coin.disableBody(true, true);
}

const golemHealthBar = document.getElementById('golem-health-bar');
golemHealthBar.setAttribute('style','position: absolute; top: 30px; left: 750px; width: 400px; height: 15px; background-color: red;')


const golemText = document.getElementById('golem-text');
golemText.setAttribute('style','position: absolute; top: 30px; left: 680px; color: white; font-family: "Courier New", Courier, monospace;')

const hurtGolem = (bullet, golem) => {
  bullet.disableBody(true, true);
  golemHealth = golemHealth - 1;
  let golemHealthBarLength = 400*(golemHealth/25);  
  golemHealthBar.style.width = golemHealthBarLength + 'px'
}

const scoreField = document.getElementById('score-field');
const updateScore = () => {
  scoreField.innerHTML = 'Score: ' + score;
}

const time = document.getElementById('time');
let timeCount = 0;
const clock = () => {
  timeCount = timeCount + 1;
  time.innerHTML = 'Time:  ' + timeCount;
}

const timeCounter = setInterval(clock, 1000);

function hitBomb (player, bomb)
{
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play('turn');

  gameOver = true;
}
