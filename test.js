'use strict'

var test = require('tape')
var CopyInput = require('./')

test(function (t) {
  var state = CopyInput()
  var vtree = CopyInput.render(state, {}, 'copy me')
  t.equal(vtree.tagName, 'INPUT')
  t.equal(vtree.children[0].text, 'copy me')
  t.end()
})
