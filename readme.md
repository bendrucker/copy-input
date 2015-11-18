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
CopyInput.render(state, {
  style: {
    background: 'blue'
  }
})
//=> ...
//=> renders readonly input that copies itself when clicked
```

## API

#### `CopyInput()` -> `function`

Returns an observable value representation (`state`). `state.input.value()` is the displayed input value.

#### `CopyInput.render(state)` -> `object`

Renders the copy input to a vtree.


## License

MIT © [Ben Drucker](http://bendrucker.me)
