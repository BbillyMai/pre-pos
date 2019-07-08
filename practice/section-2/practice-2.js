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
  for(var i in arr){
      if(arr[i].key.indexOf("-")!=-1){
        var key_arr = arr[i].key.split("-");
        arr[i].key = key_arr[0];
        arr[i].count = parseInt(key_arr[1]);
      }
    
  }
  console.log(arr);
  return arr;
}
