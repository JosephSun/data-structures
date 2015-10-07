var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.index = 0;
  // _.extend(obj, stackMethods);
  obj.size = stackMethods.size; 
  return obj; 
};

var stackMethods = {};
stackMethods.size =  function(){
  return this.index; 
} 



var myStack = Stack();
console.log("obj that is stack", myStack,"mystack.size", myStack.size, "mystack.size()", myStack.size())
myStack.size();

