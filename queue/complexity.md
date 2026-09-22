# Queue Complexity

## isEmpty()

Time Complexity: O(1)

Why:  
The method only compares the queue's size to zero.  
It does not traverse the linked list.

Space Complexity: O(1)

Why:  
The method does not create any new nodes or data structures.  
It only returns a Boolean value.

---

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

## enqueue(data)

Time Complexity: O(n)

Why:  
The method calls the linked list's `addToTail()` method.

The linked list does not store a tail reference, so `addToTail()` must begin at the head and traverse the list to find the final node.

In the worst case, it visits every node before adding the new node.

Space Complexity: O(1)

Why:  
Only one new node and a constant number of reference variables are created.

The additional memory does not grow based on the number of nodes already in the queue.

---

## dequeue()

Time Complexity: O(1)

Why:  
The method calls the linked list's `removeHead()` method.

The linked list already has direct access to its head, so removing the first node does not require traversing the list.

Space Complexity: O(1)

Why:  
Only a constant number of variables are used to store the removed data and update the queue's size.

---

## Summary

| Method | Time Complexity | Space Complexity |
| --- | ---: | ---: |
| `isEmpty` | **O(1)** | **O(1)** |
| `hasRoom` | **O(1)** | **O(1)** |
| `enqueue` | **O(n)** | **O(1)** |
| `dequeue` | **O(1)** | **O(1)** |

## Current Queue vs. Optimized Linked Queue

| Method | Current Queue | Queue With Tail Reference |
| --- | ---: | ---: |
| `isEmpty` | **O(1)** | **O(1)** |
| `hasRoom` | **O(1)** | **O(1)** |
| `enqueue` | **O(n)** | **O(1)** |
| `dequeue` | **O(1)** | **O(1)** |

The current queue's `enqueue()` method is O(n) because the singly linked list must traverse from the head to find its tail.

If the linked list stored a tail reference, it could add a new node directly to the end, making `enqueue()` O(1).