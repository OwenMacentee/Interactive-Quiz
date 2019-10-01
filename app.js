// Creating a list which contains the correct answers so they can be crosschecked with the user's answers
const correctAnswers = ['B', 'A', 'A', 'B'];

const form = document.querySelector('.quiz-form');

const resultDiv = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];

// Checking answers are correct
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

// Scorlling to user's score once they have finished the quiz
    scrollTo(0,0);

// Creating counter effect for user's score
    let output = 0;
    const timer = setInterval(() => {
    resultDiv.querySelector('span').textContent = `${output}%`;
    if (output === score){
        clearInterval(timer);
    } else {
        output++;
    };
    }, 10)
   

// Displaying the user's score
    resultDiv.classList.remove("d-none");

});
