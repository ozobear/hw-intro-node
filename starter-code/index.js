class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
   this.items.push(x);
   this.length++;
   this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    return(this.length === 0 ? (() => {
      throw new Error("EmptySortedList")
    })() : Math.min(...this.items));
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length;
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }
};

module.exports = SortedList;
