const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

app.on('ready', _ => {
//  console.log("ready");
  new BrowserWindow()

  const name = electron.app.getName()
  const template = [
    {
      label: name,
      submenu: [{
        label: `About ${name}`,
        click: _ => {
          console.log('submenu clicked');
        },
        role: 'about'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        click: _ => { app.quit() },
        accelerator: 'Cmd+Q'
      }]
    }
  ]

  const menu = Menu.buildFromTemplate(template)       // build menu from template
  Menu.setApplicationMenu(menu)                       // set menu

})
