import assert from 'node:assert/strict';
import Queue from './Queue.js';

function runTests() {
    console.log('Running queue tests...\n');

    // Test creating an empty queue
    const emptyQueue = new Queue();

    assert.equal(emptyQueue.size, 0);
    assert.equal(emptyQueue.maxSize, Infinity);
    assert.equal(emptyQueue.isEmpty(), true);
    assert.equal(emptyQueue.hasRoom(), true);

    // Test enqueueing into an empty queue
    const queue = new Queue(3);

    queue.enqueue('A');

    assert.equal(queue.size, 1);
    assert.equal(queue.isEmpty(), false);
    assert.equal(queue.hasRoom(), true);
    assert.equal(queue.queue.head.data, 'A');

    // Test enqueueing multiple items
    queue.enqueue('B');
    queue.enqueue('C');

    assert.equal(queue.size, 3);
    assert.equal(queue.hasRoom(), false);
    assert.equal(queue.queue.head.data, 'A');
    assert.equal(queue.queue.head.getNextNode().data, 'B');
    assert.equal(
        queue.queue.head.getNextNode().getNextNode().data,
        'C'
    );

    // Test that the queue follows FIFO order
    assert.equal(queue.dequeue(), 'A');
    assert.equal(queue.dequeue(), 'B');
    assert.equal(queue.dequeue(), 'C');

    assert.equal(queue.size, 0);
    assert.equal(queue.isEmpty(), true);
    assert.equal(queue.queue.head, null);

    // Test enqueueing after the queue becomes empty
    queue.enqueue('D');

    assert.equal(queue.size, 1);
    assert.equal(queue.queue.head.data, 'D');
    assert.equal(queue.dequeue(), 'D');
    assert.equal(queue.isEmpty(), true);

    // Test maximum capacity
    const limitedQueue = new Queue(2);

    limitedQueue.enqueue('first');
    limitedQueue.enqueue('second');

    assert.equal(limitedQueue.size, 2);
    assert.equal(limitedQueue.hasRoom(), false);

    assert.throws(
        () => limitedQueue.enqueue('third'),
        {
            message: 'Queue is full!'
        }
    );

    // Make sure failed enqueue did not change the size
    assert.equal(limitedQueue.size, 2);

    // Test dequeueing from an empty queue
    const anotherEmptyQueue = new Queue();

    assert.throws(
        () => anotherEmptyQueue.dequeue(),
        {
            message: 'Queue is empty!'
        }
    );

    // Make sure failed dequeue did not change the size
    assert.equal(anotherEmptyQueue.size, 0);

    console.log('All queue tests passed!');
}

runTests();