const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

const opening =
    document.getElementById("opening");

const memories =
    document.getElementById("memories");

const timeline =
    document.getElementById("timeline");

const photoWall =
    document.getElementById("photoWall");

const wishes =
    document.getElementById("wishes");

const videos =
    document.getElementById("videos");

const letter =
    document.getElementById("letter");

const finalSection =
    document.getElementById("final");

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");


let finalTimer = null;
let musicWasPlayingBeforeVideo = false;


/* Floating elements */

function createFloatingElements() {

    const container =
        document.getElementById("floatingElements");

    const symbols = [
        "❤️",
        "✨",
        "🎈",
        "⭐",
        "💕",
        "🌸"
    ];

    for (let i = 0; i < 25; i++) {

        const item =
            document.createElement("div");

        item.className =
            "floating-item";

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        item.style.left =
            Math.random() * 100 + "%";

        item.style.fontSize =
            15 + Math.random() * 20 + "px";

        item.style.animationDuration =
            8 + Math.random() * 8 + "s";

        item.style.animationDelay =
            Math.random() * 8 + "s";

        container.appendChild(item);

    }

}

createFloatingElements();


/* Music */

function playMusic() {

    birthdayMusic.play()
        .then(() => {

            musicBtn.textContent = "🎵";

        })
        .catch(() => {

            musicBtn.textContent = "🔇";

        });

}


function pauseMusic() {

    birthdayMusic.pause();

    musicBtn.textContent = "🔇";

}


function toggleMusic() {

    if (birthdayMusic.paused) {

        playMusic();

    } else {

        pauseMusic();

    }

}


/* Hide sections */

function hideAllSections() {

    memories.classList.add("hidden-section");

    timeline.classList.add("hidden-section");

    photoWall.classList.add("hidden-section");

    wishes.classList.add("hidden-section");

    videos.classList.add("hidden-section");

    letter.classList.add("hidden-section");

    finalSection.classList.add("hidden-section");

}


/* Memories */

function openMemories() {

    clearTimeout(finalTimer);

    opening.style.display = "none";

    hideAllSections();

    memories.classList.remove("hidden-section");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Timeline */

function openTimeline() {

    clearTimeout(finalTimer);

    hideAllSections();

    timeline.classList.remove("hidden-section");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Photo wall */

function openPhotoWall() {

    clearTimeout(finalTimer);

    hideAllSections();

    photoWall.classList.remove("hidden-section");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Wishes */

function openWishes() {

    clearTimeout(finalTimer);

    hideAllSections();

    wishes.classList.remove("hidden-section");

    stopAllWishVideos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


function backFromWishes() {

    clearTimeout(finalTimer);

    stopAllWishVideos();

    hideAllSections();

    memories.classList.remove("hidden-section");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Video wall */

function openVideos() {

    clearTimeout(finalTimer);

    hideAllSections();

    videos.classList.remove("hidden-section");

    stopAllVideoWallVideos();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Video wall controls */

const videoWallVideos =
    document.querySelectorAll(
        ".video-wall-item video"
    );


videoWallVideos.forEach((video) => {

    video.addEventListener("play", () => {

        musicWasPlayingBeforeVideo =
            !birthdayMusic.paused;

        pauseMusic();

        videoWallVideos.forEach((otherVideo) => {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });

    });


    video.addEventListener("ended", () => {

        if (musicWasPlayingBeforeVideo) {

            playMusic();

        }

    });

});


function stopAllVideoWallVideos() {

    videoWallVideos.forEach((video) => {

        video.pause();

        video.currentTime = 0;

    });

}


/* Wish videos */

const wishVideos =
    document.querySelectorAll(
        ".wish-video video"
    );


wishVideos.forEach((video) => {

    video.addEventListener("play", () => {

        musicWasPlayingBeforeVideo =
            !birthdayMusic.paused;

        pauseMusic();

        wishVideos.forEach((otherVideo) => {

            if (otherVideo !== video) {

                otherVideo.pause();

            }

        });

    });


    video.addEventListener("ended", () => {

        if (musicWasPlayingBeforeVideo) {

            playMusic();

        }

    });

});


function stopAllWishVideos() {

    wishVideos.forEach((video) => {

        video.pause();

        video.currentTime = 0;

    });

}


/* Birthday book */

function openLetter() {

    clearTimeout(finalTimer);

    hideAllSections();

    letter.classList.remove("hidden-section");

    stopAllVideoWallVideos();

    stopAllWishVideos();

    playMusic();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const book =
        document.getElementById(
            "birthdayBook"
        );

    book.classList.remove("open");


    setTimeout(() => {

        book.classList.add("open");

    }, 700);


    finalTimer = setTimeout(() => {

        openFinalCelebration();

    }, 7000);

}


/* Back */

function backToMemories() {

    clearTimeout(finalTimer);

    stopAllVideoWallVideos();

    stopAllWishVideos();

    hideAllSections();

    memories.classList.remove("hidden-section");

    const book =
        document.getElementById(
            "birthdayBook"
        );

    if (book) {

        book.classList.remove("open");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    playMusic();

}


/* Final */

function openFinalCelebration() {

    clearTimeout(finalTimer);

    hideAllSections();

    finalSection.classList.remove("hidden-section");

    stopAllVideoWallVideos();

    stopAllWishVideos();

    playMusic();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    startConfetti();

}


/* Confetti */

function startConfetti() {

    const container =
        document.getElementById("confetti");

    container.innerHTML = "";

    const symbols = [
        "🎉",
        "✨",
        "❤️",
        "⭐",
        "🎈"
    ];

    for (let i = 0; i < 60; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            14 + Math.random() * 18 + "px";

        piece.style.animationDuration =
            3 + Math.random() * 5 + "s";

        piece.style.animationDelay =
            Math.random() * 4 + "s";

        container.appendChild(piece);

    }

}


/* Photo viewer */

const allPhotos =
    document.querySelectorAll(
        ".memory-image img, " +
        ".wall-photo img, " +
        ".timeline-photo img, " +
        ".book-photo img"
    );


allPhotos.forEach((image) => {

    image.addEventListener("click", () => {

        viewerImage.src =
            image.src;

        photoViewer.classList.add("show");

        pauseMusic();

    });

});


function closePhotoViewer() {

    photoViewer.classList.remove("show");

    viewerImage.src = "";

    playMusic();

}


photoViewer.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            photoViewer
        ) {

            closePhotoViewer();

        }

    }
);


/* Escape */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (
                photoViewer.classList.contains(
                    "show"
                )
            ) {

                closePhotoViewer();

            }

        }

    }
);