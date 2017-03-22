const electron = require('electron')

const { app, BrowserWindow } = electron

let mainWindow = null

app.on('ready', _ => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 725,
    resizeable: false
  })

  mainWindow.loadURL(`file://${__dirname}/capture.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', _ => {
    mainWindow = null
  })
})
