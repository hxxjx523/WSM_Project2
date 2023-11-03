const dialogues = [
    { name: "김여주", text: "저건 픽셀이잖아!", img: "images/김여주 전신.png"},
    { name: "???", text: "음...", img: "images/도윤 ver.1.png" },
    { name: "", text: "픽셀 인간은 뚫어져라 나를 쳐다보다가 쌩 가버렸다", img: "" },    
    { name: "김여주", text: "...?뭐야", img: "images/김여주 전신.png" },
    { name: "김여주", text: "아, 나도 서둘러서 가야겠다", img: "images/김여주 전신.png" },
];

const backgroundImg = [
    "images/등굣길 배경.png",
    "images/학교 배경.png"
];

let currentDialogueIndex = 0;
let isImageVisible = true; // 변수 추가
let isImageOnRight = true; // 변수 추가

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterImageElement = document.querySelector('.imgCharacter');
const nextButton = document.getElementById('nextButton');
const nameWindow = document.querySelector('.nameWindow');

function displayDialogue(index) {
    document.body.style.backgroundImage = `url('${backgroundImg[1]}')`;
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }
    
    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;
    dialogueElement.textContent = dialogue.text;
    
    if (dialogue.img) {
        characterImageElement.src = dialogue.img;
        // 이미지 주소가 특정 값일 때만 이미지 위치를 변경
        if (dialogue.img === 'images/김여주 전신.png') {
            characterImageElement.style.float = 'right';
            nameWindow.style.float = 'left';
            characterImageElement.style.paddingRight = '10vh';
            isImageOnRight = true;
        } else if (dialogue.img === 'images/도윤 ver.1.png') {
            characterImageElement.style.float = 'left';
            nameWindow.style.float = 'right';
            characterImageElement.style.paddingLeft = '10vh';
            isImageOnRight = false;
        }
        characterImageElement.style.display = isImageVisible ? 'block' : 'none';
    } else {
        characterImageElement.style.display = 'none';
    }
}

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex)
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});

// if(currentDialogueIndex === 16){
//     window.location.href = mainBoy + "Route.html";
// }
