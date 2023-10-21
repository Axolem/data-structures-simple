/**
 * Represents a stack data structure.
 * @template T - The type of values stored in the stack.
 * @property {number} size - the maximun number of items to store in a stack default: 10.
 */
class DynamicStack<T>{
    private items: T[];

    constructor() {
        this.items = []
    }

    /**
     * Insert a new element into the stack.
     * @param {T} item  - The value to be added.
     * @returns {void}
     */
    push(item: T): void {
        this.items.push(item);

    }

    /**
     * Removes and returns the top element from the stack.
     * @returns {T | number} The top element, or -1 if the stack is empty.
     */
    pop(): T | number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items.pop() as T;
    }

    /**
     * Returns the top element from the stack without removing it.
     * @returns {T | number} The top element, or -1 if the stack is empty.
     */
    peek(): T | number {
        return this.isEmpty() ? -1 : this.items[this.items.length - 1];
    }

    /**
     * Returns true if the stack is empty, false otherwise.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    size(): number {
        return this.items.length
    }

    /**
     * Returns the stack as an array.
     * @returns {T[]} The stack as an array.
     */
    toArray(): T[] {
        return this.items;
    }
}

export default DynamicStack;