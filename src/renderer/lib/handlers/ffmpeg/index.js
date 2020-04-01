const { start, end } = require('../../events/export')
const loadFfmpeg = require('./create-ffmpeg')
const createReadableVideoBuffer = require('./create-readable-video-buffer')

exports.createVideoFile = async function (filePath) {
  const ffmpeg = loadFfmpeg()
  const readableVideoBuffer = createReadableVideoBuffer()

  await ffmpeg
    .input(readableVideoBuffer)
    .output(filePath)
    .withNoAudio()
    .on('start', start)
    .on('end', end)
    .run()    
}