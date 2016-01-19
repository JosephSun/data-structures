//Pseudo Classical


var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;

};

BinarySearchTree.prototype.insert = function(value){
  var recurseTree = function(node){
    if(node.value > value){
      if(node.left === null){
        node.left = new BinarySearchTree(value);
      } else {
        recurseTree(node.left);
      }
    } else {
        if(node.right === null){
          node.right = new BinarySearchTree(value);
        } else {
          recurseTree(node.right);
        }
      }   
  };
  recurseTree(this);
};



BinarySearchTree.prototype.contains = function(value){
  var nodeInTree = false;
  var recurseTree = function(node) {
    if (node !== null){    
      if (node.value === value) {
        nodeInTree = true;
      }else if (node.value > value) {
        recurseTree(node.left);
      }else {
        recurseTree(node.right);
      }
    }

  };
  recurseTree(this);
  return nodeInTree;
};
BinarySearchTree.prototype.depthFirstLog = function(func){

  var recurseTree = function(node) {
    if (node !== null) {
      func(node.value);
      recurseTree(node.left);
      recurseTree(node.right);
    }
  };
  recurseTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
