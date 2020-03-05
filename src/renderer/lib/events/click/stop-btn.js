document
  .getElementById('stopBtn')
  .addEventListener('click', ({ target }) => {
    const startBtn = document.getElementById('startBtn')
    
    window.mediaRecorder.stop()
    
    startBtn
      .classList
      .remove('is-danger')
    
    startBtn.textContent = 'Start'
  })