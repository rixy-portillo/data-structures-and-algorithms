# Linked List

A linked list is a linear data structure made of nodes, where elements are not stored in contiguous memory locations. Instead, each element, called a node, contains its own data and a pointer (or reference) that links to the next node in the sequence

Key Components
Node: The basic building block containing data and a link.
Head: A pointer marking the first node of the list.
Tail: The final node, which points to NULL to signify the end.

## Methods

- `addToHead(data)`
- `addToTail(data)`
- `removeHead()`
- `printList()`

## Advantages

- Dynamic Sizing: No need to predict how much memory to allocate ahead of time.
- Efficient Modifications: Inserting or deleting items at the head takes O(1) constant time.

## Disadvantages

- No Random Access: Finding a specific index requires starting from the head and walking through every item sequentially.
- Poor Cache Locality: Because nodes sit randomly in memory, modern CPUs cannot easily pre-fetch them, making access patterns slower than arrays.

## When Is a Singly Linked List Useful?

A singly linked list is useful when data needs to be processed primarily in one direction and frequent insertion or removal at the beginning of the structure is needed.

Examples include:

- Implementing stacks
- Implementing queues when both head and tail references are maintained
- Maintaining a sequence of tasks or items that are processed in order
- Implementing adjacency lists for graphs
- Situations where frequent insertion or deletion is needed and random access is not important
- Situations where memory usage matters and backward traversal is unnecessary