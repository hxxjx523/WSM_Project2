const dialogues = [
    { name: "김여주", text: "오늘은 고등학교 입학식이다. 왜인지 상쾌한 기분! 좋은 일이 있을 것만 같다" },
    { name: "김여주", text: "\" 콰당!! \"" },
];

let currentDialogueIndex = 0;

const nameElement = document.querySelector('.name');
const dialogueElement = document.querySelector('.dialogue');
const nextButton = document.getElementById('nextButton');

function displayDialogue(index) {
    if (index >= dialogues.length) {
        nextButton.disabled = true;
        return;
    }

    const dialogue = dialogues[index];
    nameElement.textContent = dialogue.name;
    dialogueElement.textContent = dialogue.text;
}

nextButton.addEventListener('click', () => {
    currentDialogueIndex++;
    displayDialogue(currentDialogueIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    displayDialogue(currentDialogueIndex);
});
