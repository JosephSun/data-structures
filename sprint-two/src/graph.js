//pseudoclassical style

var Graph = function(){
  this.storage = {};
  this.index = 0;
  this.size = 0;
};

//Time complexity: O(1) because the function is just completing two operations (storing value and adding index by 1) regardless of the input. 

Graph.prototype.addNode = function(node){
  this.storage[this.index] = NodeForGraph(node);
  this.index++;
  this.size++;
};


//Time complexity: O(n) because the function is traversing an array (traversing this.storage). This array, might at times have 6 values or 100 values. So our time is dependent on the size of the array, or if you prefer on the inputs of the array.
Graph.prototype.contains = function(node){
  var foundNode = false;
  for (var property in this.storage){
    if(this.storage[property].value === node){
      foundNode = true;
    }
  }
  return foundNode;
};

//Time complexity: O(n) beacause our function is iterating over an array that at times might have 1 or 1000 elements.
Graph.prototype.removeNode = function(node){
  for(var property in this.storage){
    if(this.storage[property].value === node){
      delete this.storage[property];
      this.size--;
    }
  }

};


//Time Complexity: O(n^2): quadratic operation
Graph.prototype.hasEdge = function(fromNode, toNode){
  var foundEdge = false;
  for (var property in this.storage){
    var neededNode = this.storage[property];
    if(neededNode.value === fromNode ||  neededNode.value === toNode){
      for(var i = 0; i < neededNode.edge.length; i++){
        if(neededNode.edge[i] === fromNode || neededNode.edge[i] === toNode){
          foundEdge = true;
        }
      }
    }
  }
  return foundEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var property in this.storage){
    if(this.storage[property].value === fromNode){
      this.storage[property].edge.push(toNode);
    } 
     if(this.storage[property].value === toNode){
      this.storage[property].edge.push(fromNode);
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var property in this.storage){
    var currentNode = this.storage[property];
    if(currentNode.value === fromNode || currentNode.value === toNode){
      _.each(currentNode.edge, function(elementInEdgeArray, index){
        if(elementInEdgeArray === fromNode || elementInEdgeArray === toNode){
          currentNode.edge.splice(index, 1);
        }  
      });
    }
  }
  
};

Graph.prototype.forEachNode = function(cb){

  _.each(this.storage, function(node) {
    if (node.value !== undefined) {
      cb(node.value);
    }
  });
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


exampleGraph = new Graph; 
console.log(exampleGraph);
exampleGraph.addNode('a');
exampleGraph.addNode('b');
console.log(exampleGraph);
exampleGraph.removeNode('a');
console.log(exampleGraph);
exampleGraph.addNode('c');
console.log(exampleGraph);
