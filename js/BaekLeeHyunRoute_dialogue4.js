
const dialogues = [
    { name: "", text: "그렇게 동아리 시간이 왔다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "신입생들은 동아리를 선택하기 위해 원래 재학생들은 신입생들을 자신들의 동아리로 오기 위해 많은 인원이 이동했다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "나도 반을 돌아보며 둘러보고 있었다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "근데 학생회실 앞에서 익숙한 얼굴이 보였다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "백이현 선배였다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "선배는 옆에서 홍보하는 학생회 임원들이 부끄럽다는 표정을 하고 있었다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "인사라도 해봐야 하나?", img: "", background: "images/교실 배경.png" },
    { name: "", text: "나는 백이현 선배 앞으로 걸어갔다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "선배는 먼저 아는 척해줬다", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "어? 여주", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "선배", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "동아리 보고 있었어요?", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "네..", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "(학생회 임원)", text: "선배 빨리 영업해요!!!", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "아니 좀 기다려ㅂ", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "(학생회 임원)", text: "어~? 전교회장이면서~", img: "", background: "images/교실 배경.png" },
    { name: "김여주", text: "..? 선배, 전교회장이셨어요?", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "하하.. 네에~", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "아.. 그렇구나", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "그.. 우리 학생회 들어오지 않을래요? 아! 혹시 동아리 정했나?", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "아니요, 아직 안 정했어요", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "그러면 딱이다!", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "(학생회 임원)", text: "뭐야 선배 왜 신입생한테 플러팅해요~", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "아ㅏ니//", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "..?!", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "", text: "그 말을 듣고 얼굴이 너무 빨개졌다", img: "", background: "images/교실 배경.png" },
    { name: "(학생회 임원)", text: "어??? 진짜 그런 사이인거야?", img: "", background: "images/교실 배경.png" },
    { name: "", text: "나는 갑작스러운 많은 관심에 아무 말도 못했다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "턱", img: "", background: "images/교실 배경.png" },
    { name: "", text: "선배가 내 어깨를 잡았다", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "야.. 신입생 그만 놀려...", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "", text: "상황은 더 이상하게 흘러만 갔다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "그렇게 학생회에 가입하고서야 상황이 마무리가 되었다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "학생회 임원들은 전부 선배와 나를 남기고 학생회실을 나갔다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "정말... 이게 뭐람......//", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "그.... 미안 애들이 좀 짓궃지", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
];

const select1_dialogues = [
    { name: "김여주", text: "저는 괜찮았어요.. 그리고 좋았어요..", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "..어?", img: "images/백이현 전신.png", background: "images/교실 배경.png" },
    { name: "", text: "선배의 얼굴이 갑자기 선명하게 보였다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "이게 진짜 선배 얼굴이구나..", img: "", background: "images/교실 배경.png" },
    { name: "", text: "두 사람 사이에 기묘한 정적이 흐르고 얼굴은 새빨갛게 돼서 아무말도 못했다", img: "", background: "images/교실 배경.png" },
    { name: "백이현", text: "...", img: "images/백이현 전신.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "...", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "", text: "이 일이 있고 시간이 지난 후,", img: "", background: "images/교실 배경.png" },
    { name: "김여주", text: "...이현 선배~~~!", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "여주 왔어?", img: "images/백이현 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "어제 영화 재밌었지?", img: "images/백이현 전신.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "진짜 완전요", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "", text: "이현 선배와는 좋은 방향으로 발전해나갔고 자연스럽게 입학 첫날의 기억은 잊혀졌다", img: "", background: "images/교실 배경.png" },
    
];

const select2_dialogues = [
    { name: "김여주", text: "하하, 저는 그런 거에 관여하지 않습니다. 이만 가보겠습니다 선배님   ", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "백이현", text: "그으래..? 알겠어.. 조심히 가....", img: "images/백이현 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "넵, 수고하십쇼", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "", text: "", img: "그렇게 그냥 깍듯한 학생회 임원이 됐다", background: "images/교실 배경.png" },
    
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
            // currentDialogueIndex-=1;
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
    
    //////////////////////////////////////////////////////////////
    
    
    
    nextButton.addEventListener('click', () => {
        currentDialogueIndex++;
        if(currentDialogueIndex === 36){
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