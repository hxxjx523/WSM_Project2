const dialogues = [
    { name: "", text: "유치원때부터 함께 했지만 중학교 2학년때 갑작스럽게 그가 유학을 가버린 바람에 헤어지게 됐다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "아니, 너가 도윤이라고? 언제 돌아 온 거야?", img: "images/김여주 표정5.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "이번에 왔어, 너는 이 학교에 어떻게 왔는데?", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "나는.. 좀 많은 일이 있었지..", img: "images/김여주 표정5.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "이따 얘기해", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "", text: "도윤은 자기 자리로 돌아갔다", img: "", background: "images/교실 배경.png"},
    { name: "담임선생", text: "자~ 안녕하세요 저는 이번 담임을 맡은 ...", img: "", background: "images/교실 배경.png" },
    { name: "", text: "말도 안된다 도윤이 돌아왔다니, 그리고 같은 학교, 같은 반이라니", img: "", background: "images/교실 배경.png"},
    { name: "", text: "왜 제가 픽셀 인간인거야? 진짜 어이없는 날이다...", img: "", background: "images/교실 배경.png"},
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
    { name: "도윤", text: "어? 안녕", img: "images/도윤 ver.2.png", background: "images/학교 배경.png" },
    { name: "", text: "전보다 얼굴이 더 선명해졌다", img: "", background: "images/학교 배경.png"},
    { name: "김여주", text: "안녕..!", img: "images/김여주 표정4.png", background: "images/학교 배경.png" },
    { name: "도윤", text: "빨리 들어가자", img: "images/도윤 ver.2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "응..!", img: "images/김여주 표정4.png", background: "images/학교 배경.png" },
    { name: "", text: "<교실>", img: "", background: "images/교실 배경.png"},
    { name: "도윤", text: "어제 얘기를 다 못했네", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "그러게", img: "images/김여주 표정4.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "여기는 언제 이사온 거야?", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "이사 온 거는 아니고.. 통학하고 있어", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "1시간정도 걸리는 거 아니야?", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "응, 그정도?", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "음~ 그래? 너는 예전 그대로네", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "그런가? 너는 키가 좀 큰 것 같아", img: "images/김여주 표정7.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "‘좀’이 아니라 ‘많이’", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "하하, 거기서 트집잡는 거야?", img: "images/김여주 표정8.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "트집이 아니지~", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "여튼 트집이든 아니든, 너는 이 동네 살고 있는 거야?", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "응, 학교에서 차로 15분정도 걸려", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "와~ 좋겠다", img: "images/김여주 전신.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "우리 집 와볼래?", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "엑? 진짜?", img: "images/김여주 표정10.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "싫어?", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "아니! 진짜면 갈래", img: "images/김여주 표정10.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "오늘 괜찮아?", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "응응! 완전 좋아!!", img: "images/김여주 표정7.png", background: "images/교실 배경.png" },
    { name: "도윤", text: "알겠어~", img: "images/도윤 ver.2.png", background: "images/교실 배경.png" },
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
        currentSelect1Index-=1;
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
        if(currentDialogueIndex===dialogues.length){
            window.location.href = "DoyoonRoute3.html";
        }
    displayDialogue(currentDialogueIndex);
    characterImageElement.style.visibility = 'visible';
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});