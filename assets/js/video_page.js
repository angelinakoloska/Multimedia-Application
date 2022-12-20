  // Get the video
    var video = document.querySelector("#video");

    // play and pause button
    document.querySelector('#playPauseBtn').addEventListener('click', () => {
        if (video.paused) {
            video.play();
            // Adding HTML code to get the pause icon
            playPauseBtn.innerHTML = `<img src="./assets/media/icons/pause-icon.svg" alt="pause">`;
        } else {
            video.pause();
             // Adding HTML code to get the play icon
            playPauseBtn.innerHTML = `<img src="./assets/media/icons/play-icon.svg" alt="play">`;
            }
        });

    // back to start button
    document.querySelector('#backToStartBtn').addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        video.load();
        // The icon will change to the play icon instead of pause
        playPauseBtn.innerHTML = `<img src="./assets/media/icons/play-icon.svg">`;
    });

    // rewind button
    document.querySelector('#rewindBtn').addEventListener('click', () => {
        // Finds the current time of the video and takes away 2 seconds of the video - as a result it will rewind by two seconds
        video.currentTime = video.currentTime - 2;
    });

    // fast forward button
    document.querySelector('#fastForwardBtn').addEventListener('click', () => {
        // Finds the current time of the video, and it will add 2 seconds - as a result it will forward the video by two seconds
        video.currentTime = video.currentTime + 2;
    });
    
    // loop button
    var loopBtn = document.querySelector("#loopBtn");
    loopBtn.addEventListener('click', loop);
    function loop() {
        if (video.loop == true) {
            // The loop button is inactive
            video.loop = false;
            loopBtn.style.border = '0px';
        } else {
            // The loop button is active
            video.loop = true;
            loopBtn.style.border = '4.5px solid darkgreen';
        }
    }



    // Description text
    var info = document.querySelector('#info');
    info.innerHTML = 'Dette er video som viser min typiske arbeidsdag ☕️☕️';