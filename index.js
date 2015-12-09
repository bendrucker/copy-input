'use strict'

var State = require('dover')
var Event = require('weakmap-event')
var h = require('virtual-dom/h')
var clickEvent = require('value-event/click')
var extend = require('xtend')
var copy = require('command-copy')

module.exports = CopyInput

function CopyInput () {
  return State({
    channels: {
      click: ClickEvent.broadcast
    }
  })
}

var ClickEvent = Event()
CopyInput.onClick = ClickEvent.listen

CopyInput.render = function render (state, options, content) {
  var defaults = {
    'ev-click': [
      copyTarget,
      clickEvent(state.channels.click, {})
    ],
    attributes: {
      readonly: ''
    }
  }

  return h('input', extend(defaults, options || {}), content)
}

function copyTarget (event) {
  var element = event.target
  element.setSelectionRange(0, 9999)
  copy()
}
