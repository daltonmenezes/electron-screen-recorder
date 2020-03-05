const { desktopCapturer, ipcRenderer } = require('electron')

module.exports = async function getVideoSources() {
  const inputSources =
    await desktopCapturer.getSources({
      types: ['window', 'screen']
    })
  
  ipcRenderer.invoke('context-menu', inputSources)
}