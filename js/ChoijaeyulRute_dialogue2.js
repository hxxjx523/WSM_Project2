const dialogues = [
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
    { name: "김여주", text: "응??? 이게 뭐야???! 민들레 이 미ㅊ", img: "images/김여주 표정5.png", background: "images/여주 방 배경.png" },
    { name: "", text: "이건 농락이다 완벽한 농락이라고!", img: "", background: "images/여주 방 배경.png"},
    { name: "여주엄마", text: "여주야, 밥 먹으러 나와!", img: "", background: "images/여주 방 배경.png" },
    { name: "김여주", text: "앗, 네 엄마!", img: "images/김여주 표정5.png", background: "images/여주 방 배경.png" },
    { name: "", text: "<아침>", img: "", background: "images/여주 방 배경.png"},
    { name: "김여주", text: "허억..", img: "images/김여주 표정5.png", background: "images/여주 방 배경.png" },
    { name: "", text: "알람소리가 나를 깨웠다", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "잠깐만 나 잠든거야?", img: "", background: "images/여주 방 배경.png"},
    { name: "김여주", text: "어제 밥 먹고 잠와서 누워있었는데...", img: "images/김여주 표정5.png", background: "images/여주 방 배경.png" },
    { name: "", text: "그렇게 잠들어 버린 것이다", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "...일단 학교 가야겠지..?", img: "", background: "images/여주 방 배경.png"},
    { name: "", text: "<등교길>", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "그래도 오늘은 별다른 일 없길 바라며..", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "교문에서는 어제 본 픽셀과 살짝 다른 얼굴이 보였다", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "조금 더 선명해졌다고 해야하나?", img: "", background: "images/등굣길 배경.png"},
    { name: "최재율", text: "어! 안녀엉~~", img: "images/최재율 ver.2.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "...안녕!", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "최재율", text: "오늘도 만났네", img: "images/최재율 ver.2.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "응, 운명인가봐~", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "", text: "그냥 앞으로 얘랑 이렇게 말하는 게 좋을 것 같았다", img: "", background: "images/등굣길 배경.png"},
    { name: "최재율", text: "오! 나도 그 생각했는데!", img: "images/최재율 ver.2.png", background: "images/등굣길 배경.png"},
    { name: "최재율", text: "하하 통했다~", img: "images/최재율 ver.2.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "일단 교실로 갈까?", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "최재율", text: "그래, 그러자", img: "images/최재율 ver.2.png", background: "images/등굣길 배경.png"},
    { name: "", text: "<교실>", img: "", background: "images/교실 배경.png"},
    { name: "", text: "최재율은 내 옆자리에 앉아서 나와 얘기했다", img: "", background: "images/교실 배경.png"},
    { name: "최재율", text: "아니, 요즘에 ‘집어삼킨 WSM’ 보거든?", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "거기에 임정훈? 이라는 배우가 있단 말이야", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "연기를 너무 잘하는 거야, 그래서 엄청 재밌게 봤어~", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "오, 진짜? 나도 볼까 했었는데", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "꼭 봐, 진짜 재밌음~", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "알겠어~ 넌 드라마 자주 봐?", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "자주는 아니고 좀?", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "집에 혼자있는 시간이 많아서 좀 보는 것 같아", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "난 드라마 진짜 좋아하는데", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "맨날 보거든~", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "어울려~", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "너는 뭐 제일 좋아해?", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "‘리벤지 투 자바’!", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "엥, 예전 드라마 아니야?", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "고전의 맛이 있는 거야~", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "근데 이 작품 판권 문제때문에 몇 화 못봤어...", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "우리 집에  DVD있는데", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "응? ‘리벤지 투 자바’??!", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "어어~", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "헐, 나 보러가면 안돼?", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "최재율", text: "와도 돼", img: "images/최재율 ver.2.png", background: "images/교실 배경.png"},
    { name: "김여주", text: "허얼 최고!!!", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
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

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    if(currentDialogueIndex===58){
        window.location.href = "ChoijaeyulRute3.html";
    }
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});