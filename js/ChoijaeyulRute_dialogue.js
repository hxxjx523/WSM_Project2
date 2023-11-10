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
    { name: "", text: "앞에 있는 저 이상한 사람은 꽤 여유롭게 교문을 통과하고 있다", img: "images/최재율 ver.1.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "지금 이게 문제가 아니지! 일단 달리고 보자", img: "images/김여주 표정2.png", background: "images/등굣길 배경.png" },
    { name: "김여주", text: "허억, 허억,", img: "images/김여주 표정1.png", background: "images/학교 배경.png" },
    { name: "", text: "간신히 교문을 통과했다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "숨을 고르고 있는 나를 그 이상한 픽셀이 쳐다보았다", img: "", background: "images/학교 배경.png" },
    { name: "", text: "픽셀 인간은 살짝 쳐다보기만 할 뿐 아무 말 없이 천천히 걸어갔다", img: "", background: "images/학교 배경.png" },    
    { name: "김여주", text: "...?뭐야", img: "images/김여주 표정3.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "나도 서둘러서 가야겠다", img: "images/김여주 표정2.png", background: "images/학교 배경.png" },
    { name: "김여주", text: "하.. 다행히 늦지 않은 것같아", img: "images/김여주 표정5.png", background: "images/교실 배경.png"},
    { name: "", text: "나는 내 이름 스티커가 붙여진 책상에 앉았다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "그러고 보니 아침에 이상한 일이 일어나서 학교에 대한 설명을 못했다", img: "", background: "images/교실 배경.png"},
    { name: "", text: "내가 지금 있는 이 학교는 유명한 사립 고등학교, '장미고등학교'다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "장미고는 사립이면서 연예인도 많이 배출하기에 꿈의 학교로 불린다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "그리고 무엇보다 장미고는 미남이 많기로 유명하다!", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "사실 내가 좋아하는 아이돌 신재현이 장미고 졸업생이다", img: "", background: "images/학교 설명 배경.png"},
    { name: "", text: "이런 소식을 들은 중학생의 나는 작정하고 공부만 해서 들어올 수 있었다", img: "", background: "images/학교 설명 배경.png"}
];

let currentDialogueIndex = 0;
let isImageVisible = true; 
let isImageOnRight = true; 

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const characterImageElement = document.querySelector('.imgCharacter');
const nextButton = document.getElementById('nextButton');
const nameWindow = document.querySelector('.nameWindow');


function displayDialogue(index) {
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }

    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;

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
    displayDialogue(currentDialogueIndex);
    console.log(currentDialogueIndex)
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});

// if(currentDialogueIndex === 16){
//     window.location.href = mainBoy + "Route.html";
// }
