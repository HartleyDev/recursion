// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //   console.log(json);
  var type = typeof obj;
  var result = [];
  if(type === 'string'){
    return '"' + obj + '"';
  }else if(type === 'number'){
    return  obj + '';
  }else if(type === 'boolean'){
    return obj ? true + '' : false + '';
  // }else if(type === 'undefined'){
  //   return obj + '';
  }else if (type === 'object'){
    if(obj === null){
      return null + '';
    }else if (Array.isArray(obj)){
      if (obj.length === 0){
        return '[]';
      }
      for(var i = 0; i < obj.length; i++){
        result.push(stringifyJSON(obj[i]));
      }
      return '[' + result.join(',') + ']';
    }else{
      if (Object.keys(obj).length === 0){
        return '{}';
      }else{
        for (var key in obj){
          result.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
        return '{' + result.join(',') + '}';
      }
    }
  }
};
