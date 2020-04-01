const { path: ffmpegPath } = require('@ffmpeg-installer/ffmpeg')
const fluentFfmpeg = require('fluent-ffmpeg')

module.exports = function loadfMpeg () {
  const ffpmeg = new fluentFfmpeg()
  
  ffpmeg.setFfmpegPath(ffmpegPath)

  return ffpmeg
}