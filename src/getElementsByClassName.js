// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  className = className.split(' ');
  var results = [];

  var containsClass = function(nodeList){
  	count = 0;
  	for(var key in nodeList){
  		if(className.indexOf(nodeList[key]) > -1 ){
  			count++;
  	}
  }

  	if(count == className.length){
  		return true;
  	}else {
  		return false;
  	}
  }

 	var checkNode = function(node){
 		if(node.classList){
 			if(containsClass(node.classList)){
 				results.push(node);
 			}
 		}

 		if(node.hasChildNodes()){
 			for(var i = 0; i < node.childNodes.length ; i++){
 				checkNode(node.childNodes[i]);
 			}
 		}
 	}

 	checkNode(document.body);
 	console.log(results);
 	return results;
};
