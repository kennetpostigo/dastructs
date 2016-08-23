import test from 'ava';
import { BinarySearchTree } from './../src/BinarySearchTree.js';

test('BinarySearchTree()', t => {
  var testBinarySearchTree = new BinarySearchTree();
  t.is(JSON.stringify(testBinarySearchTree), '{"root":null}');
});

test('BinarySearchTree(root)', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":null,"right":null}}');
});

test('BinarySearchTree.insert() with key greater than root', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(8);
  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":null,"right":{"key":8,"left":null,"right":null}}}');
});

test('BinarySearchTree.insert() with no root', t => {
  var testBinarySearchTree = new BinarySearchTree();
  testBinarySearchTree.insert(3);
  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":3,"left":null,"right":null}}');
});

test('BinarySearchTree.insert() with no key', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert();
  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":null,"right":null}}');
});

test('BinarySearchTree.insert() with key lesser than root', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(3);
  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":{"key":3,"left":null,"right":null},"right":null}}');
});

test('BinarySearchTree.__appendNode() non exsiting left node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.__appendNode(testBinarySearchTree.root, {"key":3,"left":null,"right":null});

  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":{"key":3,"left":null,"right":null},"right":null}}');
});

test('BinarySearchTree.__appendNode() with existing left node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(4);
  testBinarySearchTree.__appendNode(testBinarySearchTree.root, {"key":3,"left":null,"right":null});

  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":{"key":4,"left":{"key":3,"left":null,"right":null},"right":null},"right":null}}');
});


test('BinarySearchTree.__appendNode() non exisiting right node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.__appendNode(testBinarySearchTree.root, {"key":6,"left":null,"right":null});

  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":null,"right":{"key":6,"left":null,"right":null}}}');
});

test('BinarySearchTree.__appendNode() with existing right node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(6);
  testBinarySearchTree.__appendNode(testBinarySearchTree.root, {"key":7,"left":null,"right":null});

  t.is(JSON.stringify(testBinarySearchTree), '{"root":{"key":5,"left":null,"right":{"key":6,"left":null,"right":{"key":7,"left":null,"right":null}}}}');
});

test('BindarySearchTree.search() with null root', t => {
  var testBinarySearchTree = new BinarySearchTree();
  t.is(testBinarySearchTree.search(6), false);
});

test('BindarySearchTree.search() with null key', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(testBinarySearchTree.search(null), false);
});

test('BindarySearchTree.search() with no key', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(testBinarySearchTree.search(), false);
});

test('BindarySearchTree.search() for greater key than node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(6);
  t.is(testBinarySearchTree.search(6), true);
});

test('BindarySearchTree.search() for lesser key than node', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  testBinarySearchTree.insert(4);
  t.is(testBinarySearchTree.search(4), true);
});

test('BinarySearchTree.traverseInOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  var arr = [];
  testBinarySearchTree.insert(4);
  testBinarySearchTree.insert(3);
  testBinarySearchTree.insert(2);
  testBinarySearchTree.insert(1);
  testBinarySearchTree.insert(6);
  testBinarySearchTree.insert(7);
  testBinarySearchTree.insert(8);
  testBinarySearchTree.insert(9);
  testBinarySearchTree.traverseInOrder((val) => arr.push(val));
  t.deepEqual(arr, [1,2,3,4,5,6,7,8,9]);
});

test('BinarySearchTree.traverseInOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(testBinarySearchTree.traverseInOrder(), undefined);
});

test('BinarySearchTree.traversePostOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  var arr = [];
  testBinarySearchTree.insert(4);
  testBinarySearchTree.insert(3);
  testBinarySearchTree.insert(2);
  testBinarySearchTree.insert(1);
  testBinarySearchTree.insert(6);
  testBinarySearchTree.insert(7);
  testBinarySearchTree.insert(8);
  testBinarySearchTree.insert(9);
  testBinarySearchTree.traversePostOrder((val) => arr.push(val));
  t.deepEqual(arr, [1,2,3,4,9,8,7,6,5]);
});

test('BinarySearchTree.traversePostOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(testBinarySearchTree.traversePostOrder(), undefined);
});


test('BinarySearchTree.traversePreOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  var arr = [];
  testBinarySearchTree.insert(4);
  testBinarySearchTree.insert(3);
  testBinarySearchTree.insert(2);
  testBinarySearchTree.insert(1);
  testBinarySearchTree.insert(6);
  testBinarySearchTree.insert(7);
  testBinarySearchTree.insert(8);
  testBinarySearchTree.insert(9);
  testBinarySearchTree.traversePreOrder((val) => arr.push(val));
  console.log(JSON.stringify(testBinarySearchTree));
  t.deepEqual(arr, [5,1,2,3,4,9,8,7,6]);
});

test('BinarySearchTree.traversePreOrder()', t => {
  var testBinarySearchTree = new BinarySearchTree(5);
  t.is(testBinarySearchTree.traversePreOrder(), undefined);
});

test('BinarySearchTree.traversePreOrder() without node', t => {
  var testBinarySearchTree = new BinarySearchTree();
  t.is(testBinarySearchTree.traversePreOrder(), undefined);
});
