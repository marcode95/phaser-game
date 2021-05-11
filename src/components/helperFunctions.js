import heart from '../assets/png/heart.png';

const gameOver = false;
let player;
let wolves;
let golems;
let golemHealth = 25;
let jumpItems;
let heartItems;
let starItems;
let coins;
let bullets;
let leftBullets;
let cursors;
let spaceKey;
let score = 0;
let invincible = false;
let superJump = false;
const readyToShoot = true;
let aKey;
const normalJumpHeight = -370;
const heartSubtracted = false;
let hearts = 1;
let timeCount = 0;

const healthBar = document.getElementById('health-bar');
const jumpItemField = document.getElementById('jump-item-field');
const starItemField = document.getElementById('star-item-field');
const scoreField = document.getElementById('score-field');
const golemHealthBar = document.getElementById('golem-health-bar');
const golemText = document.getElementById('golem-text');
const time = document.getElementById('time');

const updateHealthBar = () => {
  healthBar.innerHTML = '';
  for (let i = 0; i < hearts; i += 1) {
    const singleHeart = document.createElement('img');
    singleHeart.setAttribute('src', heart);
    healthBar.appendChild(singleHeart);
  }
};

const createLoop = (scene, count, texture, scrollFactor) => {
  let x = 0;
  for (let i = 0; i < count; i += 1) {
    const m = scene.add.image(x, 337.5, texture).setScrollFactor(scrollFactor);
    x += m.width;
  }
};

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

const activateInvincibilityItem = (player, starItem) => {
  activateInvincibility(8000);
  starItem.disableBody(true, true);
  starItemField.innerHTML = '<div id="star-text">Invincible!</div><div id="star-progress"><div class="star-bar"></div></div>';
  setTimeout(() => { starItemField.innerHTML = ''; }, 8000);
};

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

const hurtGolem = (bullet, golem) => {
  bullet.disableBody(true, true);
  golem = golem;
  golemHealth -= 10;
  const golemHealthBarLength = 400 * (golemHealth / 25);
  golemHealthBar.style.width = `${golemHealthBarLength}px`;
};

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

updateHealthBar();
starItemField.setAttribute('style', 'position: absolute; top: 223px; left: 20px;');
golemHealthBar.setAttribute('style', 'position: absolute; top: 30px; left: 750px; width: 400px; height: 15px; background-color: red;');
golemText.setAttribute('style', 'position: absolute; top: 30px; left: 680px; color: white; font-family: "Courier New", Courier, monospace;');
const timeCounter = setInterval(clock, 1000);

export {
  gameOver,
  player,
  wolves,
  golems,
  golemHealth,
  jumpItems,
  heartItems,
  starItems,
  coins,
  bullets,
  leftBullets,
  cursors,
  spaceKey,
  score,
  invincible,
  superJump,
  readyToShoot,
  aKey,
  normalJumpHeight,
  heartSubtracted,
  hearts,
  timeCount,
  healthBar,
  jumpItemField,
  starItemField,
  scoreField,
  golemHealthBar,
  golemText,
  time,
  timeCounter,
  updateHealthBar,
  createLoop,
  activateSuperJump,
  activateInvincibility,
  looseHeart,
  addHeart,
  activateInvincibilityItem,
  updateScore,
  killWolf,
  addCoins,
  hurtGolem,
  clock,
  showStatuses,
  patrolPlatform,
};