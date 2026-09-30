# Stack Notes

## LIFO

A stack follows:

Last In, First Out

The last item added is the first item removed.

Push A, then B, then C:

Top
 ↓
[C]
[B]
[A]

C is removed first.

---

## Top

The top is the most recently added item.

In this implementation, the linked list's head represents the top.

head
 ↓
[C] → [B] → [A] → null

Both `push()` and `pop()` operate at the head.

---

## Push

`push(value)` adds a new item to the top of the stack.

Before:

Top
 ↓
[B]
[A]

Call:

push(C)

After:

Top
 ↓
[C]
[B]
[A]

After adding the item:

size = size + 1

---

## Pop

`pop()` removes and returns the item at the top.

Before:

Top
 ↓
[C]
[B]
[A]

Call:

pop()

After:

Top
 ↓
[B]
[A]

Returned value:

C

After removing the item:

size = size - 1

---

## Peek

`peek()` returns the item at the top without removing it.

Before:

Top
 ↓
[C]
[B]
[A]

Call:

peek()

Returned value:

C

The stack does not change.

---

## Empty Stack

If the stack is empty:

stack.head = null
size = 0

Therefore:

isEmpty() = true

Calling `pop()` on an empty stack throws:

Stack is empty

Calling `peek()` on an empty stack returns:

null

---

## Full Stack

The stack is full when:

size = maxSize

Therefore:

hasRoom() = false

Calling `push()` on a full stack throws:

Stack is full

---

## Size

The stack tracks the number of items using:

this.size

Push increases the size:

size++

Pop decreases the size:

size--

The size must always match the number of nodes in the linked list.

---

## Maximum Size

`maxSize` controls how many items the stack can hold.

constructor(maxSize = Infinity)

If no maximum size is provided, the stack defaults to:

Infinity

This means the stack does not have a fixed capacity.

---

## Important Stack Rule

Items are added and removed from the same end:

the top

push    → top
pop     ← top

Using the same end for both operations preserves LIFO order.

---

## Important Complexity Rule

In this implementation:

push = O(1)
pop = O(1)
peek = O(1)

The linked list's head represents the top, so none of these methods need to traverse the list.