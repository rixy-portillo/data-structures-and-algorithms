import DoublyLinkedList from './DoublyLinkedList.js';

const list = new DoublyLinkedList();

console.log('Empty list:');
list.printList();

console.log('\nAdd A to head:');
list.addToHead('A');
list.printList();

console.log('\nAdd B to head:');
list.addToHead('B');
list.printList();

console.log('\nAdd C to tail:');
list.addToTail('C');
list.printList();

console.log('\nRemove head:');
console.log('Removed:', list.removeHead());
list.printList();

console.log('\nRemove tail:');
console.log('Removed:', list.removeTail());
list.printList();

console.log('\nAdd more nodes:');
list.addToHead('A');
list.addToTail('C');
list.addToTail('D');
list.printList();

console.log('\nRemove C:');
console.log('Removed:', list.removeByData('C'));
list.printList();

console.log('\nTry removing something that does not exist:');
console.log('Removed:', list.removeByData('X'));
list.printList();

// Empty list
const emptyList = new DoublyLinkedList();

console.log(emptyList.removeHead());
console.log(emptyList.removeTail());


// One-node list
const oneNodeList = new DoublyLinkedList();

oneNodeList.addToHead('A');

console.log(oneNodeList.head);
console.log(oneNodeList.tail);

oneNodeList.removeHead();

console.log(oneNodeList.head);
console.log(oneNodeList.tail);