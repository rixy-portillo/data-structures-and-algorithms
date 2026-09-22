import assert from 'node:assert/strict';
import LinkedList from './LinkedList.js';

function runTests() {
    console.log('Running singly linked list tests...\n');

    // Test creating an empty list
    const emptyList = new LinkedList();

    assert.equal(emptyList.head, null);
    assert.equal(emptyList.removeHead(), undefined);

    // Test addToHead()
    const headList = new LinkedList();

    headList.addToHead('A');

    assert.equal(headList.head.data, 'A');
    assert.equal(headList.head.getNextNode(), null);

    headList.addToHead('B');

    assert.equal(headList.head.data, 'B');
    assert.equal(headList.head.getNextNode().data, 'A');

    headList.addToHead('C');

    assert.equal(headList.head.data, 'C');
    assert.equal(headList.head.getNextNode().data, 'B');
    assert.equal(
        headList.head.getNextNode().getNextNode().data,
        'A'
    );

    // Test addToTail()
    const tailList = new LinkedList();

    tailList.addToTail('A');

    assert.equal(tailList.head.data, 'A');
    assert.equal(tailList.head.getNextNode(), null);

    tailList.addToTail('B');
    tailList.addToTail('C');

    assert.equal(tailList.head.data, 'A');
    assert.equal(tailList.head.getNextNode().data, 'B');
    assert.equal(
        tailList.head.getNextNode().getNextNode().data,
        'C'
    );

    assert.equal(
        tailList.head
            .getNextNode()
            .getNextNode()
            .getNextNode(),
        null
    );

    // Test removeHead()
    assert.equal(tailList.removeHead(), 'A');
    assert.equal(tailList.head.data, 'B');

    assert.equal(tailList.removeHead(), 'B');
    assert.equal(tailList.head.data, 'C');

    assert.equal(tailList.removeHead(), 'C');
    assert.equal(tailList.head, null);

    // Test removeHead() on an empty list
    assert.equal(tailList.removeHead(), undefined);

    // Test using addToHead() and addToTail() together
    const mixedList = new LinkedList();

    mixedList.addToHead('B');
    mixedList.addToHead('A');
    mixedList.addToTail('C');

    assert.equal(mixedList.head.data, 'A');
    assert.equal(mixedList.head.getNextNode().data, 'B');
    assert.equal(
        mixedList.head.getNextNode().getNextNode().data,
        'C'
    );

    // Visually test printList()
    console.log('\nExpected: <head> A B C <tail>');
    console.log('Actual:');
    mixedList.printList();

    console.log('\nAll singly linked list tests passed!');
}

runTests();