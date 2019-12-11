const { ipcRenderer, remote } = require('electron');
window.ipcRenderer = ipcRenderer;
window.remote = remote;
const { dialog } = require('electron').remote;
window.dialog = dialog;
