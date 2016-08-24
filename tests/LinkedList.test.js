import test from 'ava';
import { LinkedList } from './../src/LinkedList.js';

test('LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(JSON.stringify(testLinkedList), '{"size":0,"head":null,"tail":null}');
});

test('LinkedList.push()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Waddup!');
  t.is(testLinkedList.tail.data, "Waddup!");
});

test('LinkedList.unshift()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.unshift('Hello!');
  testLinkedList.unshift('Waddup!');
  t.is(testLinkedList.head.data, "Waddup!");
});

test('LinkedList.pop() with one element', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  t.is(testLinkedList.pop().data, 'Hello!');
});

test('LinkedList.pop() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.pop(), null);
});

test('LinkedList.pop() with multiple existing elements', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Waddup gangsta?!?!');
  t.is(testLinkedList.pop().data, 'Waddup gangsta?!?!');
});

test('LinkedList.shift()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.shift();
  t.is(testLinkedList.head.data, 'Yo!');
});

test('LinkedList.shift() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.shift(), null);
});

test('LinkedList.shift() with one Element', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  t.is(testLinkedList.shift().data, 'Hello!');
});

test('LinkedList.get()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.push('Waddup!');
  testLinkedList.push('Hi!');
  t.is(testLinkedList.get(3).data, 'Waddup!');
});

test('LinkedList.get() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.get(3), null);
});

test('LinkedList.get() out of bounds', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.push('Waddup!');
  testLinkedList.push('Hi!');
  t.is(testLinkedList.get(6), null);
});

test('LinkedList.insert()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.push('Waddup!');
  testLinkedList.push('Hi!');
  testLinkedList.insert(3, 'WE HERE!');
  t.is(testLinkedList.get(5).data, 'Hi!');
});

test('LinkedList.delete()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.push('Waddup!');
  testLinkedList.push('Hi!');
  testLinkedList.delete(3);
  t.is(testLinkedList.get(3).data, 'Hi!');
});

test('LinkedList.delete()', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.delete(3), null);
});

test('LinkedList.indexOf()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Hello!');
  testLinkedList.push('Yo!');
  testLinkedList.push('Waddup!');
  testLinkedList.push('Hi!');
  t.is(testLinkedList.indexOf('Waddup!'), 3);
});

test('LinkedList.indexOf() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.indexOf('Waddup!'), null);
});

test('LinkedList.indexOf() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.indexOf('shiiiiit'), null);
});

test('LinkedList.indexOf() with non exitsing element', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Just added me 👍🏼');
  t.is(testLinkedList.indexOf('shiiiiit'), null);
});

test('LinkedList.isEmpty()', t => {
  var testLinkedList = new LinkedList();
  testLinkedList.push('Just added me 👍🏼');
  t.is(testLinkedList.isEmpty(), false);
});

test('LinkedList.isEmpty() with empty LinkedList', t => {
  var testLinkedList = new LinkedList();
  t.is(testLinkedList.isEmpty(), true);
});
