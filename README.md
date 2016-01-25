plugin-webfont
===========

Forked from [systemjs/system-font](https://github.com/systemjs/system-font)

WebFont Loader plugin for system.js

## Example

1. Install `plugin-webfont`.
```bash
jspm install font=github:LukeXuan/plugin-webfont
```

2. In `fonts.js`.
```javascript
import 'google@Open Sans#2000!font'
```
This will load [Open Sans](https://www.google.com/fonts/specimen/Open+Sans) fonts from [Google fonts](https://www.google.com/fonts/), with a timeout of 2000 milliseconds(helpful for users where google is blocked).

## Test

1. clone this repository.

2. Install dependencies.
```bash
jspm install
```

3. start a http server at the root folder, and open `/test/test.html`.
