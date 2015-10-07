var Stack = function(){
  var someInstance = {};
  var index = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[index] = value;
    index++;
  };

  someInstance.pop = function(){
    if(index > 0){
      
      index--;
      var poppedItem = storage[index];
      delete storage[index];
      return poppedItem;
    }
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};

