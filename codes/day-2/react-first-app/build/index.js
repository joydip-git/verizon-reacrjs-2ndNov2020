define(["./app"], function (_app) {
  "use strict";

  _app = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var appDesign = (0, _app["default"])();
  var placeholder = document.getElementById('app');
  placeholder.appendChild(appDesign);
});