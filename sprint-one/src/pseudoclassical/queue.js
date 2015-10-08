var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0; 
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index + this.count] = value;
  this.index++;
};

Queue.prototype.dequeue = function(){
  if (this.index > 0) {
    var dequeueItem = this.storage[this.count];
    delete this.storage[this.count];
    this.count++;
    this.index--;
    return dequeueItem; 
  }
};

Queue.prototype.size = function(){
  return this.index;
};
