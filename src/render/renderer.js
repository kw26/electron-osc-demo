// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')

const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    const text = document.getElementById('osctext')
    const msg = text.value
    ipcRenderer.send('ocs-msg', msg)
    console.log('osc sent:', msg)
})