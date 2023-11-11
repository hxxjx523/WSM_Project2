const dialogues = [
    { name: "", text: "미친듯이 달려서 교실에 도착했다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "하.. 다행히 늦지 않은 것같아", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "", text: "나는 내 이름 스티커가 붙여진 책상에 앉았다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "그러고 보니 아침에 이상한 일이 일어나서 학교에 대한 설명을 못했다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "내가 지금 있는 이 학교는 유명한 사립 고등학교, '장미고등학교'다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "장미고는 사립이면서 연예인도 많이 배출하기에 꿈의 학교로 불린다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "그리고 무엇보다 장미고는 미남이 많기로 유명하다!", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "사실 내가 좋아하는 아이돌 신재현이 장미고 졸업생이다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "이런 소식을 들은 중학생의 나는 작정하고 공부만 해서 들어올 수 있었다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "이런저런 과거 회상에 빠져있었다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "(드르륵)", img: "", background: "images/교실 배경.png" },
    { name: "", text: "선생으로 보이는 사람이 들어왔다", img: "", background: "images/교실 배경.png" },
    { name: "담임선생", text: "자~ 안녕하세요 저는 이번 담임을 맡은 ... ", img: "", background: "images/교실 배경.png" },
    { name: "", text: "이렇게 새학기가 시작되었다", img: "", background: "images/교실 배경.png" },
    { name: "", text: "입학식이라 그런지 학교가 빨리 끝났다", img: "", background: "images/교실 배경.png"},
    { name: "담임선생", text: "여러분 오늘은 이만 종례하겠습니다~", img: "", background: "images/교실 배경.png" },
    { name: "김여주", text: "후..", img: "images/김여주 표정5.png", background: "images/교실 배경.png" },
    { name: "", text: "오늘은 정말 다산다난했다..", img: "", background: "images/교실 배경.png"},
    { name: "", text: "아침부터 이상한 일을 겪고 지각까지 할 뻔하다니", img: "", background: "images/교실 배경.png"},
    { name: "", text: "참 어이없는 하루였다..", img: "", background: "images/교실 배경.png"},
    { name: "", text: "<김여주의 방>", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "핸드폰 메세지에 뭔가 와 있는 것 같다", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "(우측 상단에 있는 핸드폰을 클릭해보자)", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "메세지 앱에 들어가 봤다", img: "", background: "images/여주 방 배경.png"},
    { name: "김여주", text: "응??? 이게 뭐야???! 민들레 이 미ㅊ", img: "images/김여주 표정1.png", background: "images/여주 방 배경.png" },
    { name: "", text: "이건 농락이다 완벽한 농락이라고!", img: "", background: "images/여주 방 배경.png"},
    { name: "여주엄마", text: "여주야, 밥 먹으러 나와!", img: "", background: "images/여주 방 배경.png" },
    { name: "김여주", text: "앗, 네 엄마!", img: "images/김여주 표정4.png", background: "images/여주 방 배경.png" },
    { name: "", text: "<아침>", img: "", background: "images/여주 방 배경.png"},
    { name: "김여주", text: "허억..", img: "images/김여주 표정1.png", background: "images/여주 방 배경.png" },
    { name: "", text: "알람소리가 나를 깨웠다", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "잠깐만 나 잠든거야?", img: "", background: "images/여주 방 배경.png"},
    { name: "김여주", text: "어제 밥 먹고 잠와서 누워있었는데...", img: "images/김여주 표정5.png", background: "images/여주 방 배경.png" },
    { name: "", text: "그렇게 잠들어 버린 것이다", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "...일단 학교 가야겠지..?", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "<등교길>", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "그래도 오늘은 별다른 일 없길 바라며..", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "교문에서는 어제 본 픽셀과 살짝 다른 얼굴이 보였다", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "조금 더 선명해졌다고 해야하나?", img: "", background: "images/등굣길 배경.png"},
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
        let currentSelect1Index = 1;
        
        const dialogue = select1_dialogues[0];
        select1.addEventListener('click', () => {
            selectContainer.style.display = 'none';
            updateUI(dialogue);
            const select1NextButton = () => {
                if(currentSelect1Index===select1_dialogues.length){
                    window.location.href = "BaekLeeHyunRoute2.html";
                }
                updateUI(select1_dialogues[currentSelect1Index]);
                selectContainer.style.display = 'none';
                currentSelect1Index++;
                console.log(currentSelect1Index);
            };
            nextButton.addEventListener('click', select1NextButton);
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
    if(currentDialogueIndex===39){
        window.location.href = "BaekLeeHyunRoute3.html";
    }
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});