import test from 'ava';
import { Queue } from './../src/Queue.js';

test('Queue', t => {
  var testQueue = new Queue();
  t.is(JSON.stringify(testQueue), '{"length":0,"first":null,"last":null}')
});

test('Queue.enqueue()', t => {
  var testQueue = new Queue();
  testQueue.enqueue('Just added me 👍🏼');
  t.is(JSON.stringify(testQueue), '{"length":1,"first":{"data":"Just added me 👍🏼","next":null},"last":{"data":"Just added me 👍🏼","next":null}}');
});

test('Queue.enqueue() with existing elements', t => {
  var testQueue = new Queue();
  testQueue.enqueue('Old Last🏼');
  testQueue.enqueue('🏼New Last');
  t.is(JSON.stringify(testQueue), '{"length":2,"first":{"data":"Old Last🏼","next":{"data":"🏼New Last","next":null}},"last":{"data":"Old Last🏼","next":{"data":"🏼New Last","next":null}}}');
});

test('Queue.dequeue()', t => {
  var testQueue = new Queue();
  testQueue.enqueue('Just added me 👍🏼');
  testQueue.dequeue();
  t.is(JSON.stringify(testQueue), '{"length":0,"first":null,"last":null}');
});

test('Queue.dequeue()', t => {
  var testQueue = new Queue();
  t.is(testQueue.dequeue(), null);
});

test('Queue.peek()', t => {
  var testQueue = new Queue();
  testQueue.enqueue('Just added me 👍🏼');
  t.is(testQueue.peek(), "Just added me 👍🏼");
});

test('Queue.peek() with empty Queue', t => {
  var testQueue = new Queue();
  t.is(testQueue.peek(), null);
});

test('Queue.isEmpty()', t => {
  var testQueue = new Queue();
  testQueue.enqueue('Just added me 👍🏼');
  t.is(testQueue.isEmpty(), false);
});

test('Queue.isEmpty() with empty Queue', t => {
  var testQueue = new Queue();
  t.is(testQueue.isEmpty(), true);
});
