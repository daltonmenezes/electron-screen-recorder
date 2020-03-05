const { handleDataAvailable, handleStop } = require('./handlers')

const videoSelectBtn = document.getElementById('videoSelectBtn')
const videoElement = document.querySelector('video')

module.exports = async function selectSource(source) {
  videoSelectBtn.textContent = source.name

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: source.id
      }
    }
  }

  const stream =
    await navigator
      .mediaDevices
      .getUserMedia(constraints)

  videoElement.srcObject = stream
  videoElement.play()

  const options = { mimeType: 'video/webm; codecs=vp9' }

  window.mediaRecorder = new MediaRecorder(stream, options)
  window.mediaRecorder.ondataavailable = handleDataAvailable
  window.mediaRecorder.onstop = handleStop
}