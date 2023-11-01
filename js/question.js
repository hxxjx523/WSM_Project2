let question1 = {
    q1 : "Q. 당신은 길을 걷고 있던 중 고양이 한 마리를 발견했습니다. 그 고양이의 생김새는?",
    a1 : " 1. 털이 복실한 장모 고양이",
    a2 : " 2. 호박 눈을 가진 샴고양이",
    a3 : " 3. 어미에게 버려진 새끼 고양이"
}

let question2= {
    q1 : "Q. 당신은 어떤 사람으로 기억되고 싶은가?",
    a1 : " 1. 훌륭한 사람",
    a2 : " 2. 지혜로운 사람",
    a3 : " 3. 용감한 사람"
}

let question3= {
    q1 : "Q. 당신이 배우고 싶은 것은?",
    a1 : " 1. 운동",
    a2 : " 2. 예술",
    a3 : " 3. 음악"
}

const questions = [question1, question2, question3];
const keys = ['q1', 'a1', 'a2', 'a3'];
let currentQuestionIndex = 0;

function displayQuestion(question) {
    for (let key of keys) {
        const elem = document.getElementById(key);
        if (elem && question.hasOwnProperty(key)) {
            elem.innerHTML = question[key];
        }
    }
}

document.getElementById("nextButton").addEventListener("click", function() {
    let radio = document.querySelector('input[name="answer"]:checked');

    if (radio) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {
            alert("모든 질문 완료");
            document.getElementById("nextButton").disabled = true;
        }
    } else {
        alert("답변을 선택해주세요");
    }
    radio.checked = 0;
});

displayQuestion(question1);

        const form = document.querySelector("#nextButton");
        const accumulatedValueSpan = document.getElementById("accumulatedValue");
        let accumulatedValue = 0;
        let previousValue = 0;

        // 라디오 버튼이 변경될 때 이벤트를 처리
        form.addEventListener("change", function(event) {
            const selectedRadio = document.querySelector('input[name="answer"]:checked');
            if (selectedRadio) {
                const selectedValue = parseInt(selectedRadio.value.substr(1)); // "a1" -> 1, "a2" -> 2, "a3" -> 3
                accumulatedValue = previousValue + selectedValue;
                accumulatedValueSpan.textContent = "누적된 값: " + accumulatedValue;
            }
        });