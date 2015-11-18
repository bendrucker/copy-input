'use strict'

var State = require('dover')
var Input = require('base-input')()
var Event = require('weakmap-event')
var clickEvent = require('value-event/click')
var extend = require('xtend')
var copy = require('command-copy')

module.exports = CopyInput

function CopyInput () {
  return State({
    input: Input(),
    channels: {
      click: ClickEvent.broadcast
    }
  })
}

var ClickEvent = Event()
CopyInput.onClick = ClickEvent.listen

CopyInput.render = function render (state, options) {
  var defaults = {
    'ev-click': [
      copyTarget,
      clickEvent(state.channels.click, {})
    ],
    attributes: {
      readonly: ''
    }
  }

  return Input.render(state, extend(defaults, options || {}))
}

function copyTarget (event) {
  var element = event.target
  element.setSelectionRange(0, 9999)
  copy()
}
