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
    var afterCurrentHead = list.head.next;
    console.log("List.head.next", afterCurrentHead);
    delete list.head;
    list.head = afterCurrentHead;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var myList = LinkedList();
myList.addToTail(4);
myList.addToTail(5);
myList.removeHead();

console.log("myList:", myList)
/*
 * Complexity: What is the time complexity of the above functions?
 */
