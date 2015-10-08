var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var obj = {};
  obj.index = 0;
  obj.storage = {};
  // obj.count = 0;
  // _.extend(obj, stackMethods);
  obj.size = stackMethods.size;
  obj.enque = stackMethods.enque; 
  obj.deque = stackMethods.deque; 
  return obj; 
};


var queueMethods = {};
queueMethods.size =  function(){
  return this.index; 
} 
queueMethods.enque = function (value) {
  this.storage[this.index] = value;
  this.index++// = this.index + 1;
}
queueMethods.deque = function(){
  if (this.index > 0){
    var temp = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--; 
    return temp; 
  }
var queueMethods = {};



