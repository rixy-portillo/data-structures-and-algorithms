import assert from 'node:assert/strict';
import Stack from './Stack.js';

function runTests() {
    console.log('Running stack tests...\n');

    // Test creating an empty stack
    const emptyStack = new Stack();

    assert.equal(emptyStack.size, 0);
    assert.equal(emptyStack.maxSize, Infinity);
    assert.equal(emptyStack.stack.head, null);
    assert.equal(emptyStack.isEmpty(), true);
    assert.equal(emptyStack.hasRoom(), true);
    assert.equal(emptyStack.peek(), null);

    // Test push() on an empty stack
    const stack = new Stack(3);

    stack.push('A');

    assert.equal(stack.size, 1);
    assert.equal(stack.isEmpty(), false);
    assert.equal(stack.hasRoom(), true);
    assert.equal(stack.stack.head.data, 'A');
    assert.equal(stack.peek(), 'A');

    // Test pushing multiple items
    stack.push('B');
    stack.push('C');

    assert.equal(stack.size, 3);
    assert.equal(stack.hasRoom(), false);

    assert.equal(stack.stack.head.data, 'C');
    assert.equal(
        stack.stack.head.getNextNode().data,
        'B'
    );
    assert.equal(
        stack.stack.head
            .getNextNode()
            .getNextNode()
            .data,
        'A'
    );

    // Test that peek() does not remove the top item
    assert.equal(stack.peek(), 'C');
    assert.equal(stack.size, 3);
    assert.equal(stack.stack.head.data, 'C');

    // Test that the stack follows LIFO order
    assert.equal(stack.pop(), 'C');
    assert.equal(stack.peek(), 'B');
    assert.equal(stack.size, 2);

    assert.equal(stack.pop(), 'B');
    assert.equal(stack.peek(), 'A');
    assert.equal(stack.size, 1);

    assert.equal(stack.pop(), 'A');
    assert.equal(stack.peek(), null);
    assert.equal(stack.size, 0);
    assert.equal(stack.isEmpty(), true);
    assert.equal(stack.stack.head, null);

    // Test pushing after the stack becomes empty
    stack.push('D');

    assert.equal(stack.size, 1);
    assert.equal(stack.peek(), 'D');
    assert.equal(stack.stack.head.data, 'D');

    // Test maximum capacity
    const limitedStack = new Stack(2);

    limitedStack.push('first');
    limitedStack.push('second');

    assert.equal(limitedStack.size, 2);
    assert.equal(limitedStack.hasRoom(), false);
    assert.equal(limitedStack.peek(), 'second');

    assert.throws(
        () => limitedStack.push('third'),
        {
            message: 'Stack is full'
        }
    );

    // Make sure the failed push did not change the stack
    assert.equal(limitedStack.size, 2);
    assert.equal(limitedStack.peek(), 'second');

    // Test pop() on an empty stack
    const anotherEmptyStack = new Stack();

    assert.throws(
        () => anotherEmptyStack.pop(),
        {
            message: 'Stack is empty'
        }
    );

    // Make sure the failed pop did not change the stack
    assert.equal(anotherEmptyStack.size, 0);
    assert.equal(anotherEmptyStack.isEmpty(), true);

    // Visually test the linked list
    console.log('\nExpected: <head> D <tail>');
    console.log('Actual:');
    stack.stack.printList();

    console.log('\nAll stack tests passed!');
}

runTests();