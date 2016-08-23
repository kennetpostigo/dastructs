<p align="center">
  <img align="center" src="assets/dastruct.png" height="250"/>
</p>
<h1 style="color: #112E40"align="center">Dastructs</h1>
> A Pack of Novelty Data Structures

[![travis build](https://img.shields.io/travis/kennetpostigo/dastructs.svg?style=flat-square)](https://travis-ci.org/kennetpostigo/dastructs)
[![Coveralls](https://img.shields.io/coveralls/kennetpostigo/dastructs.svg?style=flat-square)](https://coveralls.io/github/kennetpostigo/dastructs?branch=master)
[![version](https://img.shields.io/npm/v/dastructs.svg?style=flat-square)](http://npm.im/dastructs)
[![downloads](https://img.shields.io/npm/dm/dastructs.svg?style=flat-square)](http://npm-stat.com/charts.html?package=dastructs&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/dastructs.svg?style=flat-square)](http://opensource.org/licenses/MIT)


Dastructs is a neat dependency-free library packed with novelty data structures
and polymorphic functions that operate on them. Dastructs is short for (Da)ta
(Struct)ures. I made this library to gain a deeper understanding of Data Structures
and Algorithms. In the future I plan to also add immutable Data Structures to this
package or create another package for immutable data structures once I finish reading
a few books on the subject.

This library is under construction and will take sometime to finish, but hopefully
if your into data structures you find these to be pretty awesome to work with.
I will try to make the code easy to follow and understand and try to setup a documentation
site that contains examples and explanations.


## Data Structures to be included:
 + Stack
 + Queue
 + PriorityQueue
 + LinkedList
 + Map
 + Set
 + Seq
 + Dictionary
 + Trie
 + BinarySearchTree
 + Graph

## Contributing
If you are willing to help make the data structures better and want to contribute
in any way whether it be code, suggestions, or feedback I would greatly appreciate
it.

#### Prerequisites
+ You have `node v6.0.0+` and `npm v3.8.0`

#### Build
Once you clone the repository do the following:
```bash
# Install Development Dependencies
npm Install
```

#### Project Scripts
```bash
# Run Tests
npm test

# Watch Tests
npm run test:watch

# Receive Code Coverage Reporting
npm run report

# Run Tests and get Reports
npm run test:report

# Run flow to test your typing
npm run flow

# Create Development and Production builds
npm run build:publish
```
## License
MIT
