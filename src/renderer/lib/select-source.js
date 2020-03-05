const { dialog } = require('electron').remote
const { writeFile } = require('fs')

const videoSelectBtn = document.getElementById('videoSelectBtn')
const videoElement = document.querySelector('video')

const recordedChunks = []

function handleDataAvailable(e) {
  console.log('video data available')
  recordedChunks.push(e.data)
}

async function handleStop(e) {
  const blob =
    new Blob(
      recordedChunks,
      { type: 'video/webm; codecs=vp9' }
    )

  const buffer =
    Buffer.from(
      await blob.arrayBuffer()
    )

  const { filePath } =
    await dialog.showSaveDialog({
      buttonLabel: 'Save video',
      defaultPath: `vid-${Date.now()}.webm`
    })

  if (filePath) {
      writeFile(
        filePath,
        buffer,
        () => console.log('video saved successfully!')
      )
  }
}

module.exports = async function selectSource(source) {
  videoSelectBtn.innerText = source.name

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