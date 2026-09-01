# Doubly Linked List Pseudocode

## addToHead

### Idea

1. Create a new node.
2. Save the current head.
3. If a head already exists, connect the old head back to the new node.
4. Connect the new node forward to the old head.
5. Make the new node the head.
6. If the list was empty, also make the new node the tail.

### High-Level Pseudocode

FUNCTION addToHead(data)

    Create a new node

    Save the current head

    IF a current head exists
        Set the current head's previous pointer to the new node
        Set the new node's next pointer to the current head
    END IF

    Set head to the new node

    IF the list does not have a tail
        Set tail to the new node
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION addToHead(data)

    newHead ← new Node(data)

    currentHead ← head

    IF currentHead is not null THEN
        currentHead.previous ← newHead
        newHead.next ← currentHead
    END IF

    head ← newHead

    IF tail is null THEN
        tail ← newHead
    END IF

END FUNCTION


## addToTail

### Idea

1. Create a new node.
2. Save the current tail.
3. If a tail already exists, connect the old tail forward to the new node.
4. Connect the new node back to the old tail.
5. Make the new node the tail.
6. If the list was empty, also make the new node the head.

### High-Level Pseudocode

FUNCTION addToTail(data)

    Create a new node

    Save the current tail

    IF a current tail exists
        Set the current tail's next pointer to the new node
        Set the new node's previous pointer to the current tail
    END IF

    Set tail to the new node

    IF the list does not have a head
        Set head to the new node
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION addToTail(data)

    newTail ← new Node(data)

    currentTail ← tail

    IF currentTail is not null THEN
        currentTail.next ← newTail
        newTail.previous ← currentTail
    END IF

    tail ← newTail

    IF head is null THEN
        head ← newTail
    END IF

END FUNCTION


## removeHead

### Idea

1. Save the current head.
2. If the list is empty, stop.
3. Move the head pointer to the next node.
4. If a new head exists, remove its previous connection.
5. If the removed head was also the tail, remove the tail as well.
6. Return the removed head's data.

### High-Level Pseudocode

FUNCTION removeHead()

    Save the current head

    IF the list is empty
        Return nothing
    END IF

    Move head to the next node

    IF a new head exists
        Set the new head's previous pointer to null
    END IF

    IF the removed head was also the tail
        Remove the tail
    END IF

    Return the removed head's data

END FUNCTION

### More Detailed Pseudocode

FUNCTION removeHead()

    removedHead ← head

    IF removedHead is null THEN
        RETURN
    END IF

    head ← removedHead.next

    IF head is not null THEN
        head.previous ← null
    END IF

    IF removedHead equals tail THEN
        removeTail()
    END IF

    RETURN removedHead.data

END FUNCTION


## removeTail

### Idea

1. Save the current tail.
2. If the list is empty, stop.
3. Move the tail pointer to the previous node.
4. If a new tail exists, remove its next connection.
5. If the removed tail was also the head, remove the head as well.
6. Return the removed tail's data.

### High-Level Pseudocode

FUNCTION removeTail()

    Save the current tail

    IF the list is empty
        Return nothing
    END IF

    Move tail to the previous node

    IF a new tail exists
        Set the new tail's next pointer to null
    END IF

    IF the removed tail was also the head
        Remove the head
    END IF

    Return the removed tail's data

END FUNCTION

### More Detailed Pseudocode

FUNCTION removeTail()

    removedTail ← tail

    IF removedTail is null THEN
        RETURN
    END IF

    tail ← removedTail.previous

    IF tail is not null THEN
        tail.next ← null
    END IF

    IF removedTail equals head THEN
        removeHead()
    END IF

    RETURN removedTail.data

END FUNCTION


## removeByData

### Idea

1. Start at the head of the list.
2. Search through the list for the first node containing the given data.
3. If no matching node is found, return null.
4. If the matching node is the head, remove the head.
5. If the matching node is the tail, remove the tail.
6. Otherwise, connect the previous node to the next node.
7. Connect the next node back to the previous node.
8. Return the removed node.

### High-Level Pseudocode

FUNCTION removeByData(data)

    Start at the head

    Search for a node containing the given data

    IF no matching node is found
        RETURN null
    END IF

    IF the matching node is the head
        Remove the head

    ELSE IF the matching node is the tail
        Remove the tail

    ELSE
        Connect the previous node to the next node
        Connect the next node back to the previous node
    END IF

    RETURN the removed node

END FUNCTION

### More Detailed Pseudocode

FUNCTION removeByData(data)

    nodeToRemove ← undefined
    currentNode ← head

    WHILE currentNode is not null

        IF currentNode.data equals data THEN
            nodeToRemove ← currentNode
            Stop searching
        END IF

        currentNode ← currentNode.next

    END WHILE

    IF nodeToRemove does not exist THEN
        RETURN null
    END IF

    IF nodeToRemove equals head THEN

        removeHead()

    ELSE IF nodeToRemove equals tail THEN

        removeTail()

    ELSE

        nextNode ← nodeToRemove.next
        previousNode ← nodeToRemove.previous

        nextNode.previous ← previousNode
        previousNode.next ← nextNode

    END IF

    RETURN nodeToRemove

END FUNCTION


## printList

### Idea

1. Start at the head of the list.
2. Create an output string beginning with `<head>`.
3. Visit each node one at a time.
4. Add each node's data to the output.
5. Move to the next node.
6. After reaching the end of the list, append `<tail>`.
7. Print the completed output.

### High-Level Pseudocode

FUNCTION printList()

    Start at the head of the list

    Create an output string beginning with "<head>"

    WHILE there is a current node
        Add the current node's data to the output
        Move to the next node
    END WHILE

    Add "<tail>" to the output

    Print the output

END FUNCTION

### More Detailed Pseudocode

FUNCTION printList()

    currentNode ← head

    output ← "<head> "

    WHILE currentNode is not null

        output ← output + currentNode.data + " "

        currentNode ← currentNode.next

    END WHILE

    output ← output + "<tail>"

    PRINT output

END FUNCTION