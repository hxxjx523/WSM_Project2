
const dialogues = [
    { name: "백이현", text: "어! 어제 지각할뻔한", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "어..어..! 선배님", img: "images/김여주 전신.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "하하, 어제는 교실 잘 찾아갔나요?", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "네에.. 덕분에..!", img: "images/김여주 표정7.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "도움이 됐다면 다행이네요", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "어제는 첫날인데 어쩌다가 지각할 뻔 했어요?", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "그게.. 아침부터 일이 좀 있어서..", img: "images/김여주 표정5.png", background: "images/학교 배경.png" },
    { name: "(학생회 임원1)", text: "선배! 손 좀 빌려줘요!! 제발!!", img: "", background: "images/학교 배경.png" },
    { name: "백이현", text: "엇, 잠깐만 다녀올게요, 조금만 기다려 줄 수 있어요?", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "..네네! 다녀오세요!", img: "images/김여주 표정4.png", background: "images/학교 배경.png" },
    { name: "", text: "백이현은 빠르게 소리가 난 쪽으로 갔다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "기다리라고 했으니깐 기다려야겠지?", img: "", background: "images/학교 배경.png" },
];

const select1_dialogues = [
    { name: "", text: "(타닥타닥)", img: "", background: "images/학교 배경.png" },
    { name: "", text: "누군가 엄청나게 빠른 속도로 뛰어왔다", img: "", background: "images/학교 배경.png" },
    { name: "백이현", text: "허억허억,, 하.. 미..안해요...", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "이거,,,, 먹어요,, 후..", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "", text: "나에게 사탕꾸러미를 줬다..!", img: "", background: "images/학교 배경.png" },
    { name: "김여주", text: "감사합니다 선배님..!", img: "images/김여주 전신.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "그냥.. 선배라고 불러요", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "네..! 선배", img: "images/김여주 표정6.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "나는 ‘여주’라고 불러도 될까요?", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "네네..!", img: "images/김여주 전신.png", background: "images/학교 배경.png" },
    { name: "", text: "낯가림 없는 성격인 듯하다", img: "", background: "images/학교 배경.png" },
    { name: "(학생회 임원2)", text: "이현선배!!!", img: "", background: "images/학교 배경.png" },
    { name: "김여주", text: "또 가보셔야 하는 거 아니에요?", img: "images/김여주 표정5.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "아, 이런.. 미안해요 가볼게요", img: "images/백이현 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "괜찮아요, 가보세요", img: "images/김여주 전신.png", background: "images/학교 배경.png" },
    { name: "", text: "또 달려갔다..", img: "", background: "images/학교 배경.png" },
    { name: "", text: "저 사람의 체력은 미쳤다..", img: "", background: "images/학교 배경.png" },
    { name: "", text: "그리고 저렇게 바쁘다니.. 평소에도 그런가?", img: "", background: "images/학교 배경.png" },
    { name: "", text: "그렇게 교실로 올라갔다", img: "", background: "images/학교 배경.png" },
];

const select2_dialogues = [
    { name: "", text: "그냥 다리도 아프고 굳이 기다릴 필요 없다고 생각했다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "그리고 그 후로 백이현 선배님을 볼 수 없었다", img: "", background: "images/학교 배경.png" },
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
    
    //////////////////////////////////////////////////////////////
    
    
    
    nextButton.addEventListener('click', () => {
        currentDialogueIndex++;
        if(currentDialogueIndex === 12){
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