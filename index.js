var jsxify = require('jsx-transform').browserifyTransform;

module.exports = jsxify.configure({
  factory: 'h'
});
