const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		resizable: false
	})

	mainWindow.loadURL(`file://${__dirname}/index.html`)
})
