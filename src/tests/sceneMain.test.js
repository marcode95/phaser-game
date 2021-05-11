import updateHealthBar from '..components/SceneMain'

describe('helper functions for main scene', () => {
  let hearts = 1;
  const healthBar = document.getElementById('health-bar');

  test('Adds hearts to health bar', () => {
    updateHealthBar();
    expect(healthBar).toContain('single-todo-item');
  });

});
