# Linked List Complexity

## addToHead(data)

Time Complexity: O(1)

Why:
The method creates one new node and updates the head pointer.
It does not need to traverse the list, so the number of operations does not grow with the size of the list.

Space Complexity: O(1)

Why:
The method creates one new node and uses a constant number of reference variables.
The amount of additional memory used does not grow based on the size of the list.

---

## addToTail(data)

Time Complexity: O(n)

Why:
The list does not store a reference to the tail.
In the worst case, the method must start at the head and traverse every node to find the last node.

Space Complexity: O(1)

Why:
The method uses only a constant number of reference variables and creates one new node.
The amount of additional memory used does not grow based on the size of the list.

---

## removeHead()

Time Complexity: O(1)

Why:
The method already has direct access to the head.
It only saves the current head, moves the head pointer to the next node, and returns the removed node's data.
It does not need to traverse the list.

Space Complexity: O(1)

Why:
The method only uses one additional reference variable, removedHead.
The amount of additional memory used does not grow based on the size of the list.

---

## printList()

Time Complexity: O(n)

Why:
The method starts at the head and visits every node in the list once.
As the number of nodes increases, the number of operations also increases.

Space Complexity: O(n)

Why:
The output string grows as each node's data is added to it.
As the number of nodes increases, the amount of memory needed for the output also increases.