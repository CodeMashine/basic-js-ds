const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */




class Stack {
  constructor(){
    this.base = [] ;
  }
  push(element ) {
    this.base.push(element) ;

  }

  pop() {
    let out = this.base.pop() ;
    return out ;

  }

  peek() {
    let lastIndex = this.base.length - 1 ;
    return this.base[lastIndex] ;

  }
}

module.exports = {
  Stack
};
