# Linked List Pseudocode

## addToHead

Idea: Add a new node to the beginning of the list.

Pseudocode:

FUNCTION addToHead(data)

    Create a new node with data

    Save the current head node

    Set head to the new node

    IF a head node already existed
        Point the new head to the old head
    END IF

END FUNCTION


## addToTail

Idea: Add a new node to the end of the list.

Pseudocode:

FUNCTION addToTail(data)

    IF list is empty THEN
        Create a new node
        Set head to the new node
    ELSE
        Start at the head

        WHILE there is another node after the current node
            Move to the next node
        END WHILE

        Create a new node
        Attach it to the end of the list
    END IF

END FUNCTION


## removeHead

Idea: Remove the first node from the list.

Pseudocode:

FUNCTION removeHead()

    IF list is empty THEN
        Return nothing
    END IF

    Save the current head

    Move head to the next node

    Return the data from the removed node

END FUNCTION


## printList

Idea: Print the data of the linked list starting with head and ending with tail.

Pseudocode:

FUNCTION printList()

    Start at the head of the list

    Create an output string beginning with "<head>"

    WHILE there is a current node
        Add the current node's data to the output
        Move to the next node
    END WHILE

    Add "<tail>" to the end of the output

    Print the output

END FUNCTION