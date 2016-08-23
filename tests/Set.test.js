import test from 'ava';
import { Set } from './../src/Set.js';

test('Set()', t => {
  var testSet = new Set();
  t.is(JSON.stringify(testSet), '{"items":{"table":[],"cache":[],"size":0},"size":0}');
});

test('Set() with default values', t => {
  var testSet = new Set([1, 2, 3]);
  t.deepEqual(testSet.values(), [1, 2, 3]);
});

test('Set.add()', t => {
  var testSet = new Set();
  t.is(testSet.add('Hello'), true);
});

test('Set.add() with existing/duplicate value', t => {
  var testSet = new Set();
  testSet.add('Hello');
  t.is(testSet.add('Hello'), false);
});

test('Set.clear()', t => {
  var testSet = new Set();
  testSet.add('Hello');
  testSet.add('Waddup');
  testSet.clear();
  t.deepEqual(testSet.values(), []);
});

test('Set.delete()', t => {
  var testSet = new Set();
  testSet.add('Hello');
  t.is(testSet.delete('Hello'), true);
});

test('Set.delete() non existing value', t => {
  var testSet = new Set();
  t.is(testSet.delete('Hello'), false);
});

test('Set.has()', t => {
  var testSet = new Set();
  testSet.add('Hello');
  t.is(testSet.has('Hello'), true);
});

test('Set.has() non existing value', t => {
  var testSet = new Set();
  t.is(testSet.has('Hello'), false);
});

test('Set.values()', t => {
  var testSet = new Set();
  testSet.add('Hello');
  testSet.add('Waddup');
  testSet.add('Yo');
  t.deepEqual(testSet.values(), ['Hello', 'Waddup', 'Yo']);
});

test('Set.union()', t => {
  var testSet = new Set([1, 2, 3]);
  var testSet2 = new Set([4, 5, 6]);
  var union = testSet.union(testSet2);
  t.deepEqual(union.values(), [ 1, 2, 3, 4, 5, 6 ]);
});

test('Set.intersection()', t => {
  var testSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var testSet2 = new Set([2, 4, 6, 8, 10, 11]);
  var intersect = testSet.intersection(testSet2);
  t.deepEqual(intersect.values(), [2, 4, 6, 8, 10]);
});

test('Set.intersection()', t => {
  var testSet = new Set([2, 4, 6, 8, 10, 11]);
  var testSet2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var intersect = testSet.intersection(testSet2);
  t.deepEqual(intersect.values(), [2, 4, 6, 8, 10]);
});

test('Set.difference()', t => {
  var testSet = new Set([1, 2, 3, 4, 5]);
  var testSet2 = new Set([1, 3, 4, 6, 8, 10]);
  var difference = testSet.difference(testSet2);
  t.deepEqual(difference.values(), [2, 5]);
});

// test('Set.subset()', t => {
//   var testSet = new Set([1, 2, 3]);
//   var testSet2 = new Set([1, 2, 3, 4, 5, 6]);
//   t.is(testSet.subset(testSet2), true);
// });
//
// test('Set.subset() with smaller set', t => {
//   var testSet = new Set([1,2,3]);
//   var testSet2 = new Set([1]);
//   t.is(testSet.subset(testSet2), false);
// });
//
// test('Set.subset() with non subset', t => {
//   var testSet = new Set([1, 2, 3]);
//   var testSet2 = new Set([2, 4, 6, 8]);
//   t.is(testSet.subset(testSet2), false);
// });
