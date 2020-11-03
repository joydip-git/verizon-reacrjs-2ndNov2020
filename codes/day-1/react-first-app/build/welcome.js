define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.welcome = void 0;

  //welcome component
  var welcome = function welcome() {
    var message = 'Welcome to React';
    var spanElement = document.createElement('span'); // const spanStyle = {
    //     backgroundColor: 'lime',
    //     textAlign: 'center',
    //     fontFamily: 'Arial',
    //     fontSize: 'medium'
    // }
    //spanElement.style = spanStyle;

    spanElement.style.backgroundColor = 'lime';
    spanElement.style.textAlign = 'center';
    spanElement.style.fontFamily = 'Consolas';
    spanElement.style.fontSize = 'medium';
    spanElement.innerHTML = message;
    return spanElement;
  };

  _exports.welcome = welcome;
});