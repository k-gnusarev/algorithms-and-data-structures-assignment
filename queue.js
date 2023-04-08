var MyQueue = function () {
  this.inStack = []
  this.outStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
  return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }

  return this.outStack.pop()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  const inStackLength = this.inStack.length
  const outStackLength = this.outStack.length
  //if both are 0 return true
  return !inStackLength && !outStackLength
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const obj = new MyQueue()
console.log(obj)
console.log(obj.empty())
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
console.log(obj)
const param_2 = obj.pop()
console.log(obj, param_2)
const param_3 = obj.peek()
console.log(obj, param_3)
const param_4 = obj.empty()
console.log(obj, param_4)
