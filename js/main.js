
// -----------------------< Variables>-------------------------------

let sketchesNextBtn = document.querySelector(".sketchesBtn-next");
let sketchesPrevBtn = document.querySelector(".sketchesBtn-prev");

let coverArtPrevBtn = document.querySelector(".coverArtBtn-prev");
let coverArtNextBtn = document.querySelector(".coverArtBtn-next");

let OWPrevBtn = document.querySelector(".owBtn-prev");
let OWNextBtn = document.querySelector(".owBtn-next");

let moviePrevBtn = document.querySelector(".movieBtn-prev");
let movieNextBtn = document.querySelector(".movieBtn-next");


let sketchesImage = document.querySelector(".sketches__img");
let coverArtImg = document.querySelector(".cover-art__img");
let offWhiteImg = document.querySelector(".off-white__img");
let movieImg = document.querySelector(".movie__img");



// -----------------------< DOM CONTENT LOADED >-------------------------------

document.addEventListener("DOMContentLoaded", () => {


// -----------------------< Image References >-------------------------------

let imageData = [
    [
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/owen-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/vinny-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/ninja-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/extra-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/broly-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/gogeta-pencil-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/gogeta-color-redone.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/digitized/future-trunks-color-redone.jpg" }
    ],
    [
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/Nike x Off White ipad mockup.png" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/nike off white iphone mockup 2.png" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/nike x off white iphone mockup.png" }
    ],
    [
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/12 AM COVER.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/ETERNITY COVER FINAL EP2.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/FLASHBACK COVER FINISHED.jpg" },
        { src: "https://poro0002.github.io/mad9013-project-portfolio/content/FAULTED COVER.jpg" }
    ],
    [
        {src: "https://poro0002.github.io/mad9013-project-portfolio/content/dune-screen-4.png"},
        {src: "https://poro0002.github.io/mad9013-project-portfolio/content/batman mockup.png"}
    ]
];

// -----------------------< Indexes >-------------------------------

    let currentIndexSketches = 0;
    let currentIndexOffWhite = 0;
    let currentIndexCoverArt = 0;
    let currentIndexMoviePoster = 0;

// -----------------------< Update Functions >-------------------------------

    function updateSketches() {
        sketchesImage.src = imageData[0][currentIndexSketches].src;

        console.log("update sketches function ran")
        console.log(imageData[0][currentIndexSketches].src)
    }

    function updateOffWhite() {
        offWhiteImg.src = imageData[1][currentIndexOffWhite].src;
    }

    function updateCoverArt() {
        coverArtImg.src = imageData[2][currentIndexCoverArt].src;
    }

    function updateMoviePoster() {
        coverArtImg.src = imageData[3][currentIndexMoviePoster].src;
    }



   // -----------------------< Sketches >-------------------------------

    sketchesNextBtn.addEventListener('click', () => {
        console.log("sketches Next Button clicked");
        currentIndexSketches++;
        if (currentIndexSketches >= imageData[0].length) {
            currentIndexSketches = 0;
        }
        updateSketches();
    });

    sketchesPrevBtn.addEventListener('click', () => {
        console.log("sketches prev Button clicked");
        currentIndexSketches--;
        if (currentIndexSketches < 0) {
            currentIndexSketches = imageData[0].length - 1;
        }
        updateSketches();
    });

 // -----------------------< Off White >-------------------------------

    OWNextBtn.addEventListener('click', () => {
        currentIndexOffWhite++;
        if (currentIndexOffWhite >= imageData[1].length) {
            currentIndexOffWhite = 0;
        }
        updateOffWhite();
    });

    OWPrevBtn.addEventListener('click', () => {
        currentIndexOffWhite--;
        if (currentIndexOffWhite < 0) {
            currentIndexOffWhite = imageData[1].length - 1;
        }
        updateOffWhite();
    });

// -----------------------< Movie Posters >-------------------------------

movieNextBtn.addEventListener('click', () => {
    currentIndexMoviePoster++;
    if (currentIndexMoviePoster >= imageData[3].length) {
        currentIndexMoviePoster = 0;
    }
    updateMoviePoster();
});

moviePrevBtn.addEventListener('click', () => {
    currentIndexMoviePoster--;
    if (currentIndexMoviePoster < 0) {
        currentIndexMoviePoster = imageData[3].length - 1;
    }
    updateMoviePoster();
});


// -----------------------< Cover Art >-------------------------------

    coverArtNextBtn.addEventListener('click', () => {
        currentIndexCoverArt++;
        if (currentIndexCoverArt >= imageData[2].length) {
            currentIndexCoverArt = 0;
        }
        updateCoverArt();
    });

    coverArtPrevBtn.addEventListener('click', () => {
        currentIndexCoverArt--;
        if (currentIndexCoverArt < 0) {
            currentIndexCoverArt = imageData[2].length - 1;
        }
        updateCoverArt();
    });



    // called functions to update

    updateOffWhite();
    updateSketches();
    updateCoverArt();

  
});
