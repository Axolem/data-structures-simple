import { LinkedList } from './lib/index.js';

const list = new LinkedList();

list.addLast(1);
list.addLast(2);
list.addLast(3);

console.log(list.indexOf(4));