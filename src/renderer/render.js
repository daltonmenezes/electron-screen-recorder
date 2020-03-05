const getVideoSources = require('./lib/get-video-resources')
const clickEvents = require('./lib/events/click')

window.mediaRecorder

const videoSelectBtn = document.getElementById('videoSelectBtn')

videoSelectBtn.onclick = getVideoSources