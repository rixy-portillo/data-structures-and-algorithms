# Doubly Linked List Complexity

## addToHead(data)

Time Complexity: O(1)

Why:
The method creates one node and updates a fixed number of pointers.
It does not traverse the list.

Space Complexity: O(1)

Why:
Only one new node and a constant number of reference variables are created.
The additional memory does not grow based on the size of the list.

---

## addToTail(data)

Time Complexity: O(1)

Why:
The list already stores a reference to the tail.
There is no need to traverse the list to find the last node.

Space Complexity: O(1)

Why:
Only one new node and a constant number of reference variables are created.

---

## removeHead()

Time Complexity: O(1)

Why:
The method only updates the head pointer and a few node references.
It does not traverse the list.

Space Complexity: O(1)

Why:
Only a constant number of reference variables are used.

---

## removeTail()

Time Complexity: O(1)

Why:
The list already has direct access to the tail.
The method updates the tail and nearby pointers without traversing the list.

Space Complexity: O(1)

Why:
Only a constant number of reference variables are used.

---

## removeByData(data)

Time Complexity: O(n)

Why:
In the worst case, the method may need to traverse every node before finding the matching data or determining that it does not exist.

Space Complexity: O(1)

Why:
The method only uses a few reference variables such as currentNode, nodeToRemove, nextNode, and previousNode.

---

## printList()

Time Complexity: O(n)

Why:
The method visits every node once.

Space Complexity: O(n)

Why:
The output string grows as more node data is added to it.



| Method         | Singly Linked List | Doubly Linked List |
| -------------- | -----------------: | -----------------: |
| `addToHead`    |           **O(1)** |           **O(1)** |
| `addToTail`    |           **O(n)** |           **O(1)** |
| `removeHead`   |           **O(1)** |           **O(1)** |
| `removeTail`   |                  — |           **O(1)** |
| `removeByData` |                  — |           **O(n)** |
| `printList`    |           **O(n)** |           **O(n)** |
