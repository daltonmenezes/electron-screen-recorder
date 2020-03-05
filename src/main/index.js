const { app, BrowserWindow } = require('electron')
const path = require('path')

require('./lib/events')

if (require('electron-squirrel-startup')) {
    app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 625,
    height: 556,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile(
    path.resolve(
      __dirname,
      '..',
      'renderer',
      'index.html'
    )
  )

  // mainWindow
  //   .webContents
  //   .openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
  }
})