class CircleRipple {
  static get inputProperties() {
    return ['--circle-color', '--circle-radius', '--circle-x', '--circle-y']
  }
  random(min, max) {
    return Math.random() * (max - min) + min
  }
  paint(ctx, geom, props) {
    const x = parseFloat(props.get('--circle-x').toString())
    const y = parseFloat(props.get('--circle-y').toString())
    if (x === 0 && y === 0) {
      return
    }
    const radius = parseFloat(props.get('--circle-radius').toString())
    ctx.fillStyle = props.get('--circle-color').toString()
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()
  }
}

registerPaint('ripple', CircleRipple)
