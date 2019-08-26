const electron = require('electron');
const { BrowserWindow, app, Tray } = electron

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
      resizable: false,
      frame: false,
      show: false,
      height: 420,
      width: 270,
      transparent: true,
      alwaysOnTop: true,
      webPreferences: {
          nodeIntegration: true
      }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  const iconName = 'sun-iconcccplus.png';
  const iconPath = path.join(__dirname, `../src/assets/${iconName}`)
  tray = new Tray(iconPath);
  tray.on('click', (e, bounds) => {
      //click event bounds
      const { x, y } = bounds
      //mainWindow width and height
      const { width, height } = mainWindow.getBounds()

      if (mainWindow.isVisible()) {
          mainWindow.hide()
      } else {
          mainWindow.setBounds({
              x: x - width/2,
              y: y - height,
              width: width,
              height: height
          })
          mainWindow.show()
      }
  })
}


app.on('ready', () => {
    createWindow();
    }
  );

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
