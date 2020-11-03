define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.description = void 0;

  //description component
  var description = function description() {
    var data = 'React is a JavaScript Library';
    var articleElement = document.createElement('article');
    articleElement.innerHTML = data;
    return articleElement;
  };

  _exports.description = description;
});