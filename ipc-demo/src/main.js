const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain                    // we need to import ipcMain

const windows = []

app.on('ready', _ => {

  [1,2,3].forEach(_ => {

      let win = new BrowserWindow({
        height: 400,
        width: 400
      })

      win.loadURL(`file://${__dirname}/countdown.html`)

      win.on('closed', _ => {
        console.log('closed!');
        mainWindow = null
      })

      windows.push(win)             // ?

  })
})

// main module must listen for coundown-start and capture it
ipc.on('countdown-start', _ => {
  //console.log("main module caught it!");
  // we need to call coundown, caught the count and send it back to the renderer module
  countdown(count => {
      console.log('count', count)

      windows.forEach(win => {
          win.webContents.send('countdown', count)     // webContents is event emitor instance
      })
  })
})
