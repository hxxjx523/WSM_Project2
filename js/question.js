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
        let accumulatedValue = 0;

        function displayQuestion(question) {
            for (let key of keys) {
                const elem = document.getElementById(key);
                if (elem && question.hasOwnProperty(key)) {
                    elem.innerHTML = question[key];
                }
            }
            
        }
        
        let mainBoy;
        
        document.getElementById("nextButton").addEventListener("click", function() {
            let radio = document.querySelector('input[name="answer"]:checked');
            if (radio) {
                const selectedValue = parseInt(radio.value.substr(1)); // "a1" -> 1, "a2" -> 2, "a3" -> 3
                accumulatedValue += selectedValue;
                const accumulatedValueSpan = document.getElementById("accumulatedValue");
                console.log(accumulatedValue);
                
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion(questions[currentQuestionIndex]);
                } else {
                    swal("모든 질문 완료");
                    document.getElementById("nextButton").disabled = true;
                    
                    if (accumulatedValue >= 3 && accumulatedValue <= 4) {
                        mainBoy = "DoYoon";
                    } else if (accumulatedValue >= 5 && accumulatedValue <= 7) {
                        mainBoy = "Baekleehyun";
                    } else if (accumulatedValue >= 8 && accumulatedValue <= 9) {
                        mainBoy = "choijeayul";
                    }
                    
                    if (mainBoy) {
                        console.log(mainBoy); 
                        // location.href = "story1.html";
                        location.href = `${mainBoy}Route.html`;
                    }
                }
                radio.checked = false;
            } else {
                swal("답변을 선택해주세요");
            }
        });
        
        displayQuestion(questions[currentQuestionIndex]);
        if (mainBoy) {
            console.log(mainBoy);
            
        }
        // export { mainBoy }
        