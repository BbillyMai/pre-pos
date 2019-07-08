'use strict';

function countSameElements(collection) {

  var arr = new Array();
  const set = new Set();

  for(var i in collection){
    if(set.size==0 || !set.has(collection[i])){
      var obj = {key:collection[i],count:1};
      arr.push(obj);
      set.add(collection[i]);
    }else{
      for(var j in arr){
        if(arr[j].key==collection[i]){
          arr[j].count++;
        }
      }
    }
  }
  console.log(arr);
  return arr;
}
