var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var removedHeadValue = list.head.value;
    var afterCurrentHead = list.head.next;
    delete list.head;
    list.head = afterCurrentHead;
    return removedHeadValue;
  };

  list.contains = function(target){
    var currentNode = list.head;

    while(true){
      if(currentNode.value === target){
        return true;
      }
      if(currentNode.next === null){
        return false;
      }
      currentNode = currentNode.next;
    }

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
