const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 700,
		resizable: false,
		hasShadow: true,
		opacity: 0.92,
		backgroundColor: '#101828',
		x: 80,
		y: 22,
		autoHideMenuBar: true
	})

	mainWindow.loadURL(`file://${__dirname}/index.html`)
})
