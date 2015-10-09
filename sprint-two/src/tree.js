var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  // this.value = this.value + value; 


};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
   //  if (this.children.length === 0) {
   //    return false; 
   // }
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
