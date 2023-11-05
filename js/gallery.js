// gallery.js
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');
const imageContainer = document.querySelector('.image-container');
const imageDescription = document.querySelector('.image-description');

const images = [
    { src: 'images/galleyImg/인트로 스토리 여주1.png', description: '인트로 스토리 여주1' },
    { src: 'images/galleyImg/인트로 스토리 여주2.png', description: '인트로 스토리 여주2' },
    { src: 'images/galleyImg/인트로 스토리 여주3.png', description: '인트로 스토리 여주3' },
    { src: 'images/galleyImg/인트로 스토리 여주4.png', description: '인트로 스토리 여주4' },
    { src: 'images/galleyImg/타이틀 구버전 여주.png', description: '타이틀 구버전 여주' }
];

let currentImageIndex = 0;

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const imageURL = images[currentImageIndex].src;
    const imageDescriptionText = images[currentImageIndex].description;

    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.alt = 'Image';

    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);

    imageDescription.textContent = imageDescriptionText;
}

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

updateImage();
