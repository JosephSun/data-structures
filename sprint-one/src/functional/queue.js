var Queue = function(){
  var someInstance = {};
  var index = 0;
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index + count] = value;
    index++;
  };

  someInstance.dequeue = function(){
    if (index > 0) {  
      var dequeItem = storage[count];
      delete storage[count];
      index--;
      count++;
      return dequeItem;
      
    }
  };

  someInstance.size = function(){
    return index; 
  };

  return someInstance;
};
