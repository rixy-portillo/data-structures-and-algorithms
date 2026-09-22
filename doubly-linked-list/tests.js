import assert from 'node:assert/strict';
import DoublyLinkedList from './DoublyLinkedList.js';

function runTests() {
    console.log('Running doubly linked list tests...\n');

    // Test creating an empty list
    const emptyList = new DoublyLinkedList();

    assert.equal(emptyList.head, null);
    assert.equal(emptyList.tail, null);
    assert.equal(emptyList.removeHead(), undefined);
    assert.equal(emptyList.removeTail(), undefined);

    // Test addToHead()
    const headList = new DoublyLinkedList();

    headList.addToHead('A');

    assert.equal(headList.head.data, 'A');
    assert.equal(headList.tail.data, 'A');
    assert.equal(headList.head, headList.tail);

    headList.addToHead('B');

    assert.equal(headList.head.data, 'B');
    assert.equal(headList.tail.data, 'A');
    assert.equal(headList.head.getNextNode().data, 'A');
    assert.equal(
        headList.tail.getPreviousNode().data,
        'B'
    );
    assert.equal(headList.head.getPreviousNode(), null);
    assert.equal(headList.tail.getNextNode(), null);

    // Test addToTail()
    const tailList = new DoublyLinkedList();

    tailList.addToTail('A');

    assert.equal(tailList.head.data, 'A');
    assert.equal(tailList.tail.data, 'A');
    assert.equal(tailList.head, tailList.tail);

    tailList.addToTail('B');
    tailList.addToTail('C');

    assert.equal(tailList.head.data, 'A');
    assert.equal(tailList.tail.data, 'C');

    assert.equal(
        tailList.head.getNextNode().data,
        'B'
    );

    assert.equal(
        tailList.tail.getPreviousNode().data,
        'B'
    );

    assert.equal(
        tailList.head
            .getNextNode()
            .getPreviousNode()
            .data,
        'A'
    );

    assert.equal(
        tailList.tail
            .getPreviousNode()
            .getNextNode()
            .data,
        'C'
    );

    // Test removeHead()
    assert.equal(tailList.removeHead(), 'A');

    assert.equal(tailList.head.data, 'B');
    assert.equal(tailList.head.getPreviousNode(), null);
    assert.equal(tailList.tail.data, 'C');

    // Test removeTail()
    assert.equal(tailList.removeTail(), 'C');

    assert.equal(tailList.head.data, 'B');
    assert.equal(tailList.tail.data, 'B');
    assert.equal(tailList.tail.getNextNode(), null);

    // Test removing the only node with removeHead()
    assert.equal(tailList.removeHead(), 'B');
    assert.equal(tailList.head, null);
    assert.equal(tailList.tail, null);

    // Test removing the only node with removeTail()
    const oneNodeList = new DoublyLinkedList();

    oneNodeList.addToTail('A');

    assert.equal(oneNodeList.removeTail(), 'A');
    assert.equal(oneNodeList.head, null);
    assert.equal(oneNodeList.tail, null);

    // Test removeByData() on a middle node
    const removalList = new DoublyLinkedList();

    removalList.addToTail('A');
    removalList.addToTail('B');
    removalList.addToTail('C');

    const removedMiddle =
        removalList.removeByData('B');

    assert.equal(removedMiddle.data, 'B');
    assert.equal(removalList.head.data, 'A');
    assert.equal(removalList.tail.data, 'C');

    assert.equal(
        removalList.head.getNextNode(),
        removalList.tail
    );

    assert.equal(
        removalList.tail.getPreviousNode(),
        removalList.head
    );

    // Test removeByData() on the head
    const removedHead =
        removalList.removeByData('A');

    assert.equal(removedHead.data, 'A');
    assert.equal(removalList.head.data, 'C');
    assert.equal(
        removalList.head.getPreviousNode(),
        null
    );

    // Test removeByData() on the tail
    const removedTail =
        removalList.removeByData('C');

    assert.equal(removedTail.data, 'C');
    assert.equal(removalList.head, null);
    assert.equal(removalList.tail, null);

    // Test removeByData() when data is not found
    assert.equal(
        removalList.removeByData('missing'),
        null
    );

    // Visually test printList()
    const printList = new DoublyLinkedList();

    printList.addToTail('A');
    printList.addToTail('B');
    printList.addToTail('C');

    console.log('\nExpected: <head> A B C <tail>');
    console.log('Actual:');
    printList.printList();

    console.log('\nAll doubly linked list tests passed!');
}

runTests();