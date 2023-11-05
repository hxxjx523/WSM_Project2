const dialogues = [
    { name: "김여주", text: "저건 픽셀이잖아!", img: "images/김여주 표정5.png"},
    { name: "", text: "앞에 있는 저 이상한 사람은 꽤 여유롭게 교문을 통과하고 있다", img: "images/백이현 ver.1.png" },
    { name: "김여주", text: "지금 이게 문제가 아니지! 일단 달리고 보자", img: "images/김여주 표정2.png" },
    { name: "김여주", text: "허억, 허억,", img: "images/김여주 표정1.png" },
    { name: "", text: "간신히 교문을 통과했다", img: "" },
    { name: "", text: "숨을 고르고 있는 나를 그 이상한 픽셀이 쳐다보았다", img: "" },
    { name: "???", text: "저기 괜찮으세요?", img: "images/백이현 ver.1.png" },
    { name: "", text: "픽셀 인간이 나에게 말을 걸었다..!", img: "" },    
    { name: "김여주", text: "아, 네...", img: "images/김여주 표정2.png" },
    { name: "???", text: "첫날부터 지각할뻔 하다니 저희 둘 다 웃기네요ㅎㅎ", img: "images/백이현 ver.1.png" },
    { name: "김여주", text: "하하... 그러게요...", img: "images/김여주 표정4.png" },
    { name: "???", text: "아, 저는 백이현이라고 해요. 그쪽은 신입생이신가요?", img: "images/백이현 ver.1.png" },
    { name: "김여주", text: "..네! 저는 김여주라고 합니다.. 1학년이에요..", img: "images/김여주 표정4.png" },
    { name: "백이현", text: "그렇구나, 1학년 교실은 저쪽이에요. 지금 뛰어가면 늦지는 않을 것 같은데?", img: "images/백이현 ver.1.png" },
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
        }else if (dialogue.img === 'images/백이현 ver.1.png') {
            characterImageElement.style.float = 'left';
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
