var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.index = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
    // console.log(this._storage.get(i));
   // if (this._storage.get(i) !== null && this._storage.get(i) !== undefined){
   //  this._storage.set(i + 1,v); //does not work to stop the collision
    //this.index++;
     // console.log('i', i, 'this._storage', this._storage, "this._storage.get(i)", this._storage.get(i));
  //}else {
    this._storage.set(i,v);
  //}

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);
  //console.log(this._storage.get(i));
  if (this._storage.get(i) !== undefined) {
    this._storage.each(function(value, index, collection) {
      if (index === i) {
        collection[index] = null;
      }
    })
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
