const dialogues = [
    { name: "???", text: "음...", img: "images/도윤 ver.1.png" },
    { name: "", text: "픽셀 인간은 뚫어져라 나를 쳐다보다가 쌩 가버렸다", img: "" },    
    { name: "김여주", text: "...?뭐야", img: "images/김여주 전신.png" },
    { name: "김여주", text: "아, 나도 서둘러서 가야겠다", img: "images/김여주 전신.png" },
];

const backgroundImg = [
    "images/등굣길 배경.png"
];

let currentDialogueIndex = 0;

        const nameElement = document.querySelector('.name');
        const dialogueElement = document.querySelector('.dialogue');
        const characterImageElement = document.querySelector('.imgCharacter');
        const nextButton = document.getElementById('nextButton');

        function displayDialogue(index) {
            document.body.style.backgroundImage = `url('${backgroundImg[0]}')`;
            if (index >= dialogues.length) {
                nextButton.disabled = true;
                return;
            }

            const dialogue = dialogues[index];
            nameElement.textContent = dialogue.name;
            dialogueElement.textContent = dialogue.text;

            if (dialogue.img) {
                characterImageElement.src = dialogue.img;
                characterImageElement.style.display = 'block';
            } else {
                characterImageElement.style.display = 'none';
            }
        }

        nextButton.addEventListener('click', () => {
            currentDialogueIndex++;
            displayDialogue(currentDialogueIndex);
        });

        window.addEventListener('DOMContentLoaded', () => {
            displayDialogue(currentDialogueIndex);
        });
