import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.addToHead('C');
list.addToHead('B');
list.addToHead('A');

list.printList();
// Expected: <head> A B C <tail>

list.addToTail('D');

list.printList();
// Expected: <head> A B C D <tail>

console.log(list.removeHead());
// Expected: A

list.printList();
// Expected: <head> B C D <tail>