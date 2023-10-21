/**
 * Represents a stack data structure.
 * @template T - The type of values stored in the stack.
 * @property {number} size - the maximun number of items to store in a stack default: 10.
 */
class Stack<T>{
    private items;
    private index = 0;

    constructor(size?: number) {
        this.items = Array<T>(size || 10);
    }

    /**
     * Insert a new element into the stack.
     * @param {T} item  - The value to be added.
     * @returns {void}
     */
    push(item: T): void {
        if (this.index >= this.items.length) {
            throw new Error("Stack overflow", { cause: `Stack is full and cannot add new items. Size: ${this.items.length} Index: ${this.index}` });
        }
        this.items[this.index] = item;
        this.index++;
    }

    /**
     * Removes and returns the top element from the stack.
     * @returns {T | number} The top element, or -1 if the stack is empty.
     */
    pop(): T | number {
        if (this.isEmpty()) {
            return -1;
        }
        const item = this.items[this.index - 1];
        this.index--;
        return item;
    }

    /**
     * Returns the top element from the stack without removing it.
     * @returns {T | number} The top element, or -1 if the stack is empty.
     */
    peek(): T | number {
        return this.isEmpty() ? -1 : this.items[this.index];
    }

    /**
     * Returns true if the stack is empty, false otherwise.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.index === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    size(): number {
        return this.index;
    }

    /**
     * Returns the stack as an array.
     * @returns {T[]} The stack as an array.
     */
    toArray(): T[] {
        const array: T[] = [];
        for (let i = 0; i < this.index; i++) {
            array.push(this.items[i]);
        }
        return array;
    }
}

export default Stack;