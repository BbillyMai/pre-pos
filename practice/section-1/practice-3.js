'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = new Array();
  var collectionB = objectB.value;
  for(var i in collectionA){
    for(var j in collectionB){
      if(collectionA[i]==collectionB[j]){
        arr.push(collectionB[j]);
      }
    }
  }
  return arr;
}
