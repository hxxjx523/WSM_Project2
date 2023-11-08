const dialogues = [
    { name: "", text: "이런저런 과거 회상에 빠져있던 나에게 누군가 다가왔다", img: "", background: "images/교실 배경.png"},
    { name: "???", text: "안녕", img: "images/최재율 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "..안녕!", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },
    { name: "", text: "아까 교문에서 만났던 사람이다", img: "", background: "images/교실 배경.png"},
    { name: "???", text: "같은 반 이었네, 최재율이라고 해", img: "images/최재율 ver.1-2.png", background: "images/교실 배경.png" },
    { name: "최재율", text: "잘 부탁해", img: "images/최재율 ver.1-2.png", background: "images/교실 배경.png" },
    { name: "", text: "그의 픽셀 미소는 살인적이다 못해 웃겼다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "푸훕..", img: "images/김여주 표정8.png", background: "images/교실 배경.png" },
    { name: "", text: "그만 웃어버리고 말았다", img: "", background: "images/교실 배경.png"},
    { name: "최재율", text: "응? 뭐야 왜 웃는 거야?", img: "images/최재율 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "아.. 진짜 환하게 웃는 것 같아서..", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },
    { name: "최재율", text: "..그래? 고마워", img: "images/최재율 ver.1.png", background: "images/교실 배경.png" },
    { name: "최재율", text: "근데 너는 이 학교에 어떻게 왔어?", img: "images/최재율 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "그게..", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },
];

const select1_dialogues = [  
    { name: "김여주", text: "그냥 여러가지.. ", img: "images/김여주 표정5.png", background: "images/교실 배경.png" },
    { name: "최재율", text: "그래? 더 물어보면 실례겠네", img: "images/최재율 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "어? 그렇게까ㅈ", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },
    { name: "", text: "(드르륵)", img: "", background: "images/교실 배경.png"},
    { name: "", text: "선생으로 보이는 사람이 들어왔다", img: "", background: "images/교실 배경.png"},
    { name: "담임선생", text: "자~ 안녕하세요 저는 이번 담임을 맡은 ...", img: "", background: "images/교실 배경.png"},
];

const select2_dialogues = [
    { name: "김여주", text: "미남이 많아서! 난 잘생긴 사람 진짜 좋아하거든~", img: "images/김여주 표정7.png", background: "images/교실 배경.png" },      
    { name: "김여주", text: "내가 처음보는 사람한테 무슨 말을..", img: "images/김여주 표정1.png", background: "images/교실 배경.png" },      
    { name: "최재율", text: "하하! 솔직하네", img: "images/최재율 ver.1-2.png", background: "images/교실 배경.png" },
    { name: "", text: "반응이 좋다, 이런 게 취향인가?", img: "", background: "images/교실 배경.png"},
    { name: "최재율", text: "너는 생각보다 재밌는 사람인 것 같이", img: "images/최재율 ver.1-2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "음...? 고마워", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },      
    { name: "", text: "(드르륵)", img: "", background: "images/교실 배경.png"},
    { name: "", text: "선생으로 보이는 사람이 들어왔다", img: "", background: "images/교실 배경.png"},
    { name: "최재율", text: "그럼 이따 봐~", img: "images/최재율 ver.1-2.png", background: "images/교실 배경.png" },
    { name: "", text: "최재율은 자리로 돌아갔다", img: "", background: "images/교실 배경.png"},
    { name: "담임선생", text: "자~ 안녕하세요 저는 이번 담임을 맡은 ...", img: "", background: "images/교실 배경.png"},
];

/* 

선택하고 중간에 이름이랑 이미지 안 나옴

*/


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
    let currentSelect1Index = 0;

    const dialogue = select1_dialogues[currentSelect1Index];
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
            // currentDialogueIndex-=1;
    });
    
    const dialogue2 = select2_dialogues[currentSelect1Index];
    select2.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        updateUI(dialogue2);
            const select2NextButton = () => {
                updateUI(select2_dialogues[currentSelect1Index]);
                selectContainer.style.display = 'none';
                currentSelect1Index++;
            };
            nextButton.addEventListener('click', select2NextButton);
            // currentDialogueIndex-=2; 
        });
    }
    
    //////////////////////////////////////////////////////////////
    // nextButton.disabled = true;
    
    
nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    if(currentDialogueIndex === 13){
        selectContainer.style.display = 'flex';
        yeojooChoice(currentDialogueIndex);
    }
    displayDialogue(currentDialogueIndex);
    characterImageElement.style.visibility = 'visible';
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});