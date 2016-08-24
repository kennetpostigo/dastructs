import test from 'ava';
import { Stack } from './../src/Stack.js';

test('Stack', t => {
  var testStack = new Stack();
  t.is(JSON.stringify(testStack), '{"size":0,"top":null}');
});

test('Stack.push()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(JSON.stringify(testStack), '{"size":1,"top":{"data":"Yo!","next":null}}');
});

test('Stack.push() with existing elements', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  testStack.push("Waddup!");
  var result = '{"size":2,"top":{"data":"Waddup!","next":{"data":"Yo!","next":null}}}'
  t.is(JSON.stringify(testStack), result);
});

test('Stack.pop()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  testStack.pop();
  t.is(JSON.stringify(testStack), '{"size":0,"top":null}');
});

test('Stack.pop() with empty Stack', t => {
  var testStack = new Stack();
  testStack.pop();
  t.is(testStack.pop(), null);
});

test('Stack.peek()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(testStack.peek(), 'Yo!');
});

test('Stack.peek() empty Stack', t => {
  var testStack = new Stack();
  t.is(testStack.peek(), null);
});

test('Stack.isEmpty()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(testStack.isEmpty(), false);
});

test('Stack.isEmpty() with empty Stack', t => {
  var testStack = new Stack();
  t.is(testStack.isEmpty(), true);
});
