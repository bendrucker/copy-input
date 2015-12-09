'use strict'

var test = require('tape')
var createElement = require('virtual-dom/create-element')
var CopyInput = require('./')

test(function (t) {
  var state = CopyInput()
  var vtree = CopyInput.render(state, {value: 'copy me'})
  var element = createElement(vtree)
  t.equal(element.tagName, 'INPUT')
  t.equal(element.value, 'copy me')
  t.end()
})
