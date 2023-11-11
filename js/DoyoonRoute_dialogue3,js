const dialogues = [
    { name: "", text: "학교가 끝난 후, 도윤의 집으로 향했다", img: "", background: "images/남주 방 배경.png" },
    { name: "", text: "도윤의 말대로 집은 버스를 타고 15분거리에 있었다", img: "", background: "images/남주 방 배경.png" },
    { name: "도윤", text: "자, 여기가 우리 집이야", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "실례합니다..!", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "도윤", text: "집에 뭐 없는데..", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "와~ 윤이의 방~", img: "images/김여주 표정10.png", background: "images/남주 방 배경.png"},
    { name: "도윤", text: "헐... 그렇게 불리는 거 오랜만이야", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "그래요~ 우리 윤이 뭐하고 놀까~", img: "images/김여주 표정6.png", background: "images/남주 방 배경.png"},
    { name: "도윤", text: "일단 밥이라도 먹을래?", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "오! 너가 만들어 줄 거야?", img: "images/김여주 표정10.png", background: "images/남주 방 배경.png"},
    { name: "도윤", text: "당연하지, 여주가 원하면 해줘야지~", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "나도 도와줄게!", img: "images/김여주 표정8.png", background: "images/남주 방 배경.png"},
    { name: "", text: "그렇게 도윤과 요리를 했다", img: "", background: "images/남주 방 배경.png" },
    { name: "도윤", text: "어어어 조심해", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "네에", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "도윤의 요리는 꽤 능숙해 보인다", img: "", background: "images/남주 방 배경.png" },
    { name: "", text: "그렇게 완성된 요리를 같이 먹었다", img: "", background: "images/남주 방 배경.png" },
    { name: "김여주", text: "음~", img: "images/김여주 표정7.png", background: "images/남주 방 배경.png"},
    { name: "도윤", text: "어때? 괜찮아?", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
];

const select1_dialogues = [  
    { name: "도윤", text: "그래..? ", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "", text: "가볍게 식사를 마치고 집으로 갔다", img: "", background: "images/남주 방 배경.png" },
    { name: "", text: "도윤의 얼굴은 끝까지 찡그리고 있었다", img: "", background: "images/남주 방 배경.png" },
    { name: "", text: "그렇게 독설가가 되었다", img: "", background: "images/남주 방 배경.png" },
];

const select2_dialogues = [
    { name: "도윤", text: "다행이다!", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "", text: "그렇게 도윤과 식사를 마쳤다", img: "", background: "images/남주 방 배경.png" },
    { name: "도윤", text: "데려다줄게", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "", text: "도윤은 나를 집까지 데려다줬다", img: "", background: "images/남주 방 배경.png" },
    { name: "도윤", text: "내일 봐", img: "images/도윤 ver.2.png", background: "images/남주 방 배경.png" },      
    { name: "김여주", text: "응, 내일 봐", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
];

let currentDialogueIndex = 0;
let isImageVisible = true; 
let isImageOnRight = true; 

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterImageElement = document.querySelector('.imgCharacter');
const nextButton = document.getElementById('nextButton');
const nameWindow = document.querySelector('.nameWindow');


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
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }

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


    const dialogue1 = select1_dialogues[0];
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
        displayDialogue(currentDialogueIndex);
        console.log(currentDialogueIndex); 
    });

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});