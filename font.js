var WebFont = require('webfont@1.3.0/webfont');

module.exports = function(name, url, fetch, callback, errback) {

  var o = {};

  var fontName = name.split(' ')[0];
  var params = name.substr(fontName.length + 1).trim();
  fontName = fontName.trim().substr(1);

  if (fontName == 'google')
    o[fontName] = {
      families: params.split(',')
    };
  else if (fontName == 'typekit')
    o[fontName] = {
      id: params
    };
  else if (fontName == 'monotype')
    o[fontName] = {
      projectId: params.split(',')[0],
      version: params.split(',')[1]
    };
  else if (fontName == 'fontdeck')
    o[fontName] = {
      id: params
    };

  o.active = callback;
  o.inactive = errback;

  WebFont.load(o);
}

