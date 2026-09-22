# Queue Notes

## FIFO

A queue follows: First In, First Out

The first item added is the first item removed.

Front                         Back
  ↓                             ↓
[A] → [B] → [C] → [D] → null


`A` entered first, so `A` will be removed first.

---

## Front

The front is the first item in the queue.

In this implementation, the linked list's `head` represents the front.

head
 ↓
[A] → [B] → [C] → null

Items are removed from the front using:

this.queue.removeHead();

---

## Back

The back is the final item in the queue.

New items are added to the back using:

this.queue.addToTail(data);

Front              Back
  ↓                   ↓
[A] → [B] → [C] → null

The linked list does not store a tail pointer, so it must start at the head and traverse the list to find the back.

---

## Important Queue Rule

Items are always:

Added at the back
Removed from the front

dequeue ← [A] → [B] → [C] ← enqueue

Adding and removing from opposite ends preserves FIFO order.

---

## Important Complexity Rule

In this implementation:

enqueue = O(n)
dequeue = O(1)

`enqueue()` is O(n) because `addToTail()` must traverse the linked list to find the final node.

`dequeue()` is O(1) because `removeHead()` has direct access to the head.