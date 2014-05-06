// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var classes = className.split(' ');
  var results = [];

  var containsClass = function(nodeList, classArray){
  	count = 0;
  	for(var key in nodeList){
  		if(classArray.indexOf(nodeList[key]) > -1 ){
  			count++;
  	}
  }
  	return (count == classArray.length);
  };

 	var checkNode = function(node, classArr){
 		if(node.classList){
 			if(containsClass(node.classList, classArr)){
 				results.push(node);
 			}
 		}

 		if(node.hasChildNodes()){
 			for(var i = 0; i < node.childNodes.length ; i++){
 				checkNode(node.childNodes[i], classArr);
 			}
 		}
 	};

 	checkNode(document.body, classes);
 	return results;
};
