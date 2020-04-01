const { desktopCapturer } = require('electron')
const { invokeContextMenu } = require('./events/ipc')

module.exports = async function getVideoSources() {
  const inputSources =
    await desktopCapturer.getSources({
      types: ['screen', 'window']
    })

  invokeContextMenu(inputSources, 'input')
}