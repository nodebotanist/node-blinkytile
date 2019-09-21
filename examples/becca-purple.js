const BlinkyTile = require('../blinkytile')

let blinky = new BlinkyTile('/dev/ttyS12', 42)

blinky.serialPort.on('open', () => {
  console.log('Port open!')
})

blinky.setPixel(5, [0x66, 0x33, 0x99])