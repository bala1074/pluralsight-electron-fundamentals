// console.log('in renderer');

const electron = require('electron')

const ipc = electron.ipcRenderer          // we need to import ipcRenderer

document.getElementById('start').addEventListener('click', _ => {
//  console.log("start clicked!");
  ipc.send('countdown-start')           // sending new event to main module
})

// listening for the countdown event. coundown event will receive
ipc.on('countdown', (evt, count) => {
  // when we receive the event we want to display it on the screen:
  document.getElementById('count').innerHTML = count
})
