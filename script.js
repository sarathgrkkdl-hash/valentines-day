document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       BACKGROUND SLIDESHOW (FADED)
    =============================== */
    const bgLayer = document.querySelector(".bg-slideshow");

    const backgrounds = [
      "./images/beach.jpeg",
      "./images/bg1.jpeg",
      "./images/bg22.jpg",
      "./images/bg3.jpeg",
     
    ];

    let bgIndex = 0;

    function changeBackground() {
        bgLayer.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
        bgIndex = (bgIndex + 1) % backgrounds.length;
    }

    changeBackground();
    setInterval(changeBackground, 2000);



    /* ===============================
       EXISTING LOGIC
    =============================== */
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("no");
    const image = document.getElementById("valentineImage");
    const heartsContainer = document.querySelector(".hearts-container");
    const modal = document.getElementById("loveModal");
    const closeModal = document.getElementById("closeModal");


    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💘";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }
    setInterval(createHeart, 100);

    function explodeHearts(x, y) {
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.className = "heart-burst";
            heart.innerText = "🌹";

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 120 + 40;

            heart.style.left = x + "px";
            heart.style.top = y + "px";
            heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
            heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }
    }

   yesButton.addEventListener("click", (e) => {
    explodeHearts(e.clientX, e.clientY);

    setTimeout(() => {
        modal.style.display = "block";
    }, 1500);
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
    const noTexts = [
        "Are you sure CHANDRUU..?",
        "Please 🥺 CHIKKU..",
        "Pookie Nooooo",
        "Don't do this",
        "Please click YES"
    ];

    const images = [
        "https://media.tenor.com/BP70qe8X0J8AAAAe/crycat-crying-cat.png",
        "https://i.pinimg.com/736x/cb/d8/3b/cbd83b534a315e809a9da2b8cd3ac3bf.jpg",
        "https://m.media-amazon.com/images/I/61BJCGItjvL._AC_UF1000,1000_QL80_.jpg",
        "https://i.pinimg.com/236x/f1/d7/68/f1d7682721bd99e2b7e11f5e6da6de10.jpg"
    ];

    noButton.addEventListener("click", () => {
        noButton.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
        noButton.style.left = Math.random() * 300 + "px";
        noButton.style.top = Math.random() * 100 + "px";
        image.src = images[Math.floor(Math.random() * images.length)];
    });
});
