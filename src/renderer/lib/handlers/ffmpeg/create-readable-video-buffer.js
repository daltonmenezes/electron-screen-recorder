const stream = require('stream')

module.exports = function createReadableVideoBuffer () {
  const readableVideoBuffer = new stream.PassThrough()
  
  readableVideoBuffer.write(window.videoBuffer)
  readableVideoBuffer.end()
  readableVideoBuffer.destroy()

  return readableVideoBuffer
}