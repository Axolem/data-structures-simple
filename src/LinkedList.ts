/**
 * Represents a node in the linked list.
 * @template T - The type of value held by the node.
 * @property {T} value - The value stored in the node.
 * @property {Node<T> | null} next - Reference to the next node in the list.
 */
interface Node<T> {
    value: T;
    next?: Node<T> | null;
}

/**
 * Represents a linked list data structure.
 * @template T - The type of values stored in the linked list.
 */
class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size = 0;

    /**
     * Adds a new element to the end of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    public addLast(item: T): void {
        const node: Node<T> = { value: item };

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;

        }
        this.size++;
    }

    /**
     * Adds a new element to the beginning of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    public addFirst(item: T): void {
        const node: Node<T> = { value: item }

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
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
    public indexOf(item: T): number {
        let index = 0;
        let current = this.head;

        while (current !== null && current !== undefined) {
            console.log("Current: ", current);
            if (current.value === item) {
                return index;
            }
            current = current.next!;
            index++;
        }
        return -1;
    }

    /**
     * Checks if the linked list contains the specified element.
     * @param {T} item - The element to check for.
     * @returns {boolean} - True if the element is found, false otherwise.
     */
    public includes(item: T): boolean {
        return this.indexOf(item) !== -1;
    }

    /**
     * Removes the first element from the linked list.
     * @throws {RangeError} Throws an error if the list is empty.
     * @returns {void}
     */
    public removeFirst(): void {
        if (this.isEmpty()) {
            throw new RangeError("Cannot remove from an empty list!")
        }

        this.size--;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        let second = this.head!.next;
        if (second){
            this.head!.next = null;
            this.head = second;
        }
    }

     /**
     * Removes the last element from the linked list.
     * @throws {RangeError} Throws an error if the list is empty.
     * @returns {void}
     */
    public removeLast(): void {
        if (this.isEmpty()) {
            throw new RangeError("Cannot remove from an empty list!")
        }

        this.size--;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        const previous = this.getPrevious(this.tail!);
        this.tail = previous;
        this.tail!.next = null;
    }

    // Private methods...

    /**
     * Checks if the linked list is empty.
     * @private
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    private isEmpty(): boolean {
        return this.head === null
    }

    /**
     * Get the previous node before the specified @param {Node} node
     * @param {Node} node - The element to reference.
     * @private
     * @returns {Node<T> | null} - 
     */
    private getPrevious(node: Node<T>): Node<T> | null {
        let current: Node<T> | null = this.head;
        let previous: Node<T> | null = null;
    
        while (current !== null) {
            if (current.next === node) {
                previous = current;
                break;
            }
            current = current!.next!;
        }
        return previous;
    }
}

export default LinkedList;