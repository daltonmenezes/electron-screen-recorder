document
  .getElementById('startBtn')
  .addEventListener('click', ({ target }) => {
    const stopBtn = document.getElementById('stopBtn')
    const saveBtn = document.getElementById('saveBtn')
    const videoSelectBtn = document.getElementById('videoSelectBtn')

    stopBtn.removeAttribute('disabled')
    saveBtn.setAttribute('disabled', 'disabled')
    videoSelectBtn.setAttribute('disabled', 'disabled')
    target.setAttribute('disabled', 'disabled')
    
    window.mediaRecorder.start()
  
    target
      .classList
      .add('is-danger')
    
    target.textContent = 'Recording'
  })