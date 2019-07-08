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
    if(set.has(collectionA[i].key) && collectionA[i].count>=3){
      var sum = parseInt(collectionA[i].count / 3);
      console.log(sum);
      collectionA[i].count = collectionA[i].count - sum;
    }
  }
  console.log(collectionA);
  return collectionA;
}
