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

// const keys = ['q1', 'a1', 'a2', 'a3'];

// for (let key of keys) {
//     const elem = document.getElementById(key);
//     if (elem && question1.hasOwnProperty(key)) {
//         elem.innerHTML = question1[key];
//     }
// }

// console.log(question1);


const questions = [question1, question2];
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
    // 선택된 radio button이 있는지 확인
    if (document.querySelector('input[name="answer"]:checked')) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(questions[currentQuestionIndex]);
        } else {
            // 모든 질문이 끝나면 다음 버튼을 비활성화 하거나 다른 액션을 취할 수 있습니다.
            alert("모든 질문이 끝났습니다!");
            document.getElementById("nextButton").disabled = true;
        }
    } else {
        alert("답변을 선택해주세요.");
    }
});

// 처음 시작할 때 question1을 출력
displayQuestion(question1);