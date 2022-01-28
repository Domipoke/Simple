// main.js

// Modules to control application life and create native browser window
const e = require('electron')
const app = e.app
const BrowserWindow = e.BrowserWindow
const path = require('path')

function createWindow () {
  // Create the browser window.
  var defW = 16
  var defH = 39
  const mainWindow = new BrowserWindow({
    width: 800+defW,
    minWidth: 800+defW,
    maxWidth: 800+defW,
    height: 600+defH,
    minHeight:600+defH,
    maxHeight: 600+defH,
    webPreferences: {
      nodeIntegration: true      
      //preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
    frame: true,
    titleBarOverlay: false,
    titleBarStyle: "default",
    show:true,
    title: "Simple",
  })

  // and load the index.html of the app.
  mainWindow.loadFile(__dirname+'/src/html/browser.html')
  //mainWindow.setBounds({width: 800, height:600})
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.