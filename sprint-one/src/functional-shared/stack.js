var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.index = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj; 
};

var stackMethods = {};
stackMethods.size =  function(){
  return this.index; 
} 
stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++// = this.index + 1;
}
stackMethods.pop = function(){
  if (this.index > 0){
    var temp = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--; 
    return temp; 
  }
}



