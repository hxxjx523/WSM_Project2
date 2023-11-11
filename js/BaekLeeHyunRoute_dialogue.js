const dialogues = [
    { name: "김여주", text: "오늘은 고등학교 입학식이다. 왜인지 상쾌한 기분! 좋은 일이 있을 것만 같다", img: "images/김여주 전신.png", background: "images/등굣길 배경.png" },
    { name: "", text: "콰당!.", img: "", background: "images/등굣길 배경.png" },
    { name: "", text: "하늘에서 떨어지는 정체를 알 수 없는 물체와 여주가 부딪혔다", img: "", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "으으... 이게 뭐야!", img: "images/김여주 표정1.png", background: "images/등굣길 배경.png"},
    { name: "", text: "여주는 정체를 알 수 없는 물체를 들어올렸다", img: "", background: "images/등굣길 배경.png"},
    { name: "민들레", text: "안녕! 나는 사랑의 요정! 너는 진정한 사랑을 모르는 구나!!", img: "images/민들레.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "그게 무슨 소리야..!", img: "images/김여주 표정1.png", background: "images/등굣길 배경.png"},
    { name: "민들레", text: "너는 심각한 외모지상주의야! 사람의 얼굴만 보면 어떡하니!", img: "images/민들레.png", background: "images/등굣길 배경.png"},
    { name: "", text: "그렇다, 여주는 심각한 외모지상주의였다", img: "", background: "images/등굣길 배경.png"},
    { name: "", text: "여주의 최애 신재현은 아이돌계에서도 손 꼽히는 미남으로 어릴 적부터 좋아했던 탓에 눈이 너무 높아져버렸다", img: "", background: "images/등굣길 배경.png"},
    { name: "민들레", text: "좋아! 내가 사랑이 뭔지 알려주지! 네가 진정한 사랑을 알 때 그들의 얼굴이 보일거야", img: "images/민들레.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "그게 무슨..!!", img: "images/김여주 표정5.png", background: "images/등굣길 배경.png"},
    { name: "민들레", text: "그럼 갈게!!", img: "images/민들레.png", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "..? 이게 무슨 소리야..!!", img: "images/김여주 표정1.png", background: "images/등굣길 배경.png"},
    { name: "", text: "갑작스러운 만남을 뒤로 하고 얼마있으면 시작될 입학식에 늦을 것 같다!", img: "", background: "images/등굣길 배경.png"},
    { name: "김여주", text: "잠깐만, 지금 가도 지각이잖아! 뛰어!!!", img: "images/김여주 표정1.png", background: "images/등굣길 배경.png"},
    { name: "", text: "교문 앞에 이상한 뒷모습이 보인다. 설마 이거 요정의 저주인거야..?!", img: "", background: "images/등굣길 배경.png"},
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
    { name: "백이현", text: "그렇구나, 1학년 교실은 저쪽이에요. 지금 뛰어가면 늦지는 않을 것 같은데?", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" }
];

const select1_dialogues = [
    { name: "김여주", text: "정말요? 감사합니다", img:"images/김여주 전신.png", background: "images/학교 배경.png" },    
    { name: "", text: "나는 급하게 교실로 뛰어갔다", img: "", background: "images/학교 배경.png" },    
];

const select2_dialogues = [
    { name: "김여주", text: "저도 알고 있어요", img:"images/김여주 표정2.png", background: "images/학교 배경.png" },    
    { name: "백이현", text: "..그렇군요", img: "images/백이현 ver.1.png", background: "images/학교 배경.png" },
    { name: "", text: "그 후로 백이현을 만나지 못했다", img: "", background: "images/학교 배경.png" },    
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
    if(currentDialogueIndex === dialogues.length){
        selectContainer.style.display = 'flex';
        yeojooChoice(currentDialogueIndex);
    }
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex)
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});
    
function phone(){
    var popupX = (window.screen.width / 2) - (400 / 2);
    var popupY= (window.screen.height /2) - (600 / 2);
    window.open('home.html', 'phone', 'status=no, height=600, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
}