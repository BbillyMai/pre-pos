'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr = new Array();
  for(var i in collectionA){
    for(var j in collectionB[0]){
      if(collectionA[i]==collectionB[0][j]){
        arr.push(collectionB[0][j]);
      }
    }
  }
  return arr;
}
