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

## Time Complexity

| Method | Time Complexity | Why |
| addToHead | O(1) | We only update the head |
| addToTail | O(n) | We may need to traverse the whole list |
| removeHead | O(1) | We only move the head pointer |
| printList | O(n) | We visit every node |

## Space Complexity

| Method | Space Complexity | Why |
| addToHead | O(1) | Creates one node |
| addToTail | O(1) | Creates one node |
| removeHead | O(1) | No extra data structure |
| printList | O(n) | Builds an output string and it grows as the list grows |

## Advantages
Dynamic Sizing: No need to predict how much memory to allocate ahead of time.
Efficient Modifications: Inserting or deleting items at the head takes O(1) constant time.

## Disadvantages
No Random Access: Finding a specific index requires starting from the head and walking through every item sequentially.
Poor Cache Locality: Because nodes sit randomly in memory, modern CPUs cannot easily pre-fetch them, making access patterns slower than arrays.