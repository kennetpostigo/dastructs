import test from 'ava';
import { Stack } from './../dist/dastructs.js';

test('Stack', t => {
  var testStack = new Stack();
  t.is(JSON.stringify(testStack), '{"top":null}')
});

test('Stack.push()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(JSON.stringify(testStack), '{"top":{"data":"Yo!","next":null}}');
});

test('Stack.pop()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  testStack.pop();
  t.is(JSON.stringify(testStack), '{"top":null}');
});

test('Stack.peek()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(testStack.peek(), 'Yo!');
});

test('Stack.isEmpty()', t => {
  var testStack = new Stack();
  testStack.push("Yo!");
  t.is(testStack.isEmpty(), false);
});
