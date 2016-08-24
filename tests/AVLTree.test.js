import test from 'ava';
import { AVLTree } from './../src/AVLTree.js';

test('AVLTree()', t => {
  var testAVLTree = new AVLTree();
  t.deepEqual(testAVLTree, {"root": null});
});

test('AVLTree() with root', t => {
  var testAVLTree = new AVLTree(4);
  t.deepEqual(testAVLTree, {"root": {"key":4, "left":null, "right":null}});
});
