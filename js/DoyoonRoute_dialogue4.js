const dialogues = [
    { name: "김여주", text: "응, 내일 봐", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "익숙한 뒷모습이야!", img: "", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "윤아!", img: "images/김여주 전신.png", background: "images/등굣길 배경.png"},
    { name: "", text: "윤이를 만났다", img: "", background: "images/등굣길 배경.png" },
    { name: "", text: "윤이의 모습은...", img: "", background: "images/등굣길 배경.png" },
    { name: "도윤", text: "어제 잘 들어갔어?", img: "images/도윤 표정1.png", background: "images/등굣길 배경.png"},
    { name: "", text: "내가 아는 모습으로 돌아왔다", img: "", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "응, 덕분에~", img: "images/김여주 표정7.png", background: "images/등굣길 배경.png"},
    { name: "", text: "오랜만에 본 진짜 윤이의 모습에 빤히 쳐다봤다", img: "", background: "images/등굣길 배경.png" },
    { name: "도윤", text: "뭐야.. 왜 그렇게 쳐다보는데..", img: "images/도윤 표정4.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "하하, 부끄러워하는 거야?", img: "images/김여주 표정8.png", background: "images/등굣길 배경.png"},
    { name: "도윤", text: "...여주야, 나 어떻게 생각해?", img: "images/도윤 표정4.png", background: "images/등굣길 배경.png"},
    { name: "", text: "어..?어?! 잠깐", img: "", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "응? 너..?", img: "images/김여주 표정12.png", background: "images/등굣길 배경.png"},
];

const select1_dialogues = [  
    { name: "도윤", text: "...그래 그러자", img: "images/도윤 전신.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "그래!", img: "images/김여주 전신.png", background: "images/등굣길 배경.png"},
    { name: "", text: "그렇게 도윤과 베프가 됐다", img: "", background: "images/등굣길 배경.png" },
];

const select2_dialogues = [
    { name: "도윤", text: "그거 긍정적인 의미로 봐도 되겠지?", img: "images/도윤 표정4.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "..응!", img: "images/김여주 표정12.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "..빨리 반에 가자//", img: "images/김여주 표정12.png", background: "images/등굣길 배경.png"},
    { name: "", text: "그렇게 윤이와는 좋은 방향으로 발전해나갔고 자연스럽게 입학 첫날의 기억은 잊혀졌다 ", img: "", background: "images/등굣길 배경.png" },
];

let currentDialogueIndex = 0;
let isImageVisible = true; 
let isImageOnRight = true; 

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterImageElement = document.querySelector('.imgCharacter');
const nextButton = document.getElementById('nextButton');
const nameWindow = document.querySelector('.nameWindow');
const selectContainer = document.querySelector('.selectContainer');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');

function updateUI(dialogue) {
    dialogueElement.textContent = dialogue.text;
    nameElement.textContent = dialogue.name;
    nameWindow.style.visibility = 'visible';

    if (dialogue.name === "" && dialogue.img === "") {
        nameWindow.style.visibility = 'hidden';
        characterImageElement.style.visibility = 'hidden';
    }

    if (dialogue.img) {
        characterImageElement.src = dialogue.img;
        if (dialogue.img.startsWith('images/김여주')) {
            characterImageElement.style.float = 'right';
            nameWindow.style.float = 'left';
            characterImageElement.style.paddingRight = '10vh';
            isImageOnRight = true;
        } else {
            characterImageElement.style.float = 'left';
            nameWindow.style.float = 'right';
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

function displayDialogue(index) {
    // if (index >= dialogues.length) {
    //     nextButton.disabled = true;
    //     return;
    // }

    const dialogue = dialogues[index];

    if (dialogue.img && dialogue.img.startsWith('images/김여주')) {
        isImageOnRight = true;
    } else {
        isImageOnRight = false;
    }

    nameWindow.style.visibility = dialogue.name === "" ? 'hidden' : 'visible';
    characterImageElement.style.float = isImageOnRight ? 'right' : 'left';
    nameWindow.style.float = isImageOnRight ? 'left' : 'right';
    characterImageElement.style.paddingRight = isImageOnRight ? '10vh' : '10vh';

    updateUI(dialogue);
}

function yeojooChoice(index) {
    let likability = 0;
    let currentSelect1Index = 1;


    const dialogue = select1_dialogues[0];
    select1.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        likability++;
        console.log(likability);
        updateUI(dialogue);
        const select1NextButton = () => {
            updateUI(select1_dialogues[currentSelect1Index]);
            selectContainer.style.display = 'none';
            currentSelect1Index++;
        };
        nextButton.addEventListener('click', select1NextButton);
        currentDialogueIndex-=1;
    });
    
    const dialogue2 = select2_dialogues[0];
    select2.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        updateUI(dialogue2);
        const select2NextButton = () => {
            updateUI(select2_dialogues[currentSelect1Index]);
            selectContainer.style.display = 'none';
            currentSelect1Index++;
        };
        nextButton.addEventListener('click', select2NextButton);
        currentDialogueIndex-=2; 
    });
}
    
    nextButton.addEventListener('click', () => {
        currentDialogueIndex++;
        characterImageElement.style.visibility = 'visible';
        if(currentDialogueIndex === 14){
            selectContainer.style.display = 'flex';
            yeojooChoice(currentDialogueIndex);
        }
        displayDialogue(currentDialogueIndex);
        console.log(currentDialogueIndex); 
    });


window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});