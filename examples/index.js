import { Stack } from './../dist/dastructs.js';

var shit = new Stack();
console.log('1: ', shit)
shit.push("Yo!");
console.log('2: ', shit)
console.log('3: ', shit.peek());
shit.push(5);
console.log('4: ', shit.peek());
shit.pop()
console.log('5: ', shit.peek());
console.log('6: ', shit.isEmpty());
shit.pop()
console.log('7: ', shit.isEmpty());
console.log('8: ', shit.peek());
