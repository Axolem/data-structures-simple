# Data Structures Simple

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/github/languages/top/Axolem/data-structures-simple)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Axolem/data-structures-simple)
![Branches](https://img.shields.io/badge/branches-97.54%25-brightgreen.svg?style=flat)
![npm](https://aleen42.github.io/badges/src/npm.svg)

## Installation and Usage

#### npm

```bash
npm i data-structures-simple
```

#### yarn

```bash
yarn add data-structures-simple
```

#### bun

```bash
bun add data-structures-simple
```

## Usage

```js
import { LinkedList } from "data-structures-simple";

const list = new LinkedList();

list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);

console.log(list.toArray()); // [1, 2, 3, 4]

list.removeLast();

console.log(list.indexOf(4)); // -1
```

## Documentation

### LinkedList

#### Properties

| Property Name | Description                        | Type   |
| ------------- | ---------------------------------- | ------ |
| head          | The first node in the list         | Node   |
| tail          | The last node in the list          | Node   |
| size          | The number of elements in the list | number |
| Node          | The node class                     | class  |

#### Methods

| Method Name | Description                                                                 | Return Value             |
| ----------- | --------------------------------------------------------------------------- | ------------------------ |
| addLast     | Adds an element at the end of the list                                      | void                     |
| addFirst    | Adds an element at the beginning of the list                                | void                     |
| addAt       | Adds an element at the specified index                                      | void                     |
| removeFirst | Removes the first element from the list                                     | void                     |
| removeLast  | Removes the last element from the list                                      | void                     |
| remove      | Removes the first occurrence of the specified element from the list         | void                     |
| reverse     | Reverses the order of the elements in the list                              | void                     |
| removeAt    | Removes the element at the specified index                                  | void                     |
| indexOf     | Returns the index of the first occurrence of the specified element in list. | number (-1 if not found) |
| contains    | Returns true if the list contains the specified element                     | boolean                  |
| getSize     | Returns the number of elements in the list                                  | number                   |
| isEmpty     | Returns true if the list is empty                                           | boolean                  |
| toArray     | Returns an array containing all of the elements in this list                | array                    |
| getNode     | Returns the node at the specified index                                     | Node                     |

# [More Documentation](https://www.npmjs.com/package/data-structures-simple?activeTab=readme#documentation)

## Contributing

[Pull](https://github.com/Axolem/data-structures-simple/fork) requests are welcome. For major changes, please open an [issue](https://github.com/Axolem/data-structures-simple/issues/new) first to discuss what you would like to change.

## Acknowledgments

- [Code With Mosh](https://codewithmosh.com/)

## Contact

- [Twitter](https://twitter.com/Axole_ma)
- [Instagram](https://www.instagram.com/axole_mar/)
- [LinkedIn](https://www.linkedin.com/in/axolemaranjana/)
- [GitHub](https://github.com/Axolem)

## Project Status (Todo)

- [x] LinkedList
- [ ] Stack
- [ ] Queue
- [ ] HashTable
- [ ] Heap
- [ ] Graph
- [ ] Tree
- [ ] Trie
- [ ] Binary Search Tree
