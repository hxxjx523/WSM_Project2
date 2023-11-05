const dialogues = [
    { name: "김여주", text: "저건 픽셀이잖아!", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "", text: "앞에 있는 저 이상한 사람은 꽤 여유롭게 교문을 통과하고 있다", img: "images/도윤 ver.1.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "지금 이게 문제가 아니지! 일단 달리고 보자", img: "images/김여주 표정2.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "허억, 허억,", img: "images/김여주 표정1.png", background: "images/학교 배경.png" },
    { name: "", text: "간신히 교문을 통과했다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "숨을 고르고 있는 나를 그 이상한 픽셀이 쳐다보았다", img: "", background: "images/학교 배경.png" },
    { name: "???", text: "음...", img: "images/도윤 ver.1.png", background: "images/학교 배경.png" },
    { name: "", text: "픽셀 인간은 뚫어져라 나를 쳐다보다가 쌩 가버렸다", img: "", background: "images/학교 배경.png" },    
    { name: "김여주", text: "...?뭐야", img: "images/김여주 표정3.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "아, 나도 서둘러서 가야겠다", img: "images/김여주 표정2.png", background: "images/학교 배경.png" }
];

let currentDialogueIndex = 0;
let isImageVisible = true; 
let isImageOnRight = true; 

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterImageElement = document.querySelector('.imgCharacter');
const nextButton = document.getElementById('nextButton');
const nameWindow = document.querySelector('.nameWindow');


function displayDialogue(index) {
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }

    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;

    // 만약 대화의 이름 (dialogue.name)이 빈 문자열이라면 nameWindow를 숨김
    if (dialogue.name === "") {
        nameWindow.style.visibility = 'hidden';
    } else {
        nameWindow.style.visibility = 'visible';
    }

    dialogueElement.textContent = dialogue.text;

    if (dialogue.img) {
        characterImageElement.src = dialogue.img;
        // 이미지 주소가 특정 값일 때만 이미지 위치를 변경
        if (dialogue.img.startsWith('images/김여주')) {
            characterImageElement.style.float = 'right';
            characterImageElement.style.paddingRight = '10vh';
            isImageOnRight = true;
        } else {
            characterImageElement.style.float = 'left';
            characterImageElement.style.paddingLeft = '10vh';
            isImageOnRight = false;
        }
        characterImageElement.style.display = isImageVisible ? 'block' : 'none';
    } else {
        characterImageElement.style.display = 'none';
    }

    if (dialogue.background) {
        document.body.style.backgroundImage = `url('${dialogue.background}')`;
    } else {
        document.body.style.backgroundImage = 'url("기본 배경 이미지 URL")';
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
