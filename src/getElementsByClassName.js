// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  //determine if current node has class name, if so store in result
  var search = function(node){

    if(node.className && node.className.split(' ').indexOf(className) > -1){
      result.push(node);
    }
    if (node.childNodes){
      for (var i = 0; i < node.childNodes.length; i++){
        search(node.childNodes[i]);
      }
    }

  };
  search(document.body);
  return result;
};
