document
  .getElementById('startBtn')
  .addEventListener('click', ({ target }) => {
    const saveBtn = document.getElementById('saveBtn')
    
    saveBtn.setAttribute('disabled', 'disabled')
    
    window.mediaRecorder.start()
  
    target
      .classList
      .add('is-danger')
    
    target.textContent = 'Recording'
  })