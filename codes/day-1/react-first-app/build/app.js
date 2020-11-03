define(["exports", "./welcome", "./description"], function (_exports, _welcome, _description) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.app = void 0;

  //app component
  var app = function app() {
    var welcomeElement = (0, _welcome.welcome)();
    var desciptionElement = (0, _description.description)();
    var appElement = document.createElement('div');
    appElement.appendChild(welcomeElement);
    appElement.appendChild(document.createElement('br'));
    appElement.appendChild(document.createElement('br'));
    appElement.appendChild(desciptionElement);
    return appElement;
  };

  _exports.app = app;
});