# Queue Pseudocode

## isEmpty

### Idea

1. Check the queue's current size.
2. Compare the size to zero.
3. Return `true` if the size is zero.
4. Otherwise, return `false`.

### High-Level Pseudocode

FUNCTION isEmpty()

    Check whether the queue's size equals zero

    Return the result

END FUNCTION

### More Detailed Pseudocode

FUNCTION isEmpty()

    RETURN size equals 0

END FUNCTION

---

## hasRoom

### Idea

1. Check the queue's current size.
2. Compare the current size to the maximum size.
3. Return `true` if the current size is less than the maximum size.
4. Otherwise, return `false`.

### High-Level Pseudocode

FUNCTION hasRoom()

    Check whether the current size is less than the maximum size

    Return the result

END FUNCTION

### More Detailed Pseudocode

FUNCTION hasRoom()

    RETURN size is less than maxSize

END FUNCTION

---

## enqueue

### Idea

1. Check whether the queue has room for another item.
2. If the queue has room, add the data to the tail of the linked list.
3. Increase the queue's size by one.
4. If the queue does not have room, throw an error.

### High-Level Pseudocode

FUNCTION enqueue(data)

    Check whether the queue has room

    IF the queue has room
        Add the data to the tail of the linked list
        Increase the queue's size by one
    ELSE
        Throw a "Queue is full!" error
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION enqueue(data)

    IF hasRoom() is true THEN

        queue.addToTail(data)

        size ← size + 1

    ELSE

        THROW "Queue is full!"

    END IF

END FUNCTION

---

## dequeue

### Idea

1. Check whether the queue is empty.
2. If the queue is not empty, remove the head of the linked list.
3. Save the data returned by `removeHead()`.
4. Decrease the queue's size by one.
5. Return the removed data.
6. If the queue is empty, throw an error.

### High-Level Pseudocode

FUNCTION dequeue()

    Check whether the queue is empty

    IF the queue is not empty
        Remove the head of the linked list
        Save the removed data
        Decrease the queue's size by one
        Return the removed data
    ELSE
        Throw a "Queue is empty!" error
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION dequeue()

    IF isEmpty() is false THEN

        data ← queue.removeHead()

        size ← size - 1

        RETURN data

    ELSE

        THROW "Queue is empty!"

    END IF

END FUNCTION