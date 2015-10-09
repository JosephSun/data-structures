

var Graph = function(){
  this.storage = {};
  this.index = 0;
};

Graph.prototype.addNode = function(node){
  this.storage[this.index] = Node(node);
  this.index++;
};

Graph.prototype.contains = function(node){
  var foundNode = false;
  for (var property in this.storage){
    if(this.storage[property].value === node){
      foundNode = true;
    }
  }
  return foundNode;
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

function NodeForGraph(val){
  var node = {
    value: val
  };
  return node;
}