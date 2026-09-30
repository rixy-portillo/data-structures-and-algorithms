# Stack Complexity

## hasRoom()

Time Complexity: O(1)

Why:
The method only compares the current size to the maximum size.
It does not traverse the linked list.

Space Complexity: O(1)

Why:
The method does not create any new nodes or data structures.
It only returns a Boolean value.

---

## isEmpty()

Time Complexity: O(1)

Why:
The method only compares the stack's size to zero.
It does not traverse the linked list.

Space Complexity: O(1)

Why:
The method does not create any new nodes or data structures.
It only returns a Boolean value.

---

## push(value)

Time Complexity: O(1)

Why:
The method calls the linked list's `addToHead()` method.

The linked list already has direct access to its head, so adding a new node does not require traversing the list.

Space Complexity: O(1)

Why:
Only one new node and a constant number of reference variables are created.

The additional memory does not grow based on the number of nodes already in the stack.

---

## pop()

Time Complexity: O(1)

Why:
The method calls the linked list's `removeHead()` method.

The linked list already has direct access to its head, so removing the first node does not require traversing the list.

Space Complexity: O(1)

Why:
Only a constant number of variables are used to store the removed value and update the stack's size.

---

## peek()

Time Complexity: O(1)

Why:
The method directly accesses the data stored in the linked list's head.

It does not remove an item or traverse the linked list.

Space Complexity: O(1)

Why:
The method does not create any new nodes or data structures.
It only returns the value stored at the head.

---

## Summary

| Method | Time Complexity | Space Complexity |
| --- | ---: | ---: |
| `hasRoom` | O(1) | O(1) |
| `isEmpty` | O(1) | O(1) |
| `push` | O(1) | O(1) |
| `pop` | O(1) | O(1) |
| `peek` | O(1) | O(1) |