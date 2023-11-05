// import { mainBoy } from './question.js';
// console.log(mainBoy);

// import { mainBoy } from "./question";

const dialogues = [
    { name: "김여주", text: "오늘은 고등학교 입학식이다. 왜인지 상쾌한 기분! 좋은 일이 있을 것만 같다", img: "images/김여주 전신.png" },
    { name: "", text: "콰당!.", img: "" },
    { name: "", text: "하늘에서 떨어지는 정체를 알 수 없는 물체와 여주가 부딪혔다", img: ""},
    { name: "김여주", text: "으으... 이게 뭐야!", img: "images/김여주 전신.png"},
    { name: "", text: "여주는 정체를 알 수 없는 물체를 들어올렸다", img: ""},
    { name: "민들레", text: "안녕! 나는 사랑의 요정! 너는 진정한 사랑을 모르는 구나!!", img: "images/민들레.png"},
    { name: "김여주", text: "그게 무슨 소리야..!", img: "images/김여주 전신.png"},
    { name: "민들레", text: "너는 심각한 외모지상주의야! 사람의 얼굴만 보면 어떡하니!", img: "images/민들레.png"},
    { name: "", text: "그렇다, 여주는 심각한 외모지상주의였다", img: ""},
    { name: "", text: "여주의 최애 신재현은 아이돌계에서도 손 꼽히는 미남으로 어릴 적부터 좋아했던 탓에 눈이 너무 높아져버렸다", img: ""},
    { name: "민들레", text: "좋아! 내가 사랑이 뭔지 알려주지! 네가 진정한 사랑을 알 때 그들의 얼굴이 보일거야", img: "images/민들레.png"},
    { name: "김여주", text: "그게 무슨..!!", img: "images/김여주 전신.png"},
    { name: "민들레", text: "자세한건 핸드폰에서 보길 바라! 그럼 안녕!", img: "images/민들레.png"},
    { name: "김여주", text: "..? 이게 무슨 소리야..!!", img: "images/김여주 전신.png"},
    { name: "", text: "갑작스러운 만남을 뒤로 하고 얼마있으면 시작될 입학식에 늦을 것 같다!", img: ""},
    { name: "김여주", text: "잠깐만, 지금 가도 지각이잖아! 뛰어!!!", img: "images/김여주 전신.png"},
    { name: "", text: "교문 앞에 이상한 뒷모습이 보인다. 설마 이거 요정의 저주인거야..?!", img: ""}
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

// function displayDialogue(index) {
//     document.body.style.backgroundImage = `url('${backgroundImg[0]}')`;
//     if (index >= dialogues.length) {
//         nextButton.disabled = true;
//         return;
//     }
    
//     const dialogue = dialogues[index];
//     nameElement.textContent = dialogue.name;
//     dialogueElement.textContent = dialogue.text;
    
//     if (dialogue.img) {
//         characterImageElement.src = dialogue.img;
//         characterImageElement.style.display = 'block';
//     } else {
//         characterImageElement.style.display = 'none';
//     }
// }

function displayDialogue(index) {
    document.body.style.backgroundImage = `url('${backgroundImg[0]}')`;
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
        } else if (dialogue.img === 'images/민들레.png') {
            characterImageElement.style.float = 'left';
            nameWindow.style.float = 'right';
            characterImageElement.style.paddingLeft = '10vh';
            isImageOnRight = false;
        } else {
            nameWindow.style.display = 'none';
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
