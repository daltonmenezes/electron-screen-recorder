const { invokeContextMenu } = require('./events/ipc')

module.exports = async function selectOutputFormat() {
  invokeContextMenu([
    { id: 'mp4', name: 'mp4' },
    { id: 'webm', name: 'webm' },
    { id: 'gif', name: 'gif' },
    { id: 'webp', name: 'webp' },
    { id: 'apng', name: 'apng' },
  ], 'output')
}