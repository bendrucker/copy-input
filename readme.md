# copy-input [![Build Status](https://travis-ci.org/bendrucker/copy-input.svg?branch=master)](https://travis-ci.org/bendrucker/copy-input) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/copy-input.svg)](https://greenkeeper.io/)

> Render an input that auto-selects and copies when clicked


## Install

```
$ npm install --save copy-input
```


## Usage

```js
var CopyInput = require('copy-input')

var state = CopyInput()
var options = {
  style: {
    background: 'blue'
  },
  value: 'copy me!'
}
CopyInput.render(state, options)
//=> ...
//=> renders blue readonly input that copies itself when clicked
```

## API

#### `CopyInput()` -> `function`

Returns an observable value representation (`state`).

#### `CopyInput.render(state, options)` -> `object`

Renders the copy input to a vtree. `options.value` is displayed in the input field.


## License

MIT © [Ben Drucker](http://bendrucker.me)
