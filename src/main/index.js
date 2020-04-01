const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const isDev = process.env.MODE === 'development'

require('./lib/events')

if (require('electron-squirrel-startup')) {
    app.quit()
}

Menu.setApplicationMenu(null)

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

  if (isDev) {
      mainWindow
        .webContents
        .openDevTools()
  }
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