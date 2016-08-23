// @flow

function makeCRCTable (): number[] {
  var c;
  var crcTable: number[] = [];
  for(var n =0; n < 256; n++){
    c = n;
    for(var k =0; k < 8; k++){
      c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c;
  }
  return crcTable;
}

function crc32 (str: string): number {
  var crcTable: number[] = makeCRCTable();
  var crc: number = 0 ^ (-1);

  for (var i = 0; i < str.length; i++ ) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
  }

  return (crc ^ (-1)) >>> 0;
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
        return crc32(JSON.stringify(key));
      }
      return crc32(key.toString());
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
