define(["./app"], function (_app) {
  "use strict";

  var appDesign = (0, _app.app)();
  var placeholder = document.getElementById('app');
  placeholder.appendChild(appDesign);
});