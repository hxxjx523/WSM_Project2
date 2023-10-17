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

const q1 = document.getElementById('q1');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
q1.innerHTML = question1.q1;
a1.innerHTML = question1.a1;
a2.innerHTML = question1.a2;
a3.innerHTML = question1.a3;
console.log(question1);