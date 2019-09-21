const SerialPort = require('serialport')

class BlinkyTile {
  constructor(port, numberOfLEDs) {
    this.serialPort = new SerialPort(port, {
      baudRate: 115200,
      autoOpen: false
    })
    this.numberOfLEDs = numberOfLEDs
    this._LED_buffer = Buffer.alloc(numberOfLEDs*3)
    this._LED_buffer
  }

  start() {
    if(this.serialPort.isOpen) {
      return
    } else {
      this.serialPort.open()
    }
  }

  setPixel(index, color) {
    this._LED_buffer[3*(index-1)] = Math.min(254, color[0])
    this._LED_buffer[(3*(index-1))+1] = Math.min(254, color[1])
    this._LED_buffer[(3*(index-1))+2] = Math.min(254, color[2])
    console.log('updated Buffer: ', this._LED_buffer)
  }
}

module.exports = BlinkyTile