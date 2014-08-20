// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log(json);
  var type = typeof json;
  var result = [];
  if(type === 'string'){
    return '"' + json + '"';
  }else if(type === 'number'){
    return  json + '';
  }else if(type === 'boolean'){
    return json ? true + '' : false + '';
  }else if(type === 'undefined'){
    return json + '';
  }else {
    if(json === null){
      return null + '';
    }else if (Array.isArray(json)){
      if (json.length === 0){
        return '[]';
      }
      for(var i = 0; i < json.length; i++){
        result.push(parseJSON(json[i]));
      }
      return '[' + result.join(',') + ']';
    }
  }
};
