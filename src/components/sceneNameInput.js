const form = document.getElementById('form');
const showForm = () => {
  form.classList.remove('display-none');
  form.classList.add('display-flex');
};

const hideForm = () => {
  form.classList.remove('display-flex');
  form.classList.add('display-none');
};

export default class SceneNameInput extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneNameInput' });
  }

  create() {
    showForm();
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      const nameInput = document.getElementById('nameInput').value;
      if (nameInput == null || nameInput === '') {
        localStorage.setItem('username:', JSON.stringify('Anon'));
      } else {
        localStorage.setItem('username:', JSON.stringify(nameInput));
      }
      this.scene.start('SceneMain');
      hideForm();
    });
  }
}