var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var obj = {};
  obj.index = 0;
  obj.storage = {};
  obj.count = 0;
  // obj.count = 0;
  // _.extend(obj, stackMethods);
  obj.size = queueMethods.size;
  obj.enqueue = queueMethods.enqueue; 
  obj.dequeue = queueMethods.dequeue; 
  return obj; 
};


var queueMethods = {};
queueMethods.size =  function(){
  return this.index; 
} 
queueMethods.enqueue = function (value) {
  this.storage[this.index +  this.count] = value;
  this.index++;// = this.index + 1;
  console.log("This.index", this.index);
}
queueMethods.dequeue = function(){
  if (this.index > 0){
    var dequeItem = this.storage[this.count];
    delete this.storage[this.count];
    this.index--;
    this.count++; 
    return dequeItem; 
  }
}



