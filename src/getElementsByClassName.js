// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var className = className.split(' ');
  //determine if current node has class name, if so store in result
  var search = function(node){

    var count = 0;
    if (node.className){
      var nodeClasses = node.className.split(' ');
      for (var j = 0; j < nodeClasses.length; j++){
        if (className.indexOf(nodeClasses[j]) > -1){
          count++;
        }
      }
      if (count === className.length){
        result.push(node);
      }
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
