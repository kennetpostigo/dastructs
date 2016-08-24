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
    if (this.has(key)) {
      this.table[this.hashCode(key)] = undefined;
      this.size--;
      return true;
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
    return copy.filter((item) => {
      if (this.table[item]) {
        return true;
      } else {
        var index = this.cache.indexOf(item);
        this.cache.splice(index, 1);
        return false;
      }
    }).map(item => this.table[item]);
  }

  get (key: any): any {
    // use hashed key and unhashed key
    return this.table[this.hashCode(key)] || undefined;
  }

  has (key: any): boolean {
    if (this.table[this.hashCode(key)]) return true;
    return false;
  }

  set (key: any, value: any): Map {
    if (this.has(key)) {
      this.table[this.hashCode(key)] = value;
      return this;
    }
    this.table[this.hashCode(key)] = value;
    this.cache.push(this.hashCode(key));
    this.size++;
    return this;
  }
}
