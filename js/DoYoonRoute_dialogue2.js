const dialogues = [
    { name: "", text: "이런저런 과거 회상에 빠져있던 나에게 누군가 다가왔다", img: "", background: "images/교실 배경.png"},
    { name: "???", text: "야.", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "", text: "아까 교문에서 만난 픽셀 인간이었다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "네에...?", img: "images/김여주 표정4.png", background: "images/교실 배경.png"},
    { name: "???", text: "다른 학교도 많은데 왜 여기로 온 거야?", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "", text: "이제는 픽셀 인간한테도 시비를 당하다니 웃기다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "어... 저를 아세요..?", img: "images/김여주 표정1.png", background: "images/교실 배경.png"},
    { name: "???", text: "...뭐야? 너 나 모르는 건 아니지?", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "", text: "빠르게 그의 교복에 있는 이름표를 봤다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "이름표엔 ‘도 윤’이라고 적혀있었다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "...너?", img: "images/김여주 표정4.png", background: "images/교실 배경.png"},
    { name: "", text: "유치원때부터 함께 했지만 중학교 2학년때 갑작스럽게 그가 유학을 가버린 바람에 헤어지게 됐다", img: "", background: "images/교실 배경.png"},
    { name: "김여주", text: "아니, 너가 도윤이라고? 언제 돌아 온 거야?", img: "images/김여주 표정4.png", background: "images/교실 배경.png"},
    { name: "도윤", text: "이번에 왔어, 너는 이 학교에 어떻게 왔는데?", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "김여주", text: "나는.. 좀 많은 일이 있었지..", img: "images/김여주 표정4.png", background: "images/교실 배경.png"},
    { name: "", text: "(드르륵) 선생으로 보이는 사람이 들어왔다", img: "", background: "images/교실 배경.png"},
    { name: "도윤", text: "이따 얘기해", img: "images/도윤 ver.1.png", background: "images/교실 배경.png" },
    { name: "", text: "도윤은 자기 자리로 돌아갔다", img: "", background: "images/교실 배경.png"},
    { name: "담임선생", text: "자~ 안녕하세요 저는 이번 담임을 맡은 ...", img: "", background: "images/교실 배경.png"},
    { name: "", text: "말도 안된다 도윤이 돌아왔다니, 그리고 같은 학교, 같은 반이라니", img: "", background: "images/교실 배경.png"},
    { name: "", text: "왜 제가 픽셀 인간인거야? 진짜 어이없는 날이다...", img: "", background: "images/교실 배경.png"},
    
];

const select1_dialogues = [  
    { name: "", text: "도윤은 나의 소꿉친구다", img: "", background: "images/교실 배경.png" },    
];

const select2_dialogues = [
    { name: "", text: "도윤은 나의 소꿉친구다", img: "", background: "images/교실 배경.png" },     
    { name: "", text: "그를 잊는 일은 있을 수 없다", img: "", background: "images/교실 배경.png" },      
    { name: "도윤", text: "나 도윤이잖아....", img: "도윤 ver.1.png", background: "images/교실 배경.png" },      
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


function displayDialogue(index) {
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }

    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;
    // dialogueElement.textContent = dialogue.text;
    // 만약 대화의 이름 (dialogue.name)이 빈 문자열이라면 nameWindow를 숨김
    if (dialogue.name === "") {
        nameWindow.style.visibility = 'hidden';
    } else {
        nameWindow.style.visibility = 'visible';
    }

    dialogueElement.textContent = dialogue.text;
    
    if (dialogue.img) {
        characterImageElement.src = dialogue.img;
        // 이미지 주소가 특정 값일 때만 이미지 위치를 변경
        if (dialogue.img.startsWith('images/김여주')) {
            characterImageElement.style.float = 'right';
            nameWindow.style.float = 'left';
            characterImageElement.style.paddingRight = '10vh';
            isImageOnRight = true;
        } else{
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

function yeojooChoise(){
    
    let likability = 0;


    const dialogue = select1_dialogues[0];
    
    select1.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        likability++;
        console.log(likability);
        dialogueElement.textContent = dialogue.text;
        if (dialogue.name === "" && dialogue.img === "") {
            nameWindow.style.visibility = 'hidden';
            characterImageElement.style.visibility = 'hidden';
        }
        
    });
    
    const dialogue2 = select2_dialogues[0];
    select2.addEventListener('click', () => {
        selectContainer.style.display = 'none';
        likability--;
        console.log(likability);
        dialogueElement.textContent = dialogue2.text;
        if (dialogue2.name === "" && dialogue2.img === "") {
            nameWindow.style.visibility = 'hidden';
            characterImageElement.style.visibility = 'hidden';
        }
    });
}

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    if(currentDialogueIndex === 10){
        selectContainer.style.display = 'flex';
        yeojooChoise(currentDialogueIndex);
    }
    characterImageElement.style.visibility = 'visible';
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});