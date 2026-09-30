# Stack Interview Questions

## Concept Questions

1. What is a stack?
2. What does LIFO mean?
3. Where are items added to a stack?
4. Where are items removed from a stack?
5. What represents the top in this implementation?
6. How is a stack different from a queue?
7. What are some real-world uses for stacks?
8. Why does this stack use a linked list?

## Method Questions

1. What does `hasRoom()` check?
2. What does `isEmpty()` check?
3. How does `push()` add an item?
4. How does `pop()` remove an item?
5. What does `peek()` return?
6. Does `peek()` modify the stack?
7. What happens when `push()` is called on a full stack?
8. What happens when `pop()` is called on an empty stack?
9. What happens when `peek()` is called on an empty stack?
10. Why must the size be updated during `push()` and `pop()`?

## Complexity Questions

1. What is the time complexity of `push()`?
2. What is the time complexity of `pop()`?
3. What is the time complexity of `peek()`?
4. Why do these methods not need to traverse the linked list?
5. What would happen to the complexity if the top were stored at the tail of this singly linked list?
6. What is the difference between total space and auxiliary space?

## Practice Problems

1. Implement the stack without looking at your notes.
2. Reverse a string using a stack.
3. Check whether brackets are balanced.
4. Implement undo and redo functionality.
5. Evaluate a postfix expression.
6. Implement a stack using an array.
7. Implement a queue using two stacks.
8. Perform depth-first search using a stack.

## Short Interview Answer

A stack is a LIFO linear data structure, meaning the last item added is the first item removed. My stack uses a linked list whose head represents the top. Push adds to the head, pop removes from the head, and peek returns the head's data without removing it. All three operations take O(1) time.

## Blank-Page Test

Without looking at your notes, write:

- The meaning of LIFO
- A stack diagram
- The properties in the `Stack` constructor
- The steps for `hasRoom()`
- The steps for `isEmpty()`
- The steps for `push()`
- The steps for `pop()`
- The steps for `peek()`
- The important edge cases
- The complexity of every method
- Three real-world stack examples
- The difference between a stack and a queue