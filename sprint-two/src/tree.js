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
  this.children.push({value: value});
  // this.value = this.value + value; 


};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
    if (this.children.length === 0) {
      return false; 
   }
  }
  var findValue = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].value === target) {
        return true; 
      }
      if (arr[i].children.length > 0){
        findvalue(arr[i]);
      }
    }
  }
  var foundNode = findValue();
};


var myTree = Tree(1);
console.log("myTree",myTree);
myTree.contains(1);

/*
 * Complexity: What is the time complexity of the above functions?
 */
