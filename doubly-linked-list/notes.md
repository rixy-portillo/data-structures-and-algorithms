# Doubly Linked List Notes

## Node Structure

Each node contains:

data
previous ← [NODE] → next

The `next` pointer moves forward through the list.

The `previous` pointer moves backward through the list.

---

## Head

The head is the first node.

Its previous pointer should always be null.

null ← [HEAD]

---

## Tail

The tail is the last node.

Its next pointer should always be null.

[TAIL] → null

---

## Empty List

If the list is empty:

head = null
tail = null

---

## One-Node List

If the list contains only one node:

       head
        ↓
null ← [A] → null
        ↑
       tail

Both head and tail point to the same node.

---

## Traversal

To visit every node:

currentNode = head

WHILE currentNode is not null
    Process currentNode
    currentNode = currentNode.next
END WHILE

This processes the tail before eventually moving to null.

---

## Important Pointer Rule

When removing a node from the middle:

Before:

[A] ⇄ [B] ⇄ [C]

Remove B.

We must update BOTH directions:

A.next = C

C.previous = A

After:

[A] ⇄ [C]