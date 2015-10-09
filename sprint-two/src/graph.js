

var Graph = function(){
  this.storage = {};
  this.index = 0;
};

Graph.prototype.addNode = function(node){
  this.storage[this.index] = NodeForGraph(node);
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
  var foundEdge = false;
  for (var property in this.storage){
    var neededNode = this.storage[property];
    if(neededNode.value === fromNode ||  neededNode.value === toNode){
      // console.log("GOING THROUGH IF");
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
  if (this.contains(fromNode,toNode)){
    for(var property in this.storage){
      var currentNode = this.storage[property];
      if(currentNode.value === fromNode || currentNode.value === toNode){
        _.each(currentNode.edge, function(elementInEdgeArray, index){
          if(elementInEdgeArray === fromNode || elementInEdgeArray === toNode){
            currentNode.edge.splice(index, 1)
          }  
        })
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  // for(var property in this.storage){
  //   var currentNode = this.storage[property];
  //   console.log("cb", cb, "currentNode", currentNode);
  //   cb(currentNode);
  //   console.log("arguments", arguments);
  // }
  _.each(this.storage, function(node) {
    if (node.value !== undefined) {
      cb(node.value);
    }
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

function NodeForGraph(val){
  var node = {
    value: val,
    edge: [],
    index: 0

  };
  return node;
}


// var graph = new Graph();
// graph.addNode('puppies');
// graph.addNode('kittens');
// graph.addNode('penguins');

// console.log('graph', graph)