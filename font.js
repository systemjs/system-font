import WebFont from 'webfont';

export function locate(load) {
  //TODO: (Luke) Better Regular Expression to trim the address
  var stripDomain = new RegExp('.*\/(.*)');
  return decodeURI(load.address.match(stripDomain)[1]);
}

export function fetch(load) {
  return new Promise(function(resolve, reject) {
    var config = {
      active: function() {
        resolve('');
      },
      inactive: function() {
        reject('Font loading failure');
      }
    };
    //TODO: (Luke) Better Regular Expression to match the address
    var [ ,service, fontName, version, timeout] = load.address.match(/(?:(\w+)@)?([\w\ +-:]+)(?:@([^#]*))?(?:#(\d+))?/);
    if (! service) {
      service = 'google';
    }
    if (! fontName) {
      reject('Font name cannot be undefined');
    }
    switch (service) {
      case 'fontdeck':
        config[service] = {
          'id': fontName
        }
        break;
      case 'monotype':
        config[service] = {
          projectId: fontName
        }
        if (version) {

        }
      case 'google':
        config[service] = {
          'families': [fontName]
        }
        break;
      case 'typekit':
        config[service] = {
          'id': fontName
        }
      default:
        reject('Unknown font service');
    }

    if (timeout) {
      config.timeout = timeout;
    }

    WebFont.load(config);
  });
}
