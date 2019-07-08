'use strict';

function countSameElements(collection) {
  var arr = new Array();
  const set = new Set();

  for(var i in collection){
    if(set.size==0 || !set.has(collection[i])){
      var obj = {name:collection[i],summary:1};
      arr.push(obj);
      set.add(collection[i]);
    }else{
      for(var j in arr){
        if(arr[j].name==collection[i]){
          arr[j].summary++;
        }
      }
    }
  }
  for(var i in arr){
    if(arr[i].name.indexOf("-")!=-1){
      var key_arr = arr[i].name.split("-");
      arr[i].name = key_arr[0];
      arr[i].summary = parseInt(key_arr[1]);
    }else if(arr[i].name.indexOf(":")!=-1){
      var key_arr = arr[i].name.split(":");
      arr[i].name = key_arr[0];
      arr[i].summary = parseInt(key_arr[1]);
    }else if(arr[i].name.indexOf("[")!=-1){
      var key_arr = arr[i].name.split("[");
      arr[i].name = key_arr[0];
      arr[i].summary = parseInt(key_arr[1].substring(key_arr[1].indexOf("["),key_arr[1].indexOf("]")));
    }

  }
  console.log(arr);
 
  return arr;
}
