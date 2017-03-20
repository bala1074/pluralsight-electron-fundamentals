const electron = require('electron')
const path = require('path')

const { app, Menu, Tray } = electron

app.on('ready', _ => {

  const tray = new Tray(path.join('src', 'trayIcon.png'))

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Wow',
      click: _ => console.log('Wow clicked')
    },
    {
      label: 'Awesome',
      click: _ => console.log('Awesome clicked')
    }
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('My great app')                 // equals to 'alt='
})
