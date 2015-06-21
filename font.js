var WebFont = require("webfont"),
    stripDomain = new RegExp("^(.*://[^/]*/)?(.*)$");

exports.locate = function(load) {
  return decodeURI(load.name.match(stripDomain)[2]);
}

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    var fontName = load.address.split(" ")[0],
        params = load.address.substr(fontName.length + 1).split(",").map(function(str) {
          return str.trim();
        }),
        font = {},
        config = {
          active: function() { resolve("") },
          inactive: function() { reject() }
        };

    config[fontName] = font

    switch (fontName) {
      case "fontdeck":
      case "typekit":
        font.id = params.join(",");
        break;
      case "google":
        font.families = params;
        break;
      case "monotype":
        font.projectId = params[0];
        font.version = params[1];
    }

    WebFont.load(config);
  });
}
