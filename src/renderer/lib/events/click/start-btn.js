document
  .getElementById('startBtn')
  .addEventListener('click', ({ target }) => {
    window.mediaRecorder.start()
  
    target
      .classList
      .add('is-danger')
    
    target.textContent = 'Recording'
  })