import test from 'ava';
import { Map } from './../src/Map.js';

test('Map', t => {
  var testMap = new Map();
  t.is(JSON.stringify(testMap), '{"table":[]}');
});

test('Map.hashCode()', t => {
  var testMap = new Map();
  testMap.hashCode('Hello');
  console.log(testMap.hashCode('Hello'));
  t.is(testMap.hashCode('Hello'), 4157704578);
});

test('Map.clear()', t => {
  var testMap = new Map();
  testMap.clear();
  t.is(JSON.stringify(testMap), '{"table":[]}');
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

test('Map.delete()', t => {
  var testMap = new Map();
  testMap.set('keyOne', 1);
  t.is(testMap.delete('keyOne'), true);
});

test('Map.delete() without existing key', t => {
  var testMap = new Map();
  t.is(testMap.delete('keyOne'), false);
});
