import test from 'ava';
import { Trie } from './../src/Trie.js';

test('Trie()', t => {
  var testTrie = new Trie();
  t.deepEqual(testTrie, {"root": {"value": "", "keys": {}}});
});

test('Trie.insert()', t => {
  var testTrie = new Trie();
  t.deepEqual(testTrie.insert('ca'), {"root": {"value": "", "keys": {"c": {"value": "", "keys": {"a": {"value": "ca", "keys": {}}}}}}});
});

test('Trie.insert() with an existing node', t => {
  var testTrie = new Trie();
  testTrie.insert('c');
  t.deepEqual(testTrie.insert('ca'), {"root": {"value": "", "keys": {"c": {"value": "c", "keys": {"a": {"value": "ca", "keys": {}}}}}}});
});

test('Trie.insert() with no term', t => {
  var testTrie = new Trie();
  t.is(testTrie.insert(), undefined);
});

test('Trie.remove()', t => {
  var testTrie = new Trie();
  testTrie.insert('ca');
  t.is(testTrie.remove('ca'), true);
});

test('test.remove() without a term', t => {
  var testTrie = new Trie();
  t.is(testTrie.remove(), false);
});

test('test.remove() without existing Trie', t => {
  var testTrie = new Trie();
  testTrie.insert('ca');
  t.is(testTrie.remove('cad'), false);
});

test('test.remove() without existing value', t => {
  var testTrie = new Trie();
  testTrie.insert('cad');
  t.is(testTrie.remove('ca'), false);
});

test('test.remove() without null node', t => {
  var testTrie = new Trie();
  testTrie.insert('cad');
  t.is(testTrie.__removeTrie(null, 'ca', 'ca'), false);
});

test('test.remove() with a child Trie', t => {
  var testTrie = new Trie();
  testTrie.insert('ca');
  testTrie.insert('cad');
  t.is(testTrie.remove('ca'), true);
});

test('Trie.contains', t => {
  var testTrie = new Trie();
  testTrie.insert('ca');
  t.is(testTrie.contains('ca'), true);
});

test('Trie.contains without a term', t => {
  var testTrie = new Trie();
  t.is(testTrie.contains(), false);
});

test('Trie.contains without an existing node', t => {
  var testTrie = new Trie();
  testTrie.insert('ca');
  t.is(testTrie.contains('cd'), false);
});
