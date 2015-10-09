

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
  for(var property in this.storage){
    if(this.storage[property].value === node){
      delete this.storage[property];
      this.index--;
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var property in this.storage){
    if(this.storage[property].value === fromNode){
      this.storage[property].edge.push(toNode);
    } else if(this.storage[property].value === toNode){
      this.storage[property].edge.push(fromNode);
    }
  }

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
    value: val,
    edge: []

  };
  return node;
}