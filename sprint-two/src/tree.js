//functional with shared methods 

var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};


var treeMethods = {};



//Time Complexity: Constant time O(1). We are only utilizing one operation no matter the input. 
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};
//Time Complexity: Runs in linear time- O(n)- because we are, at worst, traversing every node. 
treeMethods.contains = function(target){

  if (this.value === target) {
    return true;

  }
  var foundNode = false;
  var findValue = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].value === target) {
        foundNode = true;
        return; 
      }
      if (arr[i].children.length > 0){
        findValue(arr[i].children);
      }
    }
  }

  if (this.children.length > 0) {
    findValue(this.children);
  }
  return foundNode;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
