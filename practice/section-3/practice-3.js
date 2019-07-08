'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const setA = new Set();
  const setB = new Set();
  var collectionC = new Array();
  for(var i in objectB.value){
    setB.add(objectB.value[i]);
  }
  
  for(var i in collectionA){
    if(setA.size==0 || !setA.has(collectionA[i])){
      var obj = {key:collectionA[i],count:1};
      collectionC.push(obj);
      setA.add(collectionA[i]);
    }else{
      for(var j in collectionC){
        if(collectionC[j].key==collectionA[i]){
          collectionC[j].count++;
        }
      }
    }
  }
 
  for(var i in collectionC){
    if(setB.has(collectionC[i].key) && collectionC[i].count>=3){
      var sum = parseInt(collectionC[i].count / 3);
      console.log(sum);
      collectionC[i].count = collectionC[i].count - sum;
    }
  }
  console.log(collectionC);
  return collectionC;
}
