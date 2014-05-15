var WebFont = require('webfont@1.3.0/webfont');

exports.locate = function(load) {
  return load.name;
}

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    var o = {};

    var fontName = load.address.split(' ')[0];
    var params = load.address.substr(fontName.length + 1).trim();
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

    o.active = function() {
      resolve('');
    };
    o.inactive = function() {
      reject();
    }

    WebFont.load(o);
  });
}

