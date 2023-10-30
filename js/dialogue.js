// 대사, 캐릭터 이름, 캐릭터 이미지 데이터
const dialogues = [
    { name: "김여주", text: "오늘은 고등학교 입학식이다. 왜인지 상쾌한 기분! 좋은 일이 있을 것만 같다", img: "images/김여주 전신.png" },
    { name: "김여주", text: "콰당!.", img: "images/김여주 전신.png" },
    // ... 추가적인 대사와 이미지를 여기에 추가하십시오.
];

let currentDialogueIndex = 0;

// HTML 요소 참조 가져오기
const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterElement = document.querySelector('.character img');
const nextButton = document.getElementById('nextButton');

// 대사와 캐릭터 이미지를 화면에 표시하는 함수
function displayDialogue(index) {
    if (index >= dialogues.length) {
        // 대사가 더 이상 없으면 버튼을 비활성화하거나 숨김 처리합니다.
        nextButton.disabled = true;
        return;
    }

    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;
    dialogueElement.textContent = dialogue.text;
    characterElement.src = dialogue.img;
}

// "Next" 버튼을 클릭할 때마다 대사와 캐릭터 이미지를 업데이트
nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    displayDialogue(currentDialogueIndex);
});

// 페이지가 로드되면 첫 번째 대사와 캐릭터 이미지를 표시
window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});