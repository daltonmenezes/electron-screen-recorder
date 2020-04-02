document
  .getElementById('startBtn')
  .addEventListener('click', ({ target }) => {
    const saveBtn = document.getElementById('saveBtn')
    const videoSelectBtn = document.getElementById('videoSelectBtn')

    saveBtn.setAttribute('disabled', 'disabled')
    videoSelectBtn.setAttribute('disabled', 'disabled')
    
    window.mediaRecorder.start()
  
    target
      .classList
      .add('is-danger')
    
    target.textContent = 'Recording'
  })