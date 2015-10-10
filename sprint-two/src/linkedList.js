var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  //Time Complexity comment: O(1) === constant time because we are creating a new Node (which has a constant time operation), changing variables refrences and checking variable refrences. All these operations are constant time.  
  //
  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  //Time Complexity comment: O(1) == constant time because we are only doing instant(by instant, we mean that there is no iteration, recursion, etc... all our operations happen 'instantly')  operations here.
  list.removeHead = function(){
    var removedHeadValue = list.head.value;
    var afterCurrentHead = list.head.next;
    delete list.head;
    list.head = afterCurrentHead;
    return removedHeadValue;
  };


  //Time Complexity comment:O(n)  === linear time because we search the list here.  
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
 commented the answer before each function. The label of the comment is time complexity 
 */
