// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function stringifyJSON(obj){ 
  var type = typeof obj;
  if(type == 'number') {
  	num = obj;
  	return num.toString();
  }else if (type == 'string'){
  	return '"' + obj + '"';
  }else if (type == 'boolean'){
  	return obj.toString();
  }else if (obj === undefined){
  	return '';
  }else if (type == 'object'){
  	if(!obj){
  		return '' + obj + '';
  	}
  	if(Array.isArray(obj)){
  		var stringified = '[';
  		for(var i = 0; i < obj.length; i++){
  			stringified += stringifyJSON(obj[i]) + ',';
  		}
  		stringified = stringified.replace(/,\s*$/, "");
  		stringified += ']';
  		return stringified;
  	}else {
  		var stringified = '{';
  		for(var key in obj){
  			if (typeof obj[key] != "function" && typeof obj[key] != "undefined"){
	  			stringified += stringifyJSON(key);
	  			stringified += ':' + stringifyJSON(obj[key]) + ',';
	  		}
  		}
  		stringified = stringified.replace(/,\s*$/, "");
  		stringified += '}';
  		return stringified;
  	}
  }
};






// input: an object
// output: object as a string
// contstraints: 