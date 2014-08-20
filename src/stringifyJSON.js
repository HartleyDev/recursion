
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
          if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function'){
            result.push('"' + key + '":' + stringifyJSON(obj[key]));
          }
        }
        return '{' + result.join(',') + '}';
      }
    }
  }
};






// input: an object
// output: object as a string
// contstraints: 
