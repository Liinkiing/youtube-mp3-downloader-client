CSS.registerProperty({
  name: '--circle-color',
  syntax: '<color>',
  inherits: false,
  initialValue: 'transparent',
})
CSS.registerProperty({
  name: '--circle-radius',
  syntax: '<number>',
  inherits: false,
  initialValue: 0,
})

CSS.paintWorklet.addModule('/worklets/circle-ripple.js')
