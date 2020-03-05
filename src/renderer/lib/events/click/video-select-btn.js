const getVideoSources = require('../../get-video-resources')

document
  .getElementById('videoSelectBtn')
  .addEventListener('click', getVideoSources)