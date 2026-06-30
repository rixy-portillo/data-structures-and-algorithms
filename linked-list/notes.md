# Linked List Notes

## Traversal Pattern

To visit every node, use: while currentNode is not null

This processes every node, including the last one.

A visual way to remember it
A → B → C → null

current !== null
A ✓
B ✓
C ✓
null ✗

To stop at the last node, use: while currentNode.next is not null

This stops while currentNode is still pointing to the last node.

A visual way to remember it
A → B → C → null

current.next !== null
A.next = B ✓
B.next = C ✓
C.next = null ✗

## Important Idea

A linked list does not have indexes like an array.  
To reach a node, we usually have to start at the head and move one node at a time.