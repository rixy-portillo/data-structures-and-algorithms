# Doubly Linked List

A doubly linked list is a linear data structure made up of nodes.

Each node contains:

- data
- a reference to the next node
- a reference to the previous node

The list keeps track of both the head and the tail.

## Structure

null ← [A] ⇄ [B] ⇄ [C] → null
        ↑             ↑
       head          tail

## Methods

- `addToHead(data)`
- `addToTail(data)`
- `removeHead()`
- `removeTail()`
- `removeByData(data)`
- `printList()`

## Advantages

- Bidirectional Traversal: Nodes can be traversed both forward and backward using `next` and `previous` pointers.
- Efficient Head and Tail Modifications: When both head and tail pointers are maintained, inserting or removing items at either end takes O(1) constant time.

## Disadvantages

- Extra Memory Usage: Each node stores both a `next` and `previous` pointer, requiring more memory than a singly linked list.
- More Complex Pointer Management: Insertions and deletions require updating pointers in both directions, which makes the implementation more complex and creates more opportunities for pointer-related bugs.

## When Is a Doubly Linked List Useful?

A doubly linked list is useful when an application needs to move both forward and backward through data.

Examples include:

- Browser back and forward navigation
- Undo and redo functionality
- Music or image playlists with previous and next controls
- Navigation through pages or items
- Implementing certain caches, such as an LRU cache

## Key Difference From a Singly Linked List

A singly linked list only allows movement forward through `next`.

A doubly linked list allows movement in both directions because every node contains both `next` and `previous`.

Keeping a `tail` reference also allows some operations, such as adding or removing from the tail, to happen in constant time.