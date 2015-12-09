# copy-input [![Build Status](https://travis-ci.org/bendrucker/copy-input.svg?branch=master)](https://travis-ci.org/bendrucker/copy-input)

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
  }
}
CopyInput.render(state, options, 'copy me!')
//=> ...
//=> renders readonly input that copies itself when clicked
```

## API

#### `CopyInput()` -> `function`

Returns an observable value representation (`state`).

#### `CopyInput.render(state, options, content)` -> `object`

Renders the copy input to a vtree.


## License

MIT © [Ben Drucker](http://bendrucker.me)
