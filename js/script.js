
const openButton = document.getElementById("openButton");
const welcomeContainer = document.querySelector(".welcome-container");

// ========================================
// YOUTUBE MUSIC PLAYER
// ========================================

let youtubePlayer = null;
let musicStartRequested = false;

function initializeYouTubePlayer() {

    // Mencegah player dibuat lebih dari satu kali
    if (youtubePlayer || !window.YT || !window.YT.Player) {
        return;
    }

    youtubePlayer = new YT.Player("youtubePlayer", {
        height: "200",
        width: "300",

        videoId: "nSDgHBxUbVQ",

        playerVars: {
            autoplay: 0,
            controls: 1,
            playsinline: 1,
            rel: 0
        },

        events: {

            onReady: function (event) {

                // Jika tombol Open sudah diklik sebelumnya,
                // coba mulai musik ketika player siap.
                if (musicStartRequested) {
                    event.target.playVideo();
                }

            },

            onStateChange: function (event) {

                // Musik dibiarkan berjalan saat halaman berpindah.
                // Tidak ada perintah stop atau restart di sini.

            }

        }
    });

}

// Callback resmi YouTube IFrame API
window.onYouTubeIframeAPIReady = initializeYouTubePlayer;

// Mengantisipasi API selesai dimuat sebelum script.js
if (window.YT && window.YT.Player) {
    initializeYouTubePlayer();
}

// Fungsi untuk memulai musik
function startMusic() {

    musicStartRequested = true;

    if (!youtubePlayer) {
        return;
    }

    // Jangan memulai ulang jika musik sedang berjalan
    if (youtubePlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
        youtubePlayer.playVideo();
    }

}


// ========================================
// TRANSITION ANTAR HALAMAN
// ========================================

