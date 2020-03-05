const { ipcMain, Menu } = require('electron')

ipcMain.handle('context-menu', async (event, sources) => {
  const contextMenu =
    Menu.buildFromTemplate(
      sources.map(source => ({
        label: source.name,
        click: () => event.sender.send('select-source', source)
      }))
  )

  contextMenu.popup()
})