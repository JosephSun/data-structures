var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.index = 0; 
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var queueMethods = {
  enqueue:function(val) {
    this.storage[this.index + this.count] = val;
    this.index++;
  },
  
  size: function() {
    return this.index;
  },

  dequeue: function() {
    if (this.index > 0) {  
      var dequeueItem = this.storage[this.count];
      delete this.storage[this.count];
      this.count++;
      this.index--;
      return dequeueItem;
    }
  }
};


