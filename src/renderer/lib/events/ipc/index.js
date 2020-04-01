const { ipcRenderer } = require('electron')
const selectSource = require('../../select-source')
const selectOutput = require('../../select-output')

ipcRenderer.on('select-source', (event, source) =>
  selectSource(source)
)

ipcRenderer.on('select-output', (event, source) =>
  selectOutput(source)
)

exports.invokeContextMenu = (data, type) => {
  ipcRenderer.invoke('context-menu', JSON.stringify({ data, type }))
}