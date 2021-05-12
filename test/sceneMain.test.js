import 'regenerator-runtime/runtime'; 
import { looseHeart, addHeart } from '../src/components/sceneMain';

describe('helper functions for main scene', () => {
  const hearts = 1;

  test('Adds heart to health bar', () => {
    addHeart();
    expect(hearts).toBe(2);
  });

  test('Takes heart from health bar', () => {
    looseHeart();
    expect(hearts).toBe(0);
  });


});
