'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  const set = new Set();
  var arr = objectB.value;
  console.log(arr);
  for(var i in arr){
    set.add(arr[i]);
  }
  console.log(set);
  for(var i in collectionA){
    if(set.has(collectionA[i].key)){
      collectionA[i].count -= 1;
    }
  }
  console.log(collectionA);
  return collectionA;
}
