'use strict'

var test = require('tape')
var CopyInput = require('./')

test(function (t) {
  var state = CopyInput()
  CopyInput.render(state)
  t.end()
})
