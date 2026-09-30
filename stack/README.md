# Stack

A stack is a linear data structure that follows LIFO:

First In, Last Out

The last item added to the stack is the first item removed.

Items are added and removed from the top of the stack.

## Structure

Top
 ↓
[C]
[B]
[A]

C is removed first because it was added last.

## Key Components

- Stack: The linked list that stores the items.
- Top: The most recently added item and the next item to be removed.
- Size: The current number of items in the stack.
- Maximum Size: The maximum number of items the stack can hold.

In this implementation, the linked list's head represents the top of the stack.

## Methods

- `hasRoom()`
- `isEmpty()`
- `push(value)`
- `pop()`
- `peek()`

## Advantages

- Efficient Modifications: Adding and removing items from the top takes O(1) constant time.
- Simple Ordering: Items are automatically processed in reverse order.
- Optional Capacity: A maximum size can limit the number of stored items.

## Disadvantages

- Restricted Access: Only the top item can be directly accessed or removed.
- No Random Access: Reaching another item requires moving through the stack.
- Reverse Processing: Items are removed in the opposite order from which they were added.

## When Is a Stack Useful?

A stack is useful when the most recently added item should be processed first.

Examples include:

- Undo and redo functionality
- Browser history
- Function calls
- Expression evaluation
- Checking matching brackets
- Reversing data
- Depth-first search

## Key Difference From a Queue

A stack follows LIFO: the last item added is the first item removed.

A queue follows FIFO: the first item added is the first item removed.