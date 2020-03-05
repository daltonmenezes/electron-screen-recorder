const getVideoSources = require('./lib/get-video-resources')
const clickEvents = require('./lib/events/click')

window.mediaRecorder

const stopBtn = document.getElementById('stopBtn')

stopBtn.onclick = e => {
  window.mediaRecorder.stop()
  
  startBtn
    .classList
    .remove('is-danger')
  
  startBtn.innerText = 'Start'
}

const videoSelectBtn = document.getElementById('videoSelectBtn')

videoSelectBtn.onclick = getVideoSources