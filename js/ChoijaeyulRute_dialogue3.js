const dialogues = [
    { name: "", text: "정말 최재율의 집에 왔다", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "편하게 앉아~", img: "images/최재율 ver.2.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "잠깐만 기다려 비디오테이프 가져올게", img: "images/최재율 ver.2.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "응!", img: "images/김여주 표정5.png", background: "images/남주 방 배경.png"},
    { name: "", text: "최재율은 집은 엄청 넓었다 그리고 방에 dvd 플레이어가 있었다", background: "images/남주 방 배경.png"},
    { name: "", text: "올 때까지 시작이 조금 남은 것 같은데 뭘 하고 있을까?", background: "images/남주 방 배경.png"},
];

const select1_dialogues = [
    { name: "", text: "덜컥", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "힘들게 찾았어!", img: "images/최재율 ver.2.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "빨리 보자", img: "images/최재율 ver.2.png", background: "images/남주 방 배경.png"},
    { name: "", text: "최재율은 테이프를 넣었다", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "오, 시작한다~", img: "images/최재율 ver.2.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "재밌겠다..!!", img: "images/김여주 표정5.png", background: "images/남주 방 배경.png"},
    { name: "", text: "그렇게 영상이 시작됐다", background: "images/남주 방 배경.png"},
    { name: "주인공", text: "복수를 위해 살겠습니다!", background: "images/남주 방 배경.png"},
    { name: "주인공의 부하", text: "복수합시다! 그들에게!", background: "images/남주 방 배경.png"},
    { name: "", text: "드라마는 계속됐고 최재율도 제법 집중하면서 보고 있었다", background: "images/남주 방 배경.png"},
    { name: "", text: "얼굴이 더 선명해져 픽셀의 모습에서 벗어났다!", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "허업", img: "images/김여주 표정5.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "음.. 그만 쳐다보지? 부끄러운데~", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "앗", img: "images/김여주 표정4.png", background: "images/남주 방 배경.png"},
    { name: "", text: "이런 사람을 너무 빤히 쳐다봤다", background: "images/남주 방 배경.png"},
    { name: "", text: "빨리 드라마에 집중해야.. 할 수 없었다", background: "images/남주 방 배경.png"},
    { name: "", text: "자꾸 다른 게 신경쓰인다", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "드라마 재미없어?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "아니...", img: "images/김여주 표정4.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "음.. 내 예전 영상 볼래?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "응, 그래도 돼?", img: "images/김여주 전신.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "당연히~ 음, 테이프가 여깄을텐데", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "최재율은 금방 다른 테이프를 가져왔다", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "이건 내 유치원때야", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "", text: "탈칵", background: "images/남주 방 배경.png"},
    { name: "", text: "영상이 시작됐다", background: "images/남주 방 배경.png"},
    { name: "", text: "어린 시절의 최재율이 영상에서 카메라를 향해 인사하고 있었다", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "허억, 귀여워..", img: "images/김여주 표정2.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "귀엽지~", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "너무 뽀짝해", img: "images/김여주 표정6.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "하하, 그게 뭐야~", img: "images/최재율 표정2.png", background: "images/남주 방 배경.png"},
    { name: "최재율", text: "어때? 지금이랑 많이 달라?", img: "images/최재율 전신.png", background: "images/남주 방 배경.png"},
    { name: "김여주", text: "아니, 완전 똑같아", img: "images/김여주 표정8.png", background: "images/남주 방 배경.png"},
    
];

const select2_dialogues = [
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

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
   
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});