const { createVideoFile } = require('./ffmpeg')

let recordedChunks = []

exports.createVideoFile = createVideoFile

exports.handleDataAvailable = function (e) {
  recordedChunks.push(e.data)
}

exports.handleStop = async function (e) {
  const blob =
    new Blob(
      recordedChunks,
      { type: 'video/webm; codecs=vp9' }
    )
  
  recordedChunks = []
  
  window.videoBuffer = Buffer.from(
    await blob.arrayBuffer()
  )
}