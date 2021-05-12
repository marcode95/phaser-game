import 'regenerator-runtime/runtime';
import APIHandler from '../src/components/api';

describe('check if API works', () => {
  test('api does not return null', () => expect(APIHandler.getData()).not.toBeNull());
  test('api does get an object', () => expect(APIHandler.getData()).toBeInstanceOf(Object));
  test('api does not return null', () => expect(APIHandler.postData()).not.toBeNull());
  test('api does post an object', () => expect(APIHandler.postData()).toBeInstanceOf(Object));
});