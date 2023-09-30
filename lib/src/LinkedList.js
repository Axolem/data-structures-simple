/**
 * Represents a linked list data structure.
 * @template T - The type of values stored in the linked list.
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    /**
     * Adds a new element to the end of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    addLast(item) {
        const node = { value: item };
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    /**
     * Adds a new element to the beginning of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    addFirst(item) {
        const node = { value: item };
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    /**
     * Finds the index of the first occurrence of the specified element in the linked list.
     * @param {T} item - The element to search for.
     * @returns {number} - The index of the first occurrence of the element, or -1 if not found.
     */
    indexOf(item) {
        let index = 0;
        let current = this.head;
        while (current !== null && current !== undefined) {
            if (current.value === item) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    /**
     * Checks if the linked list contains the specified element.
     * @param {T} item - The element to check for.
     * @returns {boolean} - True if the element is found, false otherwise.
     */
    includes(item) {
        return this.indexOf(item) !== -1;
    }
    /**
     * Removes the first element from the linked list.
     * @throws {RangeError} Throws an error if the list is empty.
     * @returns {void}
     */
    removeFirst() {
        if (this.isEmpty()) {
            throw new RangeError("Cannot remove from an empty list!");
        }
        this.size--;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        let second = this.head.next;
        if (second) {
            this.head.next = null;
            this.head = second;
        }
    }
    /**
    * Removes the last element from the linked list.
    * @throws {RangeError} Throws an error if the list is empty.
    * @returns {void}
    */
    removeLast() {
        if (this.isEmpty()) {
            throw new RangeError("Cannot remove from an empty list!");
        }
        this.size--;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        const previous = this.getPrevious(this.tail);
        this.tail = previous;
        this.tail.next = null;
    }
    // Private methods...
    /**
     * Checks if the linked list is empty.
     * @private
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty() {
        return this.head === null;
    }
    /**
     * Get the previous node before the specified @param {Node} node
     * @param {Node} node - The element to reference.
     * @private
     * @returns {Node<T> | null} -
     */
    getPrevious(node) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.next === node) {
                previous = current;
                break;
            }
            current = current.next;
        }
        return previous;
    }
}
export default LinkedList;
