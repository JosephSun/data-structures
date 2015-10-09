var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage.push(item);
};

setPrototype.contains = function(item){
  var containsItem = false;//for readability we are adding this variable name
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      containsItem = true;
      return containsItem; // putting this in here for faster algorithim time. 
    }
  }
  return containsItem;
};

setPrototype.remove = function(item){
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i,1);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
