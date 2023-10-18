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
declare class LinkedList<T> {
    private head;
    private tail;
    private size;
    /**
     * Adds a new element to the end of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    addLast(item: T): void;
    /**
     * Adds a new element to the beginning of the linked list.
     * @param {T} item - The value to be added.
     * @returns {void}
     */
    addFirst(item: T): void;
    /**
     * Adds a new element at the specified index in the linked list.
     * @param {number} index - The index at which the value should be added.
     * @param {T} item - The value to be added.
     * @throws {RangeError} Throws an error if the index is out of range.
     * @returns {void}
     **/
    add(index: number, item: T): void;
    /**
     * Gets the node at the specified index.
     * @param {number} index - The index of the node.
     * @throws {RangeError} Throws an error if the index is out of range.
     * @returns {Node<T> | null} - The node at the specified index.
     */
    getNode(index: number): Node<T> | null;
    /**
     * Finds the index of the first occurrence of the specified element in the linked list.
     * @param {T} item - The element to search for.
     * @returns {number} - The index of the first occurrence of the element, or -1 if not found.
     */
    indexOf(item: T): number;
    /**
     * Checks if the linked list contains the specified element.
     * @param {T} item - The element to check for.
     * @returns {boolean} - True if the element is found, false otherwise.
     */
    includes(item: T): boolean;
    /**
     * Removes the first element from the linked list.
     * @throws {RangeError} Throws an error if the list is empty.
     * @returns {void}
     */
    removeFirst(): void;
    /**
    * Removes the last element from the linked list.
    * @throws {RangeError} Throws an error if the list is empty.
    * @returns {void}
    */
    removeLast(): void;
    /**
     * Checks if the linked list is empty.
     * @private
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Returns the size of the linked list.
     * @returns {number} - The size of the linked list.
     */
    getSize(): number;
    /**
     * Converts the linked list to an array.
     * @returns {T[]} - The array representation of the linked list.
     */
    toArray(): T[];
    /**
     * Reverses the linked list.
     * @returns {void}
     */
    reverse(): void;
    /**
     * Removes the first occurrence of the specified element from the linked list.
     * @param {T} item - The element to be removed.
     * @returns {void}
     */
    remove(item: T): void;
    /**
     * Get the previous node before the specified @param {Node} node
     * @param {Node} node - The element to reference.
     * @private
     * @returns {Node<T> | null} -
     */
    private getPrevious;
}
export default LinkedList;
