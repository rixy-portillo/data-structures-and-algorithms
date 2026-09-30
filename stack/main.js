import Stack from './Stack.js';

const books = new Stack(3);

console.log('Is the stack empty?', books.isEmpty());
console.log('Does the stack have room?', books.hasRoom());

books.push('Book A');
books.push('Book B');
books.push('Book C');

console.log('\nStack after pushing three books:');
books.stack.printList();

console.log('Top item:', books.peek());
console.log('Current size:', books.size);
console.log('Does the stack have room?', books.hasRoom());

console.log('\nRemoved:', books.pop());

console.log('Stack after removing one book:');
books.stack.printList();

console.log('New top item:', books.peek());
console.log('Current size:', books.size);

console.log('\nRemoved:', books.pop());
console.log('Removed:', books.pop());

console.log('Is the stack empty?', books.isEmpty());
console.log('Top item:', books.peek());