//pseudoclassical style

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.index = 0;
};
/*Each method incorporates the getIndexBelowMaxForKey function. This function is a hash function that
takes in a input of a key and a limit(the limit being the size of the has) and outputs an input-presumably an index which has not 
been outputed with any other key input. 
*/
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //hash function
  var keyForValue = k;
   if (this._storage.get(i) !== null && this._storage.get(i) !== undefined){ //If there is nothing at this position of the storage array in the hashFile
      this._storage.set(i,[]);//put a empty array in the storage variable on the hashFunction helper file, at the position of i
  } 
this._storage.get(i).push(keyForValue); //push the key into the array (this array is at position i of the storage array).
this._storage.get(i).push(v); //push the value into the array (this array is at position i of the storage array).
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);//hashFUnction
  for (var j = 0; j < this._storage.get(i).length;j++){//Check every element in the array(which is in the storage array at postion i)
    if (k === this._storage.get(i)[j]) {//if the key matches the current position.
      return this._storage.get(i)[j + 1]; //return the next position in the array. Which will always be the value 
      //implement insert (line 16 and 17)
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);//hash function
  if (this._storage.get(i) !== undefined) {//if there is something at this position in storage
    this._storage.each(function(value, index, collection) {//using the each function given in hashfunction js file. This function will loop 
      //through the storage array(the array in the hasfunction flie)
      if (index === i) {// if the position  of the array( array in hashfunction file) is the same as i then ...
        for (var j = 0; j < value.length; j++) {//using the for to find the key for the specific value
          if (k === value[j]) {
            value[j + 1 ] = null;//set the value of that key to null 
          }
        }
      }
    });
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
