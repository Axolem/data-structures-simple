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
    private isEmpty;
    /**
     * Get the previous node before the specified @param {Node} node
     * @param {Node} node - The element to reference.
     * @private
     * @returns {Node<T> | null} -
     */
    private getPrevious;
}
export default LinkedList;
