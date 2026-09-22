# Queue

A queue is a linear data structure that follows FIFO:

**First In, First Out**

The first item added to the queue is the first item removed.

Items are added at the back of the queue and removed from the front.

## Structure

```text
Front                         Back
  ↓                             ↓
[A] → [B] → [C] → [D] → null
  ↑                             ↑
dequeue                      enqueue
```

## Key Components

- Queue: The linked list that stores the items.
- Front: The first item in the queue and the next item to be removed.
- Back: The final item in the queue, where new items are added.
- Size: The current number of items in the queue.
- Maximum Size: The maximum number of items the queue can hold.

## Methods

- `isEmpty()`
- `hasRoom()`
- `enqueue(data)`
- `dequeue()`

## Advantages

- Ordered Processing: Items are processed in the same order in which they arrive.
- Efficient Removal: Removing an item from the front takes O(1) constant time.
- Optional Capacity: A maximum size can be used to limit the number of items.

## Disadvantages

- No Random Access: Items cannot be accessed directly by their position.
- Restricted Access: Items are added at the back and removed from the front.
- Slower Insertion in This Implementation: Adding an item takes O(n) time because the linked list must traverse from the head to find the tail.

## When Is a Queue Useful?

A queue is useful when data needs to be processed in the order in which it arrives.

Examples include:

- Customer-service lines
- Print jobs
- Task scheduling
- Website or API requests
- Message processing
- Breadth-first search
- Waiting lists

## Key Difference From a Stack

A queue follows FIFO: the first item added is the first item removed.

A stack follows LIFO: the last item added is the first item removed.