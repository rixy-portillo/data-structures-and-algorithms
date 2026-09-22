## Concept Questions

1. What is a queue?
2. What does FIFO mean?
3. Where are new items added?
4. Where are items removed?
5. What represents the front of this queue?
6. What represents the back of this queue?
7. How is a queue different from a stack?
8. What are some real-world uses for queues?
9. Why does this queue use a linked list?
10. What happens when no maximum size is provided?

## Implementation Questions

1. What properties does the `Queue` class contain?
2. What is stored in `this.queue`?
3. Why does the queue separately track its size?
4. How does `isEmpty()` work?
5. How does `hasRoom()` work?
6. How does `enqueue()` add data?
7. How does `dequeue()` remove data?
8. What happens when you enqueue into an empty queue?
9. What happens when you enqueue into a full queue?
10. What happens when you dequeue the only item?
11. What happens when you dequeue from an empty queue?
12. Why does `dequeue()` save the returned data before decreasing the size?

## Complexity Questions

1. What is the time complexity of `isEmpty()`?
2. What is the time complexity of `hasRoom()`?
3. What is the time complexity of `enqueue()` in this implementation?
4. Why is `enqueue()` O(n) instead of O(1)?
5. What is the time complexity of `dequeue()`?
6. Why is removing the linked list's head O(1)?
7. How could you change the linked list to make `enqueue()` O(1)?
8. What is the queue's total storage complexity?
9. What is the difference between total space and auxiliary space?

## Queue vs. Stack Questions

1. What ordering rule does a queue follow?
2. What ordering rule does a stack follow?
3. What queue operation is similar to stack `push()`?
4. What queue operation is similar to stack `pop()`?
5. When would you choose a queue instead of a stack?

## Practice Problems

1. Implement the queue without looking at your notes.
2. Add a `peek()` method that returns the front data without removing it.
3. Add a `getSize()` method.
4. Add a `printQueue()` method to the `Queue` class.
5. Reverse a queue using a stack.
6. Implement a queue using two stacks.
7. Use a queue to perform breadth-first search.
8. Modify the linked list to track a tail pointer.
9. Create a circular queue with a fixed capacity.

## Short Interview Answer

> A queue is a FIFO linear data structure, meaning the first item added is the first item removed. My queue uses a linked list: enqueue adds data to the linked list's tail, while dequeue removes data from its head. The queue also tracks its current size and an optional maximum size. In this implementation, dequeue is O(1), but enqueue is O(n) because the linked list must traverse from the head to find its tail.

## Blank-Page Test

Without looking at your notes, write:

- The meaning of FIFO
- A queue diagram
- The properties in the `Queue` constructor
- The steps for `isEmpty()`
- The steps for `hasRoom()`
- The steps for `enqueue()`
- The steps for `dequeue()`
- The important edge cases
- The time complexity of every method
- Three real-world queue examples
- The difference between a queue and a stack