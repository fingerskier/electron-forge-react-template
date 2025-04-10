const { app, BrowserWindow, ipcMain } = require('electron')


module.exports = function() {
  ipcMain.handle('dialog:openFile', async () => {
    return 'opening file <test>'
  })
  
  
  ipcMain.handle('dialog:ghibbet', async () => {
    
    return 'ghibbeting <test>'
  })
  
  
  ipcMain.handle('serialport:list', async () => {
    const SerialPort = require('serialport')
    const result = SerialPort.list()
    return result
  })
}