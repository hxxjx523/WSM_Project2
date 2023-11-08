const dialogues = [
    { name: "김여주", text: "저건 픽셀이잖아!", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "", text: "앞에 있는 저 이상한 사람은 꽤 여유롭게 교문을 통과하고 있다", img: "images/백이현 ver.1.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "지금 이게 문제가 아니지! 일단 달리고 보자", img: "images/김여주 표정2.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "허억, 허억,", img: "images/김여주 표정1.png", background: "images/학교 배경.png" },
    { name: "", text: "간신히 교문을 통과했다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "숨을 고르고 있는 나를 그 이상한 픽셀이 쳐다보았다", img: "", background: "images/학교 배경.png"},
    { name: "???", text: "저기 괜찮으세요?", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "", text: "픽셀 인간이 나에게 말을 걸었다..!", img: "", background: "images/학교 배경.png" },    
    { name: "김여주", text: "아, 네...", img: "images/김여주 표정2.png", background: "images/학교 배경.png" },
    { name: "???", text: "첫날부터 지각할뻔 하다니 저희 둘 다 웃기네요ㅎㅎ", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "하하... 그러게요...", img: "images/김여주 표정4.png", background: "images/학교 배경.png" },
    { name: "???", text: "아, 저는 백이현이라고 해요. 그쪽은 신입생이신가요?", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "..네! 저는 김여주라고 합니다.. 1학년이에요..", img: "images/김여주 표정4.png", background: "images/학교 배경.png" },
    { name: "백이현", text: "그렇구나, 1학년 교실은 저쪽이에요. 지금 뛰어가면 늦지는 않을 것 같은데?", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "", text: "미친듯이 달려서 교실에 도착했다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "하.. 다행히 늦지 않은 것같아", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "", text: "나는 내 이름 스티커가 붙여진 책상에 앉았다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "그러고 보니 아침에 이상한 일이 일어나서 학교에 대한 설명을 못했다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "내가 지금 있는 이 학교는 유명한 사립 고등학교, '장미고등학교'다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "장미고는 사립이면서 연예인도 많이 배출하기에 꿈의 학교로 불린다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "그리고 무엇보다 장미고는 미남이 많기로 유명하다!", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "사실 내가 좋아하는 아이돌 신재현이 장미고 졸업생이다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "이런 소식을 들은 중학생의 나는 작정하고 공부만 해서 들어올 수 있었다", img: "", background: "images/학교 설명 배경.png"},
];

const select1_dialogues = [
    { name: "김여주", text: "정말요? 감사합니다", img:"images/김여주 전신.png", background: "images/학교 배경.png" },    
    { name: "", text: "나는 급하게 교실로 뛰어갔다", img: "", background: "images/학교 배경.png" },    
];

const select2_dialogues = [
    { name: "김여주", text: "저도 알고 있어요", img:"images/김여주 표정2.png", background: "images/학교 배경.png" },    
    { name: "백이현", text: "..그렇군요", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "", text: "나는 급하게 교실로 뛰어갔다", img: "", background: "images/학교 배경.png" },    
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


///////////////////////////////////////////////////////////////////////////////////


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

<<<<<<< HEAD
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

=======
function yeojooChoise(){
    
    let likability = 0;
    
>>>>>>> 963847ce42b24e6eb12f2970c31c54ce2877bfbf
    const dialogue = select1_dialogues[0];
    select1.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        likability++;
        console.log(likability);
        updateUI(dialogue);
        nextButton.addEventListener('click', () => {
            updateUI(select1_dialogues[currentSelect1Index]);
            selectContainer.style.display = 'none';
        });
        currentSelect1Index-=1;
    });
    
    const dialogue2 = select2_dialogues[0];
    select2.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        updateUI(dialogue2);
        // nextButton.addEventListener('click', () => {
            //     updateUI(select2_dialogues[currentSelect1Index]);
            //     currentSelect1Index++;
            // });
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
        if(currentDialogueIndex === 13){
            selectContainer.style.display = 'flex';
            yeojooChoice(currentDialogueIndex);
        }
    if(currentDialogueIndex===23){
        window.location.href = "BaekLeeHyunRoute2.html";
    }
    displayDialogue(currentDialogueIndex);
    characterImageElement.style.visibility = 'visible';
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});