// @flow

function djb2 (key) {
  return key.split('').reduce((acc, curr) => acc * 33 + curr.charCodeAt(0), 5381) % 1013;
}

export class Map {
  table: any[];
  cache: number[];
  size: number;
  hashCode: Function;
  clear: Function;
  delete: Function;
  get: Function;
  has: Function;
  set: Function;

  constructor () {
    this.table = [];
    this.cache = [];
    this.size = 0;
  }

  hashCode (key: ?any): ?number {
    if (key) {
      if (typeof key === 'object') {
        return djb2(JSON.stringify(key));
      }
      return djb2(key.toString());
    }
  }

  clear (): void {
    this.table = [];
    this.cache = [];
  }

  delete (key: any): boolean {
    if (!this.table[this.hashCode(key)]) return false;

    var hash = this.hashCode(key);
    if (this.table[hash].length === 1) {
      this.table[hash] = undefined;
      this.size--;
      return true;
    }
    var index = 0;
    while (index < this.table[hash].length) {
      if (this.table[hash][index][0] === key) {
        this.table[hash].splice(index, 1);
        this.size--;
        return true;
      }
      index++;
    }
    return false;
  }

  keys (): number[] {
    var copy: number[] = this.cache.splice(0);
    return copy.filter((item) => {
      if (this.table[item]) {
        return true;
      } else {
        var index = this.cache.indexOf(item);
        this.cache.splice(index, 1);
        return false;
      }
    }).map(item => item);
  }

  values (): any {
    var copy: number[] = this.cache.splice(0);
    var values = [];
    copy.filter((item) => {
      if (this.table[item]) {
        return true;
      } else {
        var index = this.cache.indexOf(item);
        this.cache.splice(index, 1);
        return false;
      }
    }).map(item => {
      if (this.table[item].length === 1) {
        values.push(this.table[item][0][1]);
      } else {
        this.table[item].map(pair => values.push(pair[1]));
      }
    });
    return values;
  }

  get (key: any): any {
    if (!this.table[this.hashCode(key)]) return undefined;

    var hash = this.hashCode(key);
    if (this.table[hash].length === 1) {
      return this.table[hash][0][1];
    }
    var index = 0;
    while (index < this.table[hash].length) {
      if (this.table[hash][index][0] === key) return this.table[hash][index][1];
      index++;
    }
    return undefined;
  }

  has (key: any): boolean {
    if (!this.table[this.hashCode(key)]) return false;
    if (this.table[this.hashCode(key)].some((pair, k) => pair[0] === key)) {
      return true;
    }
    return false;
  }

  hasHash(key: any) {
    if (this.table[this.hashCode(key)]) return true;
    return false;
  }

  set (key: any, value: any): Map {
    if (!this.hasHash(key)) {
      this.table[this.hashCode(key)] = [];
      this.table[this.hashCode(key)][0] = [key, value];
      this.cache.push(this.hashCode(key))
      this.size++;
      return this;
    }

    var index: number;
    var keyCheck: boolean = this.table[this.hashCode(key)].some((pair: [], k: number) => {
      index = k;
      return pair[0] === key
    });

    if (keyCheck) {
      this.table[this.hashCode(key)][index] = value;
      return this;
    }
    this.table[this.hashCode(key)].push([key, value]);
    this.size++;
    return this;
  }
}
