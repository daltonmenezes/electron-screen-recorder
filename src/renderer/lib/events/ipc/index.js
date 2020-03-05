const { ipcRenderer } = require('electron')
const selectSource = require('../../select-source')

ipcRenderer.on('select-source', (event, source) =>
  selectSource(source)
)

exports.invokeContextMenu = data => {
  ipcRenderer.invoke('context-menu', JSON.stringify(data))
}