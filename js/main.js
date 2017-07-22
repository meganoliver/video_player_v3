// Global Variables
const video = document.getElementById('my-video');
const captions = document.querySelectorAll('.text span');
const captionDiv = document.querySelector('.text');

// Highlight Text as video progresses:

video.addEventListener('timeupdate', () =>{
  for(let i = 0; i < captions.length; i += 1) {
    let vidTime = video.getCurrentTime();
    let captionStartTime = captions[i].getAttribute('data-start');
    let captionEndTime = captions[i].getAttribute('data-end');

    if(vidTime >= captionStartTime && vidTime <= captionEndTime) {
      captions[i].className = 'color-change';
    } else {
      captions[i].className = '';
    }
  }
});

// Jump to video time based on text click:
captionDiv.addEventListener('click', (e) => {
  let captionTime = e.target.getAttribute('data-start');
  if(captionTime) {
    video.setCurrentTime(captionTime);
  }
});
