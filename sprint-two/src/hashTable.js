var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.index = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keyForValue = k;


    
   if (this._storage.get(i) !== null && this._storage.get(i) !== undefined){
      this._storage.get(i).push(keyForValue); 
      this._storage.get(i).push(v); 


  } else {

    this._storage.set(i,[]);
    this._storage.get(i).push(keyForValue);
    this._storage.get(i).push(v);

  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage.get(i).length;j++){
    if (k === this._storage.get(i)[j]) {
      return this._storage.get(i)[j + 1];
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);
  if (this._storage.get(i) !== undefined) {
    this._storage.each(function(value, index, collection) {
      if (index === i) {
        for (var j = 0; j < value.length; j++) {
          if (k === value[j]) {
            value[j + 1 ] = null
          }
        }
      }
    });
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
