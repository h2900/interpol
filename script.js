function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
const texts = [
"مرحبا بكم في Interpol Aflou",
"مصدر الأخبار الموثوقة",
"تابعونا لمعرفة كل جديد"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// حدد العنصر الذي تريد أن يظهر فيه النص (مثلاً داخل الهيدر)
const textElement = document.querySelector(".text-container");

function typeEffect() {
let currentText = texts[textIndex];

if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex--);
} else {
    textElement.textContent = currentText.substring(0, charIndex++);
}

if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, 1500); 
} else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
}

setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
document.addEventListener("copy", function (e) {
e.preventDefault();
alert("🚫 لا يمكنك نسخ النص من هذا الموقع!");
});

document.addEventListener("contextmenu", function (e) {
e.preventDefault();
alert("🚫 تم تعطيل زر الفأرة الأيمن!");
});

document.addEventListener("keydown", function (e) {
if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "v")) {
    e.preventDefault();
    alert("🚫 اختصارات النسخ واللصق معطلة!");
}
});
});

document.addEventListener("DOMContentLoaded", function () {
const videoCard = document.querySelector(".video-card");
const overlay = document.querySelector(".overlay");
const fullscreenVideo = document.querySelector(".fullscreen-video");
const closeButton = document.querySelector(".close-btn");
const thumbnail = document.querySelector(".video-thumbnail");

// استخراج صورة مصغرة من الفيديو
function generateThumbnail(videoElement, imgElement) {
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

videoElement.addEventListener("loadeddata", function () {
    canvas.width = 300;
    canvas.height = (videoElement.videoHeight / videoElement.videoWidth) * 300;

    videoElement.currentTime = 3; // التقاط لقطة من الثانية 3

    videoElement.addEventListener("seeked", function () {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        imgElement.src = canvas.toDataURL("image/png"); // تحويل اللقطة إلى صورة
    });
});
}

// تحميل الصورة المصغرة تلقائيًا
const tempVideo = document.createElement("video");
tempVideo.src = "video.mp4";
tempVideo.crossOrigin = "anonymous";
generateThumbnail(tempVideo, thumbnail);

// تشغيل الفيديو عند الضغط على الصورة المصغرة أو كرت الفيديو
function openVideo() {
overlay.style.opacity = "1";
overlay.style.visibility = "visible";
fullscreenVideo.play();
}

thumbnail.addEventListener("click", openVideo);
videoCard.addEventListener("click", openVideo);

// إغلاق الفيديو عند الضغط على زر الإغلاق أو خارج الفيديو
function closeVideo() {
overlay.style.opacity = "0";
overlay.style.visibility = "hidden";
fullscreenVideo.pause();
fullscreenVideo.currentTime = 0;
}

closeButton.addEventListener("click", closeVideo);
overlay.addEventListener("click", function (event) {
if (event.target === overlay) {
    closeVideo();
}
});
});


document.addEventListener("DOMContentLoaded", function () {
const overlay = document.querySelector(".overlay");
const galleryImage = document.querySelector(".gallery-image");
const closeButton = document.querySelector(".close-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const fullscreenButton = document.querySelector(".fullscreen-btn");

let images = [];
let currentIndex = 0;

// البحث عن كل الصور داخل .card
document.querySelectorAll(".card img").forEach((img, index) => {
images.push(img.src); // إضافة الصورة إلى المصفوفة
img.addEventListener("click", function () {
    openGallery(index);
});
});

