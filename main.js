const { app, BrowserWindow } = require("electron");

require("dotenv").config();

function createWindow() {
  const window = new BrowserWindow({
    width: process.env.WINDOW_WIDTH || 800,
    height: process.env.WINDOW_HEIGHT || 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("index.html");
}

app.whenReady().then(createWindow);
