import Queue from './Queue.js';

const coffeeOrders = new Queue(3);

console.log('Is the queue empty?', coffeeOrders.isEmpty());
console.log('Does the queue have room?', coffeeOrders.hasRoom());

coffeeOrders.enqueue('Latte');
coffeeOrders.enqueue('Tea');
coffeeOrders.enqueue('Mocha');

console.log('\nQueue after adding three orders:');
coffeeOrders.queue.printList();

console.log('Current size:', coffeeOrders.size);
console.log('Does the queue have room?', coffeeOrders.hasRoom());

console.log('\nRemoved:', coffeeOrders.dequeue());

console.log('Queue after removing one order:');
coffeeOrders.queue.printList();

console.log('Current size:', coffeeOrders.size);
console.log('Does the queue have room?', coffeeOrders.hasRoom());

console.log('\nRemoved:', coffeeOrders.dequeue());
console.log('Removed:', coffeeOrders.dequeue());

console.log('Is the queue empty?', coffeeOrders.isEmpty());