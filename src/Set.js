// @flow

import { Map } from './Map';

export class Set {
  items: Map;
  size: number;
  add: Function;
  clear: Function;
  delete: Function;
  has: Function;
  union: Function;
  intersection: Function;
  difference: Function;
  subset: Function;

  constructor (values: any[] = []) {
    this.items = new Map();
    values.map(value => this.items.set(value, value));
    this.size = this.items.size;
  }

  add (value: any): boolean {
    if (!this.items.has(value)) {
      this.items.set(value, value);
      return true;
    }
    return false;
  }

  clear (): void {
    this.items.clear();
  }

  delete (value: any): boolean {
    return this.items.delete(value);
  }

  has (value: any): boolean {
    return this.items.has(value);
  }

  values (): any[] {
    return this.items.values();
  }

  union (setB: Set = new Set()): Set {
    var a: any[] = this.values().splice(0),
        b: any[] = setB.values().splice(0),
        setValues: any[] = a.concat(b);
    return new Set(setValues);
  }

  intersection (setB: Set = new Set()): Set {
    var setValues: any[] = [];
    if (this.size > setB.size) {
      this.values().map(value => {
        if (setB.has(value)) setValues.push(value);
      });
      return new Set(setValues);
    }
    setB.values().map(value => {
      if (this.has(value)) setValues.push(value);
    });
    return new Set(setValues);
  }

  difference (setB: Set = new Set()): Set {
    var setValues: any[] = [];
    this.values().map(value => {
      if (!setB.has(value)) setValues.push(value);
    });
    return new Set(setValues);
  }

  // subset (setB: Set = new Set()): boolean {
  //   if (this.size > setB.size) return false;
  //   var a: any[] = this.values(),
  //       b: any[] = setB.values(),
  //       pointer: number = 0;
  //       // console.log(`${a} - ${b}`);
  //   while (pointer++ <= a.length) {
  //     if (!b[a[pointer]]) return false;
  //   }
  //   return true;
  // }
}
