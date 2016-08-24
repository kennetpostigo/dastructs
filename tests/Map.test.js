import test from 'ava';
import { Map } from './../src/Map.js';

test('Map', t => {
  var testMap = new Map();
  t.is(JSON.stringify(testMap), '{"table":[],"cache":[],"size":0}');
});

test('Map.hashCode()', t => {
  var testMap = new Map();
  testMap.hashCode('Hello');
  t.is(testMap.hashCode('Hello'), 488);
});

test('Map.hashCode() with object', t => {
  var testMap = new Map();
  t.is(testMap.hashCode({hi: 'Hello'}), 696);
});

test('Map.clear()', t => {
  var testMap = new Map();
  testMap.clear();
  t.is(JSON.stringify(testMap), '{"table":[],"cache":[],"size":0}');
});

test('Map.get()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyTwo', 2);
  testMap.set('keyThree', 3);
  t.is(testMap.get('keyTwo'), 2);
});

test('Map.get()', t => {
  var testMap = new Map();
  t.is(testMap.get('keyTwo'), undefined);
});

test('Map.has()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  t.is(testMap.has('keyOne'), true);
});

test('Map.has() without existing key', t => {
  var testMap = new Map();
  t.is(testMap.has('keyOne'), false);
});

test('Map.set()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  t.is(testMap.get('keyOne'), 1);
});

test('Map.set() with double', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyOne', 2);
  t.is(testMap.size, 1);
});

test('Map.delete()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  t.is(testMap.delete('keyOne'), true);
});

test('Map.delete() without existing key', t => {
  var testMap = new Map();
  t.is(testMap.delete('keyOne'), false);
});

test('Map.values()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyTwo', 2);
  testMap.set('keyThree', 3);
  testMap.set('keyFour', 4);
  t.deepEqual(testMap.values(), [1,2,3,4]);
});

test('Map.values() with deleted key', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyTwo', 2);
  testMap.set('keyThree', 3);
  testMap.set('keyFour', 4);
  testMap.delete('keyOne');
  t.deepEqual(testMap.values(), [2,3,4]);
});

test('Map.keys()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyTwo', 2);
  testMap.set('keyThree', 3);
  testMap.set('keyFour', 4);
  t.deepEqual(testMap.keys(), [649,323,720,576]);
});

test('Map.keys() with deleted key', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  testMap.set('keyTwo', 2);
  testMap.set('keyThree', 3);
  testMap.set('keyFour', 4);
  testMap.delete('keyOne');
  t.deepEqual(testMap.keys(), [323,720,576]);
});
