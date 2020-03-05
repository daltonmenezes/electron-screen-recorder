const getVideoSources = require('./lib/get-video-resources')

window.mediaRecorder

const startBtn = document.getElementById('startBtn')

startBtn.onclick = e => {
  window.mediaRecorder.start()
  
  startBtn
    .classList
    .add('is-danger')
  
  startBtn.innerText = 'Recording'
}

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