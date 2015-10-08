var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.index = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(value){
    this.storage[this.index] = value;
    this.index++;
  },
  pop: function(){
    if(this.index > 0){
      var poppedItem = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
      return poppedItem;
    }
  },
  size: function(){
    return this.index;
  }

};



