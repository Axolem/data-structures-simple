import { Stack } from './lib/index.js';

const stack = new Stack(20);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);


console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.pop());


stack.push(10);
stack.push(11);
stack.push(12);
console.log("Pop: ", stack.peek());
console.log("Pop: ", stack.pop());
console.log("Pop: ", stack.toArray());

//console.log(stack.size());