function changePage(callback) {
    welcomeContainer.classList.add("fade-out");

    setTimeout(function () {
        callback();

        welcomeContainer.classList.remove("fade-out");
        welcomeContainer.classList.add("fade-in");

        setTimeout(function () {
            welcomeContainer.classList.remove("fade-in");
        }, 800);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);
}

// ========================================
// HALAMAN HAPPY BIRTHDAY
// ========================================

function showBirthdayPage() {
    welcomeContainer.classList.remove(
        "memory-page",
        "letter-page",
        "wishes-page",
        "surprise-page"
    );

    welcomeContainer.innerHTML = `
        <div class="top-label">
            ♡ A LITTLE MESSAGE FOR YOU ♡
        </div>

        <div class="main-illustration">
            <span>🍓</span>
            <span class="main-cake">💗</span>
            <span>🍵</span>
        </div>

        <p class="small-heading">
            SPECIAL DAY • 23 JANUARY 2027
        </p>

        <h1>
            Happy Birthday,<br>
            <span>Kak Aulia!</span>
        </h1>

        <div class="divider">
            ♡ ───── ♡ ───── ♡
        </div>

        <h2>Today is all about you!</h2>

        <p class="welcome-description">
            A little world full of love,
            memories, and happiness
            has been prepared just for you.
        </p>

        <p class="little-message">
            Are you ready for your little surprise? 🥺
        </p>

        <button class="open-button" id="nextButton">
            Let's Continue <span>♡</span>
        </button>

        <p class="bottom-note">
            made with love, just for you
        </p>
    `;

    document.getElementById("nextButton").addEventListener("click", function () {
        changePage(showMemoryPage);
    });
}

// ========================================
// HALAMAN OUR LITTLE MEMORIES
// ========================================

function showMemoryPage() {
    welcomeContainer.classList.remove(
        "letter-page",
        "wishes-page",
        "surprise-page"
    );

    welcomeContainer.classList.add("memory-page");

    welcomeContainer.innerHTML = `
        <div class="top-label">
            A COLLECTION OF OUR LITTLE MOMENTS
        </div>

        <p class="small-heading">
            CHAPTER 01
        </p>

        <h1 class="memory-title">
            Our Little <span>Memories</span>
        </h1>

        <p class="memory-description">
            Every picture tells a story,
            and every story is a little piece of us. ♡
        </p>

        <div class="memory-divider">
            ♡ ───── ♡ ───── ♡
        </div>

        <div class="memory-grid">

            <div class="polaroid">
                <img src="assets/images/memory-1.jpg" alt="Our memory 1">
                <p>Memory One ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-2.jpg" alt="Our memory 2">
                <p>Memory Two ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-3.jpg" alt="Our memory 3">
                <p>Memory Three ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-4.jpg" alt="Our memory 4">
                <p>Memory Four ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-5.jpg" alt="Our memory 5">
                <p>Memory Five ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-6.jpg" alt="Our memory 6">
                <p>Memory Six ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-7.jpg" alt="Our memory 7">
                <p>Memory Seven ♡</p>
            </div>

            <div class="polaroid">
                <img src="assets/images/memory-8.jpg" alt="Our memory 8">
                <p>Memory Eight ♡</p>
            </div>

        </div>

        <p class="memory-footer">
            Eight little pictures, countless beautiful memories. 💗
        </p>

        <div class="memory-navigation">
            <button class="back-button" id="backButton">
                ← Back
            </button>

            <button class="open-button" id="continueButton">
                Continue <span>♡</span>
            </button>
        </div>

        <p class="bottom-note">
            made with love, just for you
        </p>
    `;

    document.getElementById("backButton").addEventListener("click", function () {
        changePage(showBirthdayPage);
    });

    document.getElementById("continueButton").addEventListener("click", function () {
        changePage(showLetterPage);
    });
}

// ========================================
// HALAMAN A LETTER FROM MY HEART
// ========================================

function showLetterPage() {
    welcomeContainer.classList.remove(
        "memory-page",
        "wishes-page",
        "surprise-page"
    );

    welcomeContainer.classList.add("letter-page");

    welcomeContainer.innerHTML = `
        <div class="top-label">
            ♡ A LITTLE LETTER FROM MY HEART ♡
        </div>

        <p class="small-heading">
            CHAPTER 02
        </p>

        <h1 class="letter-title">
            A Letter <span>For You</span>
        </h1>

        <div class="letter-decoration">
            💌
        </div>

        <div class="letter-paper">

            <div class="letter-date">
                January 23, 2001
            </div>

            <h2>
                To My Dearest Kakak Aulia Maharani Azzahra ♡
            </h2>

            <div class="letter-content">

                <p>
                    Happy birthday to my one and only favorite sister! 💗
                </p>

                <p>
                    Selamat ulang tahun, Kakak sayanggg! Semoga kakak selalu sehat, panjang umur, bahagia, dilancarkan semua urusannya, dimudahkan rezekinya, dan semua hal baik selalu datang menghampiri kakak.
                </p>

                <p>
                    Atha berdoa semoga semua impian dan keinginan kakak bisa tercapai satu per satu. Semoga kakak selalu punya banyak alasan untuk tersenyum dan nggak pernah kekurangan kasih sayang.
                </p>

                <p>
                    Terima kasih sudah menjadi kakak perempuan pertama sekaligus satu-satunya tempat Atha menjadi adik kecilmu. Hehehe. Walaupun Atha kadang nyebelin, suka manja, atau banyak maunya, ketahuilah kalau Atha sayang banget sama kakak.
                </p>

                <p>
                    Pokoknya kakak harus selalu bahagia, karena Atha masih mau terus jadi adik kecil yang bisa manja, cerita, dan merepotkan kakak sampai nanti. Jangan lupa bahagia terus, yaaa, Kak!
                </p>

            </div>

            <div class="letter-signature">
                <p>
                    Lots of love from your one and only little sister, Atha.
                </p>

                <span>💗🥺</span>
            </div>

        </div>

        <div class="letter-navigation">

            <button class="back-button" id="letterBackButton">
                ← Back
            </button>

            <button class="open-button" id="letterContinueButton">
                Continue <span>♡</span>
            </button>

        </div>

        <p class="bottom-note">
            written with love, just for you
        </p>
    `;

    document.getElementById("letterBackButton").addEventListener("click", function () {
        changePage(showMemoryPage);
    });

    document.getElementById("letterContinueButton").addEventListener("click", function () {
        changePage(showWishesPage);
    });
}

// ========================================
// HALAMAN LITTLE WISHES FOR YOU
// ========================================

function showWishesPage() {
    welcomeContainer.classList.remove(
        "memory-page",
        "letter-page",
        "surprise-page"
    );

    welcomeContainer.classList.add("wishes-page");

    welcomeContainer.innerHTML = `
        <div class="top-label">
            ♡ A LITTLE BOX FULL OF WISHES ♡
        </div>

        <p class="small-heading">
            CHAPTER 03
        </p>

        <h1 class="wishes-title">
            Little <span>Wishes</span> For You
        </h1>

        <p class="wishes-description">
            If I could give you a thousand wishes,
            these would be some of the first ones. ♡
        </p>

        <div class="wishes-divider">
            ♡ ───── ♡ ───── ♡
        </div>

        <div class="wishes-grid">

            <div class="wish-card">
                <div class="wish-icon">🌷</div>
                <h2>Endless Happiness</h2>
                <p>
                    May your days be filled with genuine smiles,
                    peaceful moments, and endless reasons to be happy.
                </p>
            </div>

            <div class="wish-card">
                <div class="wish-icon">🦋</div>
                <h2>Beautiful Dreams</h2>
                <p>
                    May every dream you hold close slowly turn
                    into something beautiful and real.
                </p>
            </div>

            <div class="wish-card">
                <div class="wish-icon">🌸</div>
                <h2>Good Health</h2>
                <p>
                    May you always be blessed with good health,
                    strength, and a heart that feels at peace.
                </p>
            </div>

            <div class="wish-card">
                <div class="wish-icon">🍀</div>
                <h2>Abundant Blessings</h2>
                <p>
                    May good opportunities, smooth journeys,
                    and countless blessings find their way to you.
                </p>
            </div>

            <div class="wish-card">
                <div class="wish-icon">💗</div>
                <h2>Surrounded by Love</h2>
                <p>
                    May you always be surrounded by people
                    who appreciate you and love you sincerely.
                </p>
            </div>

            <div class="wish-card">
                <div class="wish-icon">✨</div>
                <h2>More Adventures</h2>
                <p>
                    May life bring you many beautiful experiences,
                    unforgettable memories, and exciting new beginnings.
                </p>
            </div>

        </div>

        <div class="wishes-ending">
            <p>And above all...</p>

            <h2>
                May life always be kind to you, Kak. ♡
            </h2>

            <span>🍓 🤍 🍵</span>
        </div>

        <div class="wishes-navigation">

            <button class="back-button" id="wishesBackButton">
                ← Back
            </button>

            <button class="open-button" id="wishesContinueButton">
                One Last Surprise <span>♡</span>
            </button>

        </div>

        <p class="bottom-note">
            with all my love, Atha ♡
        </p>
    `;

    document.getElementById("wishesBackButton").addEventListener("click", function () {
        changePage(showLetterPage);
    });

    document.getElementById("wishesContinueButton").addEventListener("click", function () {
        changePage(showSurprisePage);
    });
}

// ========================================
// HALAMAN ONE LAST SURPRISE
// ========================================

function showSurprisePage() {
    welcomeContainer.classList.remove(
        "memory-page",
        "letter-page",
        "wishes-page"
    );

    welcomeContainer.classList.add("surprise-page");

    welcomeContainer.innerHTML = `
        <div class="top-label">
            ♡ JUST ONE MORE THING ♡
        </div>

        <p class="small-heading">
            THE FINAL CHAPTER
        </p>

        <div class="main-illustration">
            <span>🍓</span>
            <span class="main-cake">🎁</span>
            <span>🍵</span>
        </div>

        <h1>
            One Last <span>Surprise!</span>
        </h1>

        <div class="divider">
            ♡ ───── ♡ ───── ♡
        </div>

        <h2>A Little Gift For You</h2>

        <p class="welcome-description">
            There's one more little thing
            I want you to open. ♡
        </p>

        <p class="little-message">
            Tap the gift to reveal your surprise! 🥺
        </p>

        <button class="gift-box-button" id="revealGiftButton" aria-label="Open your birthday gift">
            <span class="gift-emoji">🎁</span>
            <span class="gift-hint">OPEN YOUR GIFT</span>
        </button>

        <div class="gift-reveal" id="giftReveal" hidden>

            <div class="gift-reveal-icon">
                💗
            </div>

            <h2>
                You're My Forever Favorite!
            </h2>

            <p>
                Kak Aulia, no matter how much time passes,
                you'll always be my one and only favorite sister.
            </p>

            <p>
                Thank you for every laugh, every little moment,
                and for being part of my life.
            </p>

            <p>
                I hope we get to make many more beautiful
                memories together.
            </p>

            <div class="gift-final-message">
                I love you, Kakak! 💗
            </div>

            <div class="gift-final-decoration">
                🍓 🌷 🎀 🍵
            </div>

        </div>

        <div class="surprise-navigation">

            <button class="back-button" id="surpriseBackButton">
                ← Back to my wishes
            </button>

        </div>

        <p class="bottom-note">
            forever your little sister, Atha ♡
        </p>
    `;

    const revealGiftButton = document.getElementById("revealGiftButton");
    const giftReveal = document.getElementById("giftReveal");

    revealGiftButton.addEventListener("click", function () {

        const isOpened = !giftReveal.hidden;

        giftReveal.hidden = isOpened;

        if (isOpened) {
            revealGiftButton.innerHTML = `
                <span class="gift-emoji">🎁</span>
                <span class="gift-hint">OPEN YOUR GIFT</span>
            `;

            revealGiftButton.setAttribute("aria-label", "Open your birthday gift");

        } else {
            revealGiftButton.innerHTML = `
                <span class="gift-emoji">💝</span>
                <span class="gift-hint">YOUR GIFT IS OPENED ♡</span>
            `;

            revealGiftButton.setAttribute("aria-label", "Close your birthday gift");

            setTimeout(function () {
                giftReveal.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }, 100);
        }

    });

    document.getElementById("surpriseBackButton").addEventListener("click", function () {
        changePage(showWishesPage);
    });
}

// ========================================
// TOMBOL OPEN MY BIRTHDAY GIFT
// ========================================

openButton.addEventListener("click", function () {

    // Mulai musik saat pengguna membuka hadiah
    startMusic();

    changePage(showBirthdayPage);

});
