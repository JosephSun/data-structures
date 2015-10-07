var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.index = 0;
  obj.storage = {};
  // _.extend(obj, stackMethods);
  obj.size = stackMethods.size;
  obj.push = stackMethods.push; 
  return obj; 
};

var stackMethods = {};
stackMethods.size =  function(){
  return this.index; 
} 
stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index = this.index + 1;
}



var myStack = Stack();
console.log("obj that is stack", myStack,"mystack.size", myStack.push, "mystack.size()", myStack.push('ha'))

