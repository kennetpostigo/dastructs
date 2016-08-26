// @flow

class TNode {
  value: ?any;
  keys: Object;

  constructor (value: ?any) {
    this.value = value;
    this.keys = {};
  }
}

export class Trie {
  root: TNode;

  constructor () {
    this.root = new TNode("");
  }

  insert (term: string): ?Trie {
    if (!term) return;
    return this.__insertTrie(this.root, term, term);
  }

  __insertTrie(node: TNode, fullTerm: string, term: string): ?Trie {
    if (term.length === 0) {
      node.value = fullTerm;
      return this;
    }
    if (!node.keys[term[0]]) {
      var next = node.keys[term[0]] = new TNode("");
      return this.__insertTrie(next, fullTerm, term.substring(1));
    }
    return this.__insertTrie(node.keys[term[0]], fullTerm, term.substring(1))
  }

  remove (term: string): boolean {
    if (!term) return false;
    return this.__removeTrie(this.root, term, term);
  }

  __removeTrie (node: ?TNode, fullTerm: string, term: string): boolean {
    if (node) {
      if (term.length === 0) {
        if (!node.value) return false;
        if (Object.keys(node.keys).length === 0) {
          node = undefined;
          return true;
        }
        node.value = "";
        return true;
      }
      if (!node.keys[term[0]]) {
        return false;
      }

      return this.__removeTrie(node.keys[term[0]], fullTerm, term.substring(1));
    }
    return false;
  }

  contains (term: any): boolean {
    if (!term) return false
    return this.__containsTrie(this.root, term, term);
  }

  __containsTrie (node: TNode, fullTerm: string, term: string): boolean {
    if (term.length === 0 && node.value) {
      return true;
    }
    if (!node.keys[term[0]]) {
      return false;
    }

    return this.__containsTrie(node.keys[term[0]], fullTerm, term.substring(1));
  }
}
