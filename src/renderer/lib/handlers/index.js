const { dialog } = require('electron').remote
const { writeFile } = require('fs')

const recordedChunks = []

exports.handleDataAvailable = function (e) {
  console.log('video data available')
  recordedChunks.push(e.data)
}

exports.handleStop = async function (e) {
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