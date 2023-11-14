const dialogues = [
    { name: "최재율", text: "하하, 너는 어떨 것 같은데?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
];

const select1_dialogues = [
    { name: "최재율", text: "그래? 그렇구나~", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "밤도 늦었는데 빨리 가는게 좋지 않나?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "응, 오늘은 여기까지 안녕~", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "난 말을 이상하게 하는 재주가 있나보다", img: "", background: "images/남주 방 배경.png"}, 
];

const select2_dialogues = [
    { name: "최재율", text: "음~ 그래~?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "그러고 보니 시간이 좀 지난 것 같다",img: "", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "으응, 근데 7시니깐 슬슬가야할 것 같아", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "나랑 더 영상 보다 가면 안돼?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "최재율은 미인계를 썼다 이렇게 비겁할 수가",img: "", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "어쩔 수 없지~", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "그렇게 몇 영상을 더 보고 집으로 갔다",img: "", background: "images/남주 방 배경.png"},
    { name: "", text: "최재율과는 좋은 방향으로 발전해나갔고 자연스럽게 입학 첫날의 기억은 잊혀졌다",img: "", background: "images/남주 방 배경.png"},
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

    if (dialogue.name === "" && dialogue.img === "") {
        nameWindow.style.visibility = 'hidden';
        characterImageElement.style.visibility = 'hidden';
    }else{
        nameWindow.style.visibility = 'visible';
        characterImageElement.style.visibility = 'visible';
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

function yeojooChoice() {
    let likability = 0;
    let currentSelect1Index = 1;

    function ToEnding1() {
        window.location.href = "BadSpeakerEnding.html";
    }

    select1.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        likability++;
        console.log(likability);
        updateUI(select1_dialogues[0]);
    
        const select1NextButton = () => {
            if (currentSelect1Index === select1_dialogues.length ) {
                ToEnding1();
            } else {
                updateUI(select1_dialogues[currentSelect1Index]);
                selectContainer.style.display = 'none';
                currentSelect1Index++;
            }
        };
    
        nextButton.addEventListener('click', select1NextButton);
    });
    
    function ToEnding() {
        window.location.href = "ChiojaeyulGoodEnding.html";
    }
    
    select2.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        updateUI(select2_dialogues[0]);
        
        const select2NextButton = () => {
            if (currentSelect1Index === select2_dialogues.length) {
                ToEnding();
            } else {
                updateUI(select2_dialogues[currentSelect1Index]);
                selectContainer.style.display = 'none';
                currentSelect1Index++;
            }
        };
        
        nextButton.addEventListener('click', select2NextButton);
        currentDialogueIndex -= 2;
    });
    }
    
    //////////////////////////////////////////////////////////////
    
    
    
    nextButton.addEventListener('click', () => {
        currentDialogueIndex++;
        if(currentDialogueIndex === dialogues.length){
            selectContainer.style.display = 'flex';
            yeojooChoice();
        }
    displayDialogue(currentDialogueIndex);
    characterImageElement.style.visibility = 'visible';
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});