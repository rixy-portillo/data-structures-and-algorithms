# Stack Pseudocode

## hasRoom

### Idea

1. Check the stack's current size.
2. Compare the current size to the maximum size.
3. Return true if the current size is less than the maximum size.
4. Otherwise, return false.

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

## isEmpty

### Idea

1. Check the stack's current size.
2. Compare the size to zero.
3. Return true if the size is zero.
4. Otherwise, return false.

### High-Level Pseudocode

FUNCTION isEmpty()

    Check whether the stack's size equals zero

    Return the result

END FUNCTION

### More Detailed Pseudocode

FUNCTION isEmpty()

    RETURN size equals 0

END FUNCTION

---

## push

### Idea

1. Check whether the stack has room for another item.
2. If the stack has room, add the value to the head of the linked list.
3. Increase the stack's size by one.
4. If the stack does not have room, throw an error.

### High-Level Pseudocode

FUNCTION push(value)

    Check whether the stack has room

    IF the stack has room
        Add the value to the head of the linked list
        Increase the stack's size by one
    ELSE
        Throw a "Stack is full" error
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION push(value)

    IF hasRoom() is true THEN

        stack.addToHead(value)

        size ← size + 1

    ELSE

        THROW "Stack is full"

    END IF

END FUNCTION

---

## pop

### Idea

1. Check whether the stack is empty.
2. If the stack is not empty, remove the head of the linked list.
3. Save the value returned by `removeHead()`.
4. Decrease the stack's size by one.
5. Return the removed value.
6. If the stack is empty, throw an error.

### High-Level Pseudocode

FUNCTION pop()

    Check whether the stack is empty

    IF the stack is not empty
        Remove the head of the linked list
        Save the removed value
        Decrease the stack's size by one
        Return the removed value
    ELSE
        Throw a "Stack is empty" error
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION pop()

    IF isEmpty() is false THEN

        value ← stack.removeHead()

        size ← size - 1

        RETURN value

    ELSE

        THROW "Stack is empty"

    END IF

END FUNCTION

---

## peek

### Idea

1. Check whether the stack is empty.
2. If the stack is not empty, access the data stored in the linked list's head.
3. Return the data without removing it.
4. If the stack is empty, return null.

### High-Level Pseudocode

FUNCTION peek()

    Check whether the stack is empty

    IF the stack is not empty
        Return the data at the head of the linked list
    ELSE
        Return null
    END IF

END FUNCTION

### More Detailed Pseudocode

FUNCTION peek()

    IF isEmpty() is false THEN

        RETURN stack.head.data

    ELSE

        RETURN null

    END IF

END FUNCTION