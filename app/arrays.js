exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var result =-1;
    var test = true;
    _.each(arr,function(val,key){
      if ((val===item)&&test){
        result=key;
        test = false;
      }
    })
    return result;

  },

  sum: function(arr) {
    return _.reduce(arr,function(acc,val){
      return acc + val;
    })

  },

  remove: function(arr, item) {
    var result = [];
    for (var i=0;i<arr.length; i++){
      if (arr[i]!==item){
        result.push(arr[i])
      }
    } 
    return result;

  },

  removeWithoutCopy: function(arr, item) {
    for (var i=arr.length; i>-1; i--){
      if (arr[i]===item){
        arr.splice(i,1)
      }
    }
    return arr;    
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {
     _.each(arr2,function(val){
      arr1.push(val)
     })
     return arr1;
  },

  insert: function(arr, item, index) {
    var one = arr.slice(0,index)
    var two = arr.slice(index)
    one.push(item);
    var result = one.concat(two);
    return result;
  },

  count: function(arr, item) {
     return _.reduce(arr,function(acc,val){
       return val===item? ++acc:acc;
     },0)
  },

  duplicates: function(arr) {
    var copyArr = [];
    _.each(arr,function(val){
      if ((arr.indexOf(val)!==arr.lastIndexOf(val))&&(copyArr.indexOf(val)===-1)){
        copyArr.push(val);
      }
    });
    return copyArr;
  },

  square: function(arr) {
    _.each(arr,function(val,key){
      arr[key] = val*val;
    })
    return arr;
  },

  findAllOccurrences: function(arr, target) {

    return _.reduce(arr,function(acc, val, key){

      return val===target? acc.concat(key):acc;
    },[])
  }
};
