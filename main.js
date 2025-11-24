const { app, BrowserWindow } = require('electron');
const path = require('path');
const serve = require('electron-serve');

const loadURL = serve({ directory: 'out' });

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    titleBarStyle: 'hiddenInset', // Mac-style title bar
    backgroundColor: '#000000',
  });

  // Load the static export
  loadURL(mainWindow);
  
  // Open external links in browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
