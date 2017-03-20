const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain                    // we need to import ipcMain

//let mainWindow
const windows = []

app.on('ready', _ => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 400
  })


  mainWindow.loadURL(`file://${__dirname}/countdown.html`)

// countdown()

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

mainWindow.on('closed', _ => {
    console.log('closed!');
    mainWindow = null
  })

})

// main module must listen for coundown-start and capture it
ipc.on('countdown-start', _ => {
  //console.log("main module caught it!");
// we need to call coundown, caught the count and send it back to the renderer module
  countdown(count => {
      console.log('count', count)
      mainWindow.webContents.send('countdown', count)     // webContents is event emitor instance
  })
})
