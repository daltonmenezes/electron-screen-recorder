const { ipcMain, Menu } = require('electron')

ipcMain.handle('context-menu', async (event, sources) => {
  const source = JSON.parse(sources)

  const contextMenu =
    Menu.buildFromTemplate(
      source.data.map(item => ({
        label: item.name,
        click: () =>
          source.type === 'input'
            ? event.sender.send('select-source', item)
            : event.sender.send('select-output', item)
      }))
  )
  contextMenu.popup()
})