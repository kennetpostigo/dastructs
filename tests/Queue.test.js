import test from 'ava';
import { Queue } from './../src/Queue.js';

test('Queue', t => {
  var testQueue = new Queue();
  t.is(JSON.stringify(testQueue), '{"first":null,"last":null}')
});

test('Queue.add()', t => {
  var testQueue = new Queue();
  testQueue.add('Just added me 👍🏼')
  t.is(JSON.stringify(testQueue), '{"first":{"data":"Just added me 👍🏼","next":null},"last":{"data":"Just added me 👍🏼","next":null}}')
});

test('Queue.add() existing', t => {
  var testQueue = new Queue();
  testQueue.add('Old Last🏼')
  testQueue.add('🏼New Last')
  t.is(JSON.stringify(testQueue), '{"first":{"data":"Old Last🏼","next":{"data":"🏼New Last","next":null}},"last":{"data":"🏼New Last","next":null}}')
});

test('Queue.remove()', t => {
  var testQueue = new Queue();
  testQueue.add('Just added me 👍🏼')
  testQueue.remove()
  t.is(JSON.stringify(testQueue), '{"first":null,"last":null}')
});

test('Queue.peek()', t => {
  var testQueue = new Queue();
  testQueue.add('Just added me 👍🏼')
  t.is(testQueue.peek(), "Just added me 👍🏼")
});

test('Queue.isEmpty()', t => {
  var testQueue = new Queue();
  testQueue.add('Just added me 👍🏼')
  t.is(testQueue.isEmpty(), false)
});